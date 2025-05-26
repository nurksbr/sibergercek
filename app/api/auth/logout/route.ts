import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  console.log('Logout API çağrıldı');
  
  try {
    // Cookie'yi temizle
    const response = NextResponse.json({ message: 'Başarıyla çıkış yapıldı' }, { status: 200 });
    
    // Cookie'yi sil - farklı seçeneklerle daha güvenli silme
    response.cookies.set({
      name: 'auth_token',
      value: '',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 0, // Hemen expire olsun
      path: '/',
      expires: new Date(0), // 1970-01-01'e expire olsun, kesin silme için
    });
    
    // Ekstra güvenlik: domain olmadan da temizleme yap
    response.cookies.set({
      name: 'auth_token',
      value: '',
      path: '/',
      expires: new Date(0),
    });
    
    // Cache-Control header'ı ekle
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    
    console.log('Logout API: Çıkış başarılı, cookie temizlendi');
    return response;
  } catch (error) {
    console.error('Çıkış yapılırken hata:', error);
    
    // Hata durumunda da temiz bir yanıt döndür
    const errorResponse = NextResponse.json(
      { error: 'Çıkış yapılırken bir hata oluştu' },
      { status: 500 }
    );
    
    // Hata durumunda da cookie'yi temizlemeye çalış
    errorResponse.cookies.set({
      name: 'auth_token',
      value: '',
      path: '/',
      expires: new Date(0),
    });
    
    return errorResponse;
  }
} 