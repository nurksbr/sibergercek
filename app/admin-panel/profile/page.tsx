import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Shield } from 'lucide-react'
import bcrypt from 'bcrypt'
import { prisma } from '@/lib/prisma'

export default async function ProfilePage() {
  const session = await getServerSession(authOptions)

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Profilim</h2>
        <p className="text-muted-foreground">
          Profil bilgilerinizi buradan düzenleyebilirsiniz.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Profil Bilgileri</CardTitle>
              {session?.user?.isAdmin && (
                <Badge variant="default" className="flex items-center gap-1">
                  <Shield className="h-3 w-3" />
                  Admin
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Ad Soyad</Label>
              <Input id="name" defaultValue={session?.user?.name || ''} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-posta</Label>
              <Input id="email" defaultValue={session?.user?.email || ''} disabled />
            </div>
            <div className="space-y-2">
              <Label htmlFor="education">Eğitim</Label>
              <Input
                id="education"
                defaultValue="Fırat Üniversitesi Yazılım Mühendisliği"
                disabled
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Şifre Değiştir</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Mevcut Şifre</Label>
              <Input id="currentPassword" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="newPassword">Yeni Şifre</Label>
              <Input id="newPassword" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Yeni Şifre (Tekrar)</Label>
              <Input id="confirmPassword" type="password" />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button>Değişiklikleri Kaydet</Button>
        </div>
      </div>
    </div>
  )
}

export async function POST(req: Request) {
  const { email, password } = await req.json()

  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) {
    return Response.json({ error: 'Kullanıcı bulunamadı' }, { status: 401 })
  }

  // Şifreyi karşılaştır
  const isPasswordValid = await bcrypt.compare(password, user.password)
  if (!isPasswordValid) {
    return Response.json({ error: 'Geçersiz kimlik bilgileri' }, { status: 401 })
  }

  // Giriş başarılıysa devam et...
}