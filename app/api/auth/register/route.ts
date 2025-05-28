import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import { randomBytes } from 'crypto';
import { sendVerificationEmail } from '@/lib/email';

// Kayıt şeması doğrulama - daha esnek bir şifre doğrulama
const registerSchema = z.object({
  name: z.string().min(2, { message: 'Ad en az 2 karakter olmalıdır' }),
  email: z.string().email({ message: 'Geçerli bir e-posta adresi giriniz' }),
  password: z
    .string()
    .min(6, { message: 'Şifre en az 6 karakter olmalıdır' })
    // Basit şifre doğrulama - en az bir rakam olması yeterli
    .regex(/(?=.*[0-9])/, {
      message: 'Şifre en az bir rakam içermelidir',
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
      return NextResponse.json(
        { error: 'Veritabanı hatası: ' + String(dbLookupError) },
        { status: 500 }
      );
    }
    
    // Şifreyi hashle
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Doğrulama token'ı oluştur
    const verificationToken = randomBytes(32).toString('hex');
    
    // Test için fevziyenurksbr1@gmail.com'a admin yetkisi ver
    const userRole = email === 'fevziyenurksbr1@gmail.com' ? 'ADMIN' : 'USER';
    
    // Kullanıcıyı oluştur
    console.log('API: Veritabanına kullanıcı kaydediliyor', {
      name, email, role: userRole
    });
    
    try {
      // Kullanıcı oluşturma - temel alanlar
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          role: userRole,
          backupCodes: JSON.stringify([]) // SQLite için string tipinde boş array
        },
      });
      
      console.log('API: Kullanıcı başarıyla oluşturuldu:', user.id);
      
      // E-posta doğrulama gönder
      try {
        // Doğrulama URL'i oluştur
        const verificationUrl = `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/email-verify?token=${verificationToken}`;
        console.log('API: Doğrulama URL oluşturuldu:', verificationUrl);
        
        // E-posta göndermeyi dene
        const emailResult = await sendVerificationEmail(email, verificationUrl, name);
        
        console.log('API: E-posta gönderme sonucu:', emailResult);
        
        if (!emailResult.success) {
          console.error('API: E-posta gönderilemedi:', emailResult.error);
        } else {
          console.log('API: Doğrulama e-postası gönderildi:', email, emailResult.messageId);
        }
      } catch (error) {
        console.error('API: E-posta gönderme hatası:', error);
        // E-posta hatası olsa bile devam et, kullanıcı oluşturulmuş olmalı
      }
            
      // Kullanıcı bilgilerini döndür
      return NextResponse.json(
        { 
          message: 'Kullanıcı başarıyla oluşturuldu. Lütfen e-posta adresinizi doğrulayın.',
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            // Test için URL'i yanıtta gönderelim
            verificationUrl: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/email-verify?token=${verificationToken}`
          }
        },
        { status: 201 }
      );
    } catch (createError) {
      console.error('API: Kullanıcı oluşturma hatası:', createError);
      return NextResponse.json(
        { error: 'Kullanıcı oluşturulurken veritabanı hatası oluştu', details: String(createError) },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('API: Kayıt genel hatası:', error);
    return NextResponse.json(
      { error: 'Kullanıcı oluşturulurken bir hata oluştu', details: error instanceof Error ? error.message : 'Bilinmeyen hata' },
      { status: 500 }
    );
  }
}