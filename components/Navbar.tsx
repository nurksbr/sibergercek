'use client'

import { useSession, signOut } from 'next-auth/react'
import { Bell, Search } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const { data: session } = useSession()
  const router = useRouter()

  const handleLogout = async () => {
    await signOut({ redirect: false })
    router.push('/giris')
  }

  return (
    <div className="h-16 border-b bg-white px-8">
      <div className="flex h-full items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Ara..."
              className="h-10 w-64 rounded-lg border bg-gray-50 pl-10 pr-4 text-sm outline-none focus:border-gray-400"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative rounded-full p-2 hover:bg-gray-100">
            <Bell className="h-5 w-5 text-gray-500" />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
          </button>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gray-200" />
            <div>
              <p className="text-sm font-medium">{session?.user?.name}</p>
              <p className="text-xs text-gray-500">{session?.user?.email}</p>
            </div>
          </div>
          {session && (
            <button 
              onClick={handleLogout}
              className="ml-4 px-3 py-1 text-sm bg-red-100 text-red-600 rounded hover:bg-red-200"
            >
              Çıkış
            </button>
          )}
        </div>
      </div>
    </div>
  )
} 