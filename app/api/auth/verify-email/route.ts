import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { token } = body

    if (!token) {
      return NextResponse.json(
        { message: 'Doğrulama token\'ı gereklidir' },
        { status: 400 }
      )
    }

    // Token ile kullanıcıyı bul
    const user = await prisma.user.findFirst({
      where: {
        emailVerificationToken: token,
        emailVerificationExpires: {
          gte: new Date() // Süresi dolmamış token
        }
      }
    })

    if (!user) {
      return NextResponse.json(
        { message: 'Geçersiz veya süresi dolmuş doğrulama bağlantısı' },
        { status: 400 }
      )
    }

    // Kullanıcı zaten doğrulanmış mı?
    if (user.isEmailVerified) {
      return NextResponse.json(
        { message: 'E-posta adresiniz zaten doğrulanmış' },
        { status: 200 }
      )
    }

    // Kullanıcıyı doğrulanmış olarak güncelle
    await prisma.user.update({
      where: { id: user.id },
      data: {
        isEmailVerified: true,
        emailVerificationToken: null,
        emailVerificationExpires: null
      }
    })

    return NextResponse.json(
      { message: 'E-posta adresiniz başarıyla doğrulandı. Şimdi giriş yapabilirsiniz.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('E-posta doğrulama hatası:', error)
    return NextResponse.json(
      { message: 'Doğrulama işlemi sırasında bir hata oluştu' },
      { status: 500 }
    )
  }
} 