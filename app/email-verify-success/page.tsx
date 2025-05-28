'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function EmailVerifySuccessPage() {
  const router = useRouter()
  
  useEffect(() => {
    // 5 saniye sonra giriş sayfasına yönlendir
    const timer = setTimeout(() => {
      router.push('/giris')
    }, 5000)
    
    return () => clearTimeout(timer)
  }, [router])
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-cyan-400">E-posta Doğrulandı!</h1>
        </div>
        
        <div className="text-center py-6">
          <div className="bg-green-900/30 text-green-300 p-4 rounded-md mb-6">
            <p className="font-bold mb-2">Tebrikler!</p>
            <p>E-posta adresiniz başarıyla doğrulandı. Artık giriş yapabilirsiniz.</p>
            <p className="mt-2 text-sm">5 saniye içinde otomatik olarak giriş sayfasına yönlendirileceksiniz.</p>
          </div>
          <Link 
            href="/giris" 
            className="inline-flex items-center justify-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-md transition-colors"
          >
            Hemen Giriş Yap
          </Link>
        </div>
      </div>
    </div>
  )
} 