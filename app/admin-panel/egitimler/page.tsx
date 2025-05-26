import { prisma } from '@/lib/prisma'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, Pencil, Trash2, Eye } from 'lucide-react'
import Link from 'next/link'

async function getEgitimler() {
  try {
    // Eğitimleri getir (prisma schema'da Course veya Education modeli varsayılarak)
    // Gerçek veritabanı yapınıza göre bu kısmı düzenleyin
    const egitimler = [
      {
        id: '1',
        title: 'Ağ Güvenliği',
        slug: 'ag-guvenligi',
        published: true,
        views: 135,
        createdAt: new Date(),
        description: 'Ağ güvenliği temelleri ve uygulamaları'
      },
      {
        id: '2',
        title: 'Bulut Güvenliği',
        slug: 'bulut-guvenligi',
        published: true,
        views: 89,
        createdAt: new Date(),
        description: 'Bulut sistemleri güvenliği'
      },
      {
        id: '3',
        title: 'E-posta Güvenliği',
        slug: 'eposta-guvenligi',
        published: true,
        views: 67,
        createdAt: new Date(),
        description: 'E-posta güvenliği ve phishing önleme'
      },
      {
        id: '4',
        title: 'Mobil Güvenlik',
        slug: 'mobil-guvenlik',
        published: false,
        views: 42,
        createdAt: new Date(),
        description: 'Mobil cihaz ve uygulama güvenliği'
      },
      {
        id: '5',
        title: 'Veri Sızıntısı Önleme',
        slug: 'data-leakage',
        published: true,
        views: 53,
        createdAt: new Date(),
        description: 'Veri sızıntısı tespiti ve önleme'
      }
    ];
    
    return egitimler;
  } catch (error) {
    console.error('Eğitimler getirilemedi:', error);
    return [];
  }
}

export default async function EgitimlerPage() {
  const egitimler = await getEgitimler();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Eğitimler</h2>
          <p className="text-muted-foreground">
            Tüm eğitimleri buradan yönetebilirsiniz.
          </p>
        </div>
        <Button asChild>
          <Link href="/admin-panel/egitimler/new">
            <Plus className="mr-2 h-4 w-4" />
            Yeni Eğitim
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Eğitim Listesi</CardTitle>
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
                  <th className="h-12 px-4 text-left align-middle font-medium">Açıklama</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {egitimler.map((egitim) => (
                  <tr key={egitim.id} className="border-b">
                    <td className="p-4 font-medium">{egitim.title}</td>
                    <td className="p-4">{egitim.slug}</td>
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          egitim.published
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {egitim.published ? 'Yayında' : 'Taslak'}
                      </span>
                    </td>
                    <td className="p-4">{egitim.views}</td>
                    <td className="p-4 max-w-xs truncate">{egitim.description}</td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={`/admin-panel/egitimler/${egitim.id}/edit`}>
                            <Pencil className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={`/egitimler/${egitim.slug}`} target="_blank">
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