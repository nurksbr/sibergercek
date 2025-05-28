import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    // Token al
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');

    if (!token) {
      return NextResponse.json(
        { error: 'Doğrulama tokeni eksik' },
        { status: 400 }
      );
    }

    console.log('API: E-posta doğrulama isteği alındı, token:', token);

    // Token ile kullanıcıyı bul
    const user = await prisma.user.findFirst({
      where: {
        emailVerificationToken: token,
        emailVerificationExpires: {
          gt: new Date() // Token süresi dolmamış olmalı
        },
        isEmailVerified: false // Henüz doğrulanmamış olmalı
      }
    });

    if (!user) {
      console.log('API: Geçersiz veya süresi dolmuş token');
      return NextResponse.json(
        { error: 'Geçersiz veya süresi dolmuş doğrulama bağlantısı' },
        { status: 400 }
      );
    }

    console.log('API: Kullanıcı bulundu, e-posta doğrulanıyor:', user.email);

    // Kullanıcıyı doğrulanmış olarak işaretle
    await prisma.user.update({
      where: { id: user.id },
      data: {
        isEmailVerified: true,
        emailVerificationToken: null, // Token artık gerekli değil
        emailVerificationExpires: null // Bitiş tarihi de gerekli değil
      }
    });

    console.log('API: E-posta başarıyla doğrulandı:', user.email);

    // Başarı sayfasına yönlendir
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/email-verify-success`);
  } catch (error) {
    console.error('API: E-posta doğrulama hatası:', error);
    return NextResponse.json(
      { error: 'Doğrulama işlemi sırasında bir hata oluştu' },
      { status: 500 }
    );
  }
} 