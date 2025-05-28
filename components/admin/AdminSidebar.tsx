'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  Users,
  Settings,
  FileText,
  LogOut,
  User,
  BookOpen,
  PenTool,
  Edit
} from 'lucide-react'
import { useState, useEffect } from 'react'

const menuItems = [
  {
    title: 'Dashboard',
    href: '/admin-panel',
    icon: LayoutDashboard
  },
  {
    title: 'Kullanıcılar',
    href: '/admin-panel/users',
    icon: Users
  },
  {
    title: 'İçerikler',
    href: '/admin-panel/contents',
    icon: FileText
  },
  {
    title: 'Eğitimler',
    href: '/admin-panel/egitimler',
    icon: BookOpen
  },
  {
    title: 'Blog',
    href: '/admin-panel/blog',
    icon: PenTool
  },
  {
    title: 'Ayarlar',
    href: '/admin-panel/settings',
    icon: Settings
  }
]

export default function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [isNavigating, setIsNavigating] = useState(false)

  const handleNavigation = (href: string, e: React.MouseEvent) => {
    e.preventDefault()
    setIsNavigating(true)
    console.log(`Navigating to: ${href}`)
    
    // Yönlendirme işlemini gerçekleştir
    router.push(href)
    
    // İşlem tamamlandı
    setTimeout(() => setIsNavigating(false), 1000)
  }

  const handleLogout = async (e: React.MouseEvent) => {
    e.preventDefault()
    try {
      console.log('Çıkış yapılıyor...')
      setIsNavigating(true)
      
      // LocalStorage'ı temizle
      localStorage.removeItem('cyberly_user')
      localStorage.removeItem('cyberly_token')
      
      // Tüm sibergercek ile ilgili localStorage verilerini temizle
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith('cyberly_')) {
          localStorage.removeItem(key)
        }
      })
      
      // Cookie'yi temizle
      document.cookie = 'auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
      document.cookie.split(';').forEach(cookie => {
        const eqPos = cookie.indexOf('=')
        const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim()
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
      })
      
      // Giriş sayfasına yönlendir
      router.push('/giris')
    } catch (error) {
      console.error('Çıkış yapılırken hata:', error)
      // Hata durumunda zorla çıkış yap
      localStorage.removeItem('cyberly_user')
      localStorage.removeItem('cyberly_token')
      document.cookie = 'auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
      window.location.href = '/giris'
    } finally {
      setIsNavigating(false)
    }
  }

  return (
    <div className="w-64 bg-white border-r h-screen relative z-10">
      <div className="p-6">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
      </div>
      <nav className="space-y-1 px-3">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavigation(item.href, e)}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900',
                pathname === item.href && 'bg-gray-100 text-gray-900',
                isNavigating && 'pointer-events-none opacity-50'
              )}
            >
              <Icon className="h-4 w-4" />
              {item.title}
            </a>
          )
        })}
        <a
          href="/admin-panel/profile"
          onClick={(e) => handleNavigation('/admin-panel/profile', e)}
          className={cn(
            'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900',
            pathname === '/admin-panel/profile' && 'bg-gray-100 text-gray-900',
            isNavigating && 'pointer-events-none opacity-50'
          )}
        >
          <User className="h-4 w-4" />
          Profilim
        </a>
        <button
          onClick={handleLogout}
          disabled={isNavigating}
          className={cn(
            "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900",
            isNavigating && "opacity-50 cursor-not-allowed"
          )}
        >
          <LogOut className="h-4 w-4" />
          Çıkış Yap
        </button>
      </nav>
    </div>
  )
} 