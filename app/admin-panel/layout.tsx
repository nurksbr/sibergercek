'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import AdminSidebar from '@/components/admin/AdminSidebar'
import Navbar from '@/components/Navbar'

export default function AdminLayout({
  children
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const { data: session, status } = useSession()

  // Client tarafında admin kontrolü yap
  useEffect(() => {
    if (status === 'loading') return
    
    if (status === 'unauthenticated') {
      console.log('Admin paneli: Kullanıcı giriş yapmamış')
      router.push('/giris')
      return
    }
    
    // Admin kontrolü yap
    if (session?.user && !session.user.isAdmin) {
      console.log('Admin paneli: Kullanıcı admin değil')
      router.push('/')
      return
    }
    
    setLoading(false)
  }, [router, session, status])

  if (loading || status === 'loading') {
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