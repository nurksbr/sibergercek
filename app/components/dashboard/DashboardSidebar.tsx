'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  User,
  BookOpen,
  Award,
  Bell,
  Settings
} from 'lucide-react'

const sidebarItems = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard
  },
  {
    title: 'Profilim',
    href: '/dashboard/profilim',
    icon: User
  },
  {
    title: 'Eğitimlerim',
    href: '/dashboard/egitimlerim',
    icon: BookOpen
  },
  {
    title: 'Sertifikalarım',
    href: '/dashboard/sertifikalarim',
    icon: Award
  },
  {
    title: 'Bildirimler',
    href: '/dashboard/bildirimler',
    icon: Bell
  },
  {
    title: 'Ayarlar',
    href: '/dashboard/ayarlar',
    icon: Settings
  }
]

export default function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-white border-r h-screen sticky top-0">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900">Panel</h2>
      </div>
      <nav className="space-y-1 px-3">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center px-3 py-2 text-sm font-medium rounded-md',
                isActive
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              )}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.title}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
} 