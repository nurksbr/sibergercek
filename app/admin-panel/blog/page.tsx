import { prisma } from '@/lib/prisma'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, Pencil, Trash2, Eye, Clock } from 'lucide-react'
import Link from 'next/link'

async function getBlogPosts() {
  try {
    // Blog yazılarını getir (örnek veri, gerçek Prisma modelinize göre düzenleyin)
    const blogPosts = [
      {
        id: '1',
        title: 'Siber Güvenlikte Son Trendler',
        slug: 'siber-guvenlikte-son-trendler',
        published: true,
        views: 256,
        createdAt: new Date('2023-12-15'),
        category: 'Siber Güvenlik',
        excerpt: 'Siber güvenlik dünyasındaki son gelişmeler ve trendler hakkında kapsamlı bir inceleme.'
      },
      {
        id: '2',
        title: 'Ransomware Saldırılarından Korunma Yöntemleri',
        slug: 'ransomware-saldirilari-korunma',
        published: true,
        views: 189,
        createdAt: new Date('2023-12-01'),
        category: 'Tehdit Önleme',
        excerpt: 'Fidye yazılımlarının çalışma prensipleri ve korunma stratejileri.'
      },
      {
        id: '3',
        title: 'Zero Trust Güvenlik Modeli',
        slug: 'zero-trust-guvenlik-modeli',
        published: true,
        views: 145,
        createdAt: new Date('2023-11-20'),
        category: 'Güvenlik Mimarisi',
        excerpt: 'Sıfır güven modeli ve modern organizasyonlar için önemi.'
      },
      {
        id: '4',
        title: 'KVKK ve GDPR Uyum Süreci',
        slug: 'kvkk-gdpr-uyum-sureci',
        published: false,
        views: 98,
        createdAt: new Date('2023-11-10'),
        category: 'Yasal Düzenlemeler',
        excerpt: 'Veri koruma düzenlemelerine uyum sağlama adımları ve stratejileri.'
      },
      {
        id: '5',
        title: 'Sosyal Mühendislik Saldırıları',
        slug: 'sosyal-muhendislik-saldirilari',
        published: true,
        views: 210,
        createdAt: new Date('2023-10-25'),
        category: 'Tehdit Analizi',
        excerpt: 'Sosyal mühendislik teknikleri ve bu saldırılardan korunma yöntemleri.'
      }
    ];
    
    return blogPosts;
  } catch (error) {
    console.error('Blog yazıları getirilemedi:', error);
    return [];
  }
}

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Blog Yazıları</h2>
          <p className="text-muted-foreground">
            Tüm blog yazılarını buradan yönetebilirsiniz.
          </p>
        </div>
        <Button asChild>
          <Link href="/admin-panel/blog/new">
            <Plus className="mr-2 h-4 w-4" />
            Yeni Yazı
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Blog Yazı Listesi</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="h-12 px-4 text-left align-middle font-medium">Başlık</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">Kategori</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">Durum</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">Görüntülenme</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">Tarih</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {blogPosts.map((post) => (
                  <tr key={post.id} className="border-b">
                    <td className="p-4 font-medium">
                      <div className="max-w-xs truncate">{post.title}</div>
                      <div className="text-xs text-muted-foreground mt-1 truncate">{post.excerpt}</div>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                        {post.category}
                      </span>
                    </td>
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          post.published
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {post.published ? 'Yayında' : 'Taslak'}
                      </span>
                    </td>
                    <td className="p-4">{post.views}</td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1 text-muted-foreground" />
                        <span>{new Date(post.createdAt).toLocaleDateString('tr-TR')}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={`/admin-panel/blog/${post.id}/edit`}>
                            <Pencil className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={`/blog/${post.slug}`} target="_blank">
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