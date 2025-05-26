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

  const handleLogout = async () => {
    try {
      // LocalStorage'ı temizle
      localStorage.removeItem('cyberly_user')
      localStorage.removeItem('cyberly_token')
      
      // Cookie'yi temizle
      document.cookie = 'auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
      
      // Giriş sayfasına yönlendir
      router.push('/giris')
    } catch (error) {
      console.error('Çıkış yapılırken hata:', error)
      // Hata durumunda zorla çıkış yap
      localStorage.removeItem('cyberly_user')
      localStorage.removeItem('cyberly_token')
      document.cookie = 'auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
      window.location.href = '/giris'
    }
  }

  return (
    <div className="w-64 bg-white border-r h-screen">
      <div className="p-6">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
      </div>
      <nav className="space-y-1 px-3">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900',
                pathname === item.href && 'bg-gray-100 text-gray-900'
              )}
            >
              <Icon className="h-4 w-4" />
              {item.title}
            </Link>
          )
        })}
        <Link
          href="/admin-panel/profile"
          className={cn(
            'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900',
            pathname === '/admin-panel/profile' && 'bg-gray-100 text-gray-900'
          )}
        >
          <User className="h-4 w-4" />
          Profilim
        </Link>
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
        >
          <LogOut className="h-4 w-4" />
          Çıkış Yap
        </button>
      </nav>
    </div>
  )
} 