'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AdminSidebar from '@/components/admin/AdminSidebar'
import Navbar from '@/components/Navbar'

export default function AdminLayout({
  children
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  // Client tarafında admin kontrolü yap
  useEffect(() => {
    const checkAdminStatus = () => {
      try {
        // LocalStorage'dan kullanıcı bilgilerini al
        const userStr = localStorage.getItem('cyberly_user')
        if (!userStr) {
          console.log('Admin paneli: Kullanıcı bilgisi bulunamadı')
          router.push('/giris')
          return
        }

        const user = JSON.parse(userStr)
        
        // Admin kontrolü yap
        if (!user.isAdmin) {
          console.log('Admin paneli: Kullanıcı admin değil')
          router.push('/giris')
          return
        }
        
        setLoading(false)
      } catch (error) {
        console.error('Admin kontrolü sırasında hata:', error)
        router.push('/giris')
      }
    }

    checkAdminStatus()
  }, [router])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-lg text-gray-700">Yükleniyor...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen relative z-20 pointer-events-auto">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  )
} 