import { prisma } from '@/lib/prisma'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, Pencil, Trash2 } from 'lucide-react'
import Link from 'next/link'

async function getUsers() {
  const users = await prisma.user.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })
  return users
}

export default async function UsersPage() {
  const users = await getUsers()

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Kullanıcılar</h2>
          <p className="text-muted-foreground">
            Tüm kullanıcıları buradan yönetebilirsiniz.
          </p>
        </div>
        <Button asChild>
          <Link href="/admin-panel/users/new">
            <Plus className="mr-2 h-4 w-4" />
            Yeni Kullanıcı
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Kullanıcı Listesi</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="h-12 px-4 text-left align-middle font-medium">İsim</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">Email</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">Rol</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">Kayıt Tarihi</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b">
                    <td className="p-4">{user.name}</td>
                    <td className="p-4">{user.email}</td>
                    <td className="p-4">{user.isAdmin ? 'Admin' : 'Kullanıcı'}</td>
                    <td className="p-4">
                      {new Date(user.createdAt).toLocaleDateString('tr-TR')}
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={`/admin-panel/users/${user.id}/edit`}>
                            <Pencil className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 