'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { ArrowLeft, Save, Trash2 } from 'lucide-react'
import Link from 'next/link'

// Örnek eğitim verileri
const mockEgitimler = [
  {
    id: '1',
    title: 'Ağ Güvenliği',
    slug: 'ag-guvenligi',
    published: true,
    views: 135,
    createdAt: new Date(),
    description: 'Ağ güvenliği temelleri ve uygulamaları',
    content: `# Ağ Güvenliği Eğitimi

Bu eğitim, ağ güvenliği konusunda temel kavramları ve uygulamaları içermektedir.

## Eğitim İçeriği

- Ağ güvenliği temelleri
- Güvenlik duvarları
- VPN sistemleri
- Saldırı tespit sistemleri
- Ağ izleme ve analiz
- Güvenli ağ mimarisi tasarımı`
  },
  {
    id: '2',
    title: 'Bulut Güvenliği',
    slug: 'bulut-guvenligi',
    published: true,
    views: 89,
    createdAt: new Date(),
    description: 'Bulut sistemleri güvenliği',
    content: `# Bulut Güvenliği Eğitimi

Bu eğitim, bulut sistemleri güvenliği konusunda kapsamlı bilgiler içermektedir.

## Eğitim İçeriği

- Bulut mimarisi ve güvenlik modelleri
- Identity and Access Management (IAM)
- Veri şifreleme yöntemleri
- Güvenli depolama
- Uyumluluk ve düzenlemeler
- Bulut güvenlik tehditleri ve önlemleri`
  },
  {
    id: '3',
    title: 'E-posta Güvenliği',
    slug: 'eposta-guvenligi',
    published: true,
    views: 67,
    createdAt: new Date(),
    description: 'E-posta güvenliği ve phishing önleme',
    content: `# E-posta Güvenliği Eğitimi

Bu eğitim, e-posta güvenliği ve oltalama (phishing) saldırılarından korunma yöntemlerini içermektedir.

## Eğitim İçeriği

- E-posta protokolleri ve güvenlik
- Spam filtreleme yöntemleri
- Phishing saldırıları ve tespit
- E-posta şifreleme
- S/MIME ve PGP
- Güvenli e-posta politikaları oluşturma`
  },
  {
    id: '4',
    title: 'Mobil Güvenlik',
    slug: 'mobil-guvenlik',
    published: false,
    views: 42,
    createdAt: new Date(),
    description: 'Mobil cihaz ve uygulama güvenliği',
    content: `# Mobil Güvenlik Eğitimi

Bu eğitim, mobil cihaz ve uygulama güvenliği konularını kapsamaktadır.

## Eğitim İçeriği

- Mobil işletim sistemleri güvenliği
- Uygulama güvenliği ve kod analizi
- Mobil tehditler ve kötü amaçlı yazılımlar
- Güvenli mobil uygulama geliştirme
- OWASP Mobile Top 10
- Mobil cihaz yönetimi (MDM)`
  },
  {
    id: '5',
    title: 'Veri Sızıntısı Önleme',
    slug: 'data-leakage',
    published: true,
    views: 53,
    createdAt: new Date(),
    description: 'Veri sızıntısı tespiti ve önleme',
    content: `# Veri Sızıntısı Önleme Eğitimi

Bu eğitim, veri sızıntısı tespiti ve önleme stratejileri konusunda bilgiler içermektedir.

## Eğitim İçeriği

- Veri sınıflandırma ve etiketleme
- DLP sistemleri ve araçları
- İçerik analizi ve filtreleme
- Uç nokta güvenliği
- Veri sızıntısı politikaları
- Olay müdahale planları`
  }
];

export default function EgitimEditPage({ params }) {
  const router = useRouter();
  const { id } = params;
  
  const [egitim, setEgitim] = useState({
    title: '',
    slug: '',
    description: '',
    content: '',
    published: false
  });
  
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  
  useEffect(() => {
    // Gerçek bir uygulamada, burada API'den veri çekilirdi
    const foundEgitim = mockEgitimler.find(item => item.id === id);
    
    if (foundEgitim) {
      setEgitim(foundEgitim);
    } else {
      // Eğitim bulunamadıysa, eğitimler listesine geri dön
      router.push('/admin-panel/egitimler');
    }
    
    setIsLoading(false);
  }, [id, router]);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEgitim(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSwitchChange = (checked) => {
    setEgitim(prev => ({
      ...prev,
      published: checked
    }));
  };
  
  const generateSlug = () => {
    if (!egitim.title) return;
    
    const slug = egitim.title
      .toLowerCase()
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ı/g, 'i')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c')
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-');
    
    setEgitim(prev => ({
      ...prev,
      slug
    }));
  };
  
  const handleSave = async () => {
    setIsSaving(true);
    
    try {
      // Burada gerçek bir API isteği yapılabilir
      console.log('Eğitim kaydediliyor:', egitim);
      
      // API çağrısı simülasyonu için timeout ekleyelim
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Başarılı kayıt sonrası eğitimler listesine dön
      router.push('/admin-panel/egitimler');
    } catch (error) {
      console.error('Eğitim kaydedilirken hata:', error);
      alert('Eğitim kaydedilirken bir hata oluştu!');
    } finally {
      setIsSaving(false);
    }
  };
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-32">
        <p>Yükleniyor...</p>
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/admin-panel/egitimler">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h2 className="text-2xl font-bold tracking-tight">Eğitim Düzenle</h2>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-1">
            <Trash2 className="h-4 w-4 text-red-500" />
            <span>Sil</span>
          </Button>
          <Button onClick={handleSave} disabled={isSaving} className="gap-1">
            <Save className="h-4 w-4" />
            <span>{isSaving ? 'Kaydediliyor...' : 'Kaydet'}</span>
          </Button>
        </div>
      </div>
      
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="title">Başlık</Label>
                <Input
                  id="title"
                  name="title"
                  value={egitim.title}
                  onChange={handleInputChange}
                  onBlur={generateSlug}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="slug">Slug</Label>
                <Input
                  id="slug"
                  name="slug"
                  value={egitim.slug}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Açıklama</Label>
              <Textarea
                id="description"
                name="description"
                value={egitim.description}
                onChange={handleInputChange}
                rows={3}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="content">İçerik (Markdown)</Label>
              <Textarea
                id="content"
                name="content"
                value={egitim.content}
                onChange={handleInputChange}
                rows={15}
                className="font-mono text-sm"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch
                id="published"
                checked={egitim.published}
                onCheckedChange={handleSwitchChange}
              />
              <Label htmlFor="published">Yayında</Label>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 