'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function EmailVerifyPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get('token')
  
  const [isVerifying, setIsVerifying] = useState(true)
  const [verificationResult, setVerificationResult] = useState<{
    success: boolean
    message: string
  }>({ success: false, message: '' })
  
  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) {
        setIsVerifying(false)
        setVerificationResult({
          success: false,
          message: 'Geçersiz doğrulama bağlantısı. Lütfen geçerli bir doğrulama bağlantısı kullanın.'
        })
        return
      }
      
      try {
        const response = await fetch('/api/auth/verify-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token }),
        })
        
        const data = await response.json()
        
        setIsVerifying(false)
        setVerificationResult({
          success: response.ok,
          message: data.message
        })
      } catch (error) {
        setIsVerifying(false)
        setVerificationResult({
          success: false,
          message: 'Doğrulama sırasında bir hata oluştu. Lütfen daha sonra tekrar deneyin.'
        })
      }
    }
    
    verifyEmail()
  }, [token])
  
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-lg p-8 text-white">
        <h1 className="text-2xl font-bold text-center mb-6">E-posta Doğrulama</h1>
        
        {isVerifying ? (
          <div className="flex flex-col items-center space-y-4">
            <div className="w-12 h-12 border-t-2 border-b-2 border-cyan-500 rounded-full animate-spin"></div>
            <p className="text-gray-400">E-posta adresiniz doğrulanıyor...</p>
          </div>
        ) : (
          <div className="text-center">
            {verificationResult.success ? (
              <>
                <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-green-500 mb-2">Doğrulama Başarılı</h2>
                <p className="text-gray-300 mb-6">{verificationResult.message}</p>
                <Link 
                  href="/giris" 
                  className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg px-5 py-2.5 transition-colors"
                >
                  Giriş Yap
                </Link>
              </>
            ) : (
              <>
                <div className="w-16 h-16 mx-auto bg-red-500/20 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-red-500 mb-2">Doğrulama Başarısız</h2>
                <p className="text-gray-300 mb-6">{verificationResult.message}</p>
                <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3 justify-center">
                  <Link 
                    href="/uye-ol" 
                    className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg px-5 py-2.5 transition-colors"
                  >
                    Tekrar Kayıt Ol
                  </Link>
                  <Link 
                    href="/" 
                    className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg px-5 py-2.5 transition-colors"
                  >
                    Ana Sayfa
                  </Link>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
} 