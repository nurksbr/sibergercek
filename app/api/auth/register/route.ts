import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import { sendVerificationEmail } from '@/lib/email';
import { randomBytes } from 'crypto';

// Kayıt şeması doğrulama
const registerSchema = z.object({
  name: z.string().min(2, { message: 'Ad en az 2 karakter olmalıdır' }),
  email: z.string().email({ message: 'Geçerli bir e-posta adresi giriniz' }),
  password: z
    .string()
    .min(8, { message: 'Şifre en az 8 karakter olmalıdır' })
    .regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, {
      message: 'Şifre en az bir büyük harf, bir küçük harf ve bir rakam içermelidir',
    }),
});

export async function POST(request: NextRequest) {
  console.log('API: Kayıt endpoint çağrıldı');
  
  try {
    // İsteği JSON olarak parse et
    let body;
    try {
      const text = await request.text();
      console.log('API: Ham kayıt isteği:', text);
      body = JSON.parse(text);
      console.log('API: İstek gövdesi başarıyla parse edildi:', body);
    } catch (parseError) {
      console.error('API: JSON parse hatası:', parseError);
      return NextResponse.json(
        { error: 'Geçersiz istek formatı' },
        { status: 400 }
      );
    }
    
    // Gelen verileri doğrula
    const result = registerSchema.safeParse(body);
    if (!result.success) {
      console.log('API: Doğrulama hatası:', result.error.issues);
      return NextResponse.json(
        { error: 'Doğrulama hatası', issues: result.error.issues },
        { status: 400 }
      );
    }
    
    const { name, email, password } = result.data;
    
    // E-posta adresi zaten kullanılıyor mu kontrol et
    console.log('API: E-posta kontrolü yapılıyor:', email);
    try {
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });
      
      if (existingUser) {
        console.log('API: Bu e-posta zaten kullanımda:', email);
        return NextResponse.json(
          { error: 'Bu e-posta adresi zaten kullanılıyor' },
          { status: 400 }
        );
      }
      
      console.log('API: E-posta kullanılabilir, kullanıcı oluşturuluyor');
    } catch (dbLookupError) {
      console.error('API: E-posta kontrolü sırasında veritabanı hatası:', dbLookupError);
      throw new Error('Veritabanı sorgusu sırasında hata oluştu');
    }
    
    // Şifreyi hashle
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Doğrulama token'ı oluştur
    const verificationToken = randomBytes(32).toString('hex');
    
    // Token için son geçerlilik tarihi (24 saat)
    const verificationExpires = new Date(Date.now() + 24 * 60 * 60 * 1000);
    
    // Kullanıcıyı oluştur
    console.log('API: Veritabanına kullanıcı kaydediliyor');
    try {
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          role: 'USER',
          isEmailVerified: false,
          emailVerificationToken: verificationToken,
          emailVerificationExpires: verificationExpires,
          backupCodes: JSON.stringify([]),
        },
      });
      
      console.log('API: Kullanıcı başarıyla oluşturuldu:', user.id);
      
      // Doğrulama e-postası gönder
      const verificationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/email-verify?token=${verificationToken}`;
      
      await sendVerificationEmail(email, verificationUrl, name);
      
      return NextResponse.json(
        { 
          message: 'Kullanıcı başarıyla oluşturuldu. Lütfen e-posta adresinizi doğrulayın.',
          user: {
            id: user.id,
            name: user.name,
            email: user.email
          }
        },
        { status: 201 }
      );
    } catch (createError) {
      console.error('API: Kullanıcı oluşturma hatası:', createError);
      throw new Error('Kullanıcı oluşturulurken veritabanı hatası oluştu');
    }
  } catch (error) {
    console.error('API: Kayıt genel hatası:', error);
    return NextResponse.json(
      { error: 'Kullanıcı oluşturulurken bir hata oluştu', details: error instanceof Error ? error.message : 'Bilinmeyen hata' },
      { status: 500 }
    );
  }
}