import { prisma } from '@/lib/prisma'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, Pencil, Trash2, Eye } from 'lucide-react'
import Link from 'next/link'

async function getContents() {
  const contents = await prisma.content.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })
  return contents
}

export default async function ContentsPage() {
  const contents = await getContents()

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">İçerikler</h2>
          <p className="text-muted-foreground">
            Tüm içerikleri buradan yönetebilirsiniz.
          </p>
        </div>
        <Button asChild>
          <Link href="/admin-panel/contents/new">
            <Plus className="mr-2 h-4 w-4" />
            Yeni İçerik
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>İçerik Listesi</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="h-12 px-4 text-left align-middle font-medium">Başlık</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">Slug</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">Durum</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">Görüntülenme</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">Tarih</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {contents.map((content) => (
                  <tr key={content.id} className="border-b">
                    <td className="p-4">{content.title}</td>
                    <td className="p-4">{content.slug}</td>
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          content.published
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {content.published ? 'Yayında' : 'Taslak'}
                      </span>
                    </td>
                    <td className="p-4">{content.views}</td>
                    <td className="p-4">
                      {new Date(content.createdAt).toLocaleDateString('tr-TR')}
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={`/admin-panel/contents/${content.id}/edit`}>
                            <Pencil className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={`/icerik/${content.slug}`} target="_blank">
                            <Eye className="h-4 w-4" />
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