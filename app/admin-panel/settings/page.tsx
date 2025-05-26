import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Ayarlar</h2>
        <p className="text-muted-foreground">
          Site ayarlarını buradan yönetebilirsiniz.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Genel Ayarlar</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="siteName">Site Adı</Label>
              <Input id="siteName" defaultValue="Siber Gerçek" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="siteDescription">Site Açıklaması</Label>
              <Input
                id="siteDescription"
                defaultValue="Siber güvenlik dünyasından en güncel haberler"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="maintenance" />
              <Label htmlFor="maintenance">Bakım Modu</Label>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>SEO Ayarları</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="metaTitle">Meta Başlık</Label>
              <Input
                id="metaTitle"
                defaultValue="Siber Gerçek - Siber Güvenlik Haberleri"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="metaDescription">Meta Açıklama</Label>
              <Input
                id="metaDescription"
                defaultValue="Siber güvenlik dünyasından en güncel haberler, makaleler ve analizler"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="metaKeywords">Meta Anahtar Kelimeler</Label>
              <Input
                id="metaKeywords"
                defaultValue="siber güvenlik, siber haber, güvenlik, teknoloji"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sosyal Medya</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="twitter">Twitter</Label>
              <Input id="twitter" defaultValue="@sibergercek" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="facebook">Facebook</Label>
              <Input id="facebook" defaultValue="sibergercek" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="instagram">Instagram</Label>
              <Input id="instagram" defaultValue="sibergercek" />
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