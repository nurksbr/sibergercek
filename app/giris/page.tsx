'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { signIn } from 'next-auth/react'

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams?.get('callbackUrl') || '/'
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })
  const [errors, setErrors] = useState<{email?: string; password?: string}>({})
  const [isLoading, setIsLoading] = useState(false)
  const [loginError, setLoginError] = useState('')
  const [loginSuccess, setLoginSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    
    // Hata mesajlarını temizle
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const validateForm = () => {
    const newErrors: {email?: string; password?: string} = {}
    
    if (!formData.email) {
      newErrors.email = 'E-posta adresi gereklidir'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi giriniz'
    }
    
    if (!formData.password) {
      newErrors.password = 'Şifre gereklidir'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Şifre en az 6 karakter olmalıdır'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoginError('')
    setLoginSuccess(false)
    
    if (!validateForm()) return
    
    setIsLoading(true)
    console.log('NextAuth ile giriş denemesi başlatılıyor...')
    
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email: formData.email,
        password: formData.password,
      })
      
      if (result?.error) {
        console.error('Giriş hatası:', result.error)
        setLoginError('E-posta veya şifre hatalı. Lütfen tekrar deneyin.')
      } else {
        console.log('Giriş başarılı, yönlendiriliyor...')
        setLoginSuccess(true)
        
        // Callback URL'e yönlendir
        setTimeout(() => {
          router.push(callbackUrl)
        }, 1000)
      }
    } catch (error) {
      console.error('Giriş işlemi sırasında hata:', error)
      setLoginError('Giriş işlemi sırasında bir hata oluştu. Lütfen tekrar deneyin.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-900">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Link href="/" className="text-white text-2xl font-bold">
            CYBERLY
          </Link>
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
          Hesabınıza giriş yapın
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-gray-800 px-4 py-8 shadow sm:rounded-lg sm:px-10">
          {loginError && (
            <div className="mb-4 rounded-md bg-red-50 p-4">
              <div className="flex">
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">Hata</h3>
                  <div className="mt-2 text-sm text-red-700">
                    <p>{loginError}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {loginSuccess && (
            <div className="mb-4 rounded-md bg-green-50 p-4">
              <div className="flex">
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-800">Başarılı</h3>
                  <div className="mt-2 text-sm text-green-700">
                    <p>Giriş başarılı! Yönlendiriliyorsunuz...</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                E-posta adresi
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`block w-full rounded-md px-3 py-2 bg-gray-700 text-white shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm ${errors.email ? 'border-red-500' : 'border-gray-600'}`}
                />
                {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white">
                Şifre
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`block w-full rounded-md px-3 py-2 bg-gray-700 text-white shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm ${errors.password ? 'border-red-500' : 'border-gray-600'}`}
                />
                {errors.password && <p className="mt-2 text-sm text-red-500">{errors.password}</p>}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-300">
                  Beni hatırla
                </label>
              </div>

              <div className="text-sm">
                <Link href="/sifremi-unuttum" className="font-medium text-indigo-400 hover:text-indigo-300">
                  Şifremi unuttum
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isLoading ? 'Giriş yapılıyor...' : 'Giriş yap'}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-gray-800 px-2 text-gray-400">Henüz hesabınız yok mu?</span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/kayit"
                className="flex w-full justify-center rounded-md bg-gray-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                Yeni hesap oluştur
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}