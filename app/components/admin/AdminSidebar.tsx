'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  Users,
  BookOpen,
  Settings,
  FileText,
  MessageSquare
} from 'lucide-react'

const sidebarItems = [
  {
    title: 'Dashboard',
    href: '/admin-panel',
    icon: LayoutDashboard
  },
  {
    title: 'Kullanıcılar',
    href: '/admin-panel/kullanicilar',
    icon: Users
  },
  {
    title: 'Eğitimler',
    href: '/admin-panel/egitimler',
    icon: BookOpen
  },
  {
    title: 'Blog Yazıları',
    href: '/admin-panel/blog',
    icon: FileText
  },
  {
    title: 'Yorumlar',
    href: '/admin-panel/yorumlar',
    icon: MessageSquare
  },
  {
    title: 'Ayarlar',
    href: '/admin-panel/ayarlar',
    icon: Settings
  }
]

export default function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-white border-r h-screen sticky top-0">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900">Admin Panel</h2>
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