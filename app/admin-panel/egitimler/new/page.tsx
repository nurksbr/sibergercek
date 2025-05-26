'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { ArrowLeft, Save } from 'lucide-react'
import Link from 'next/link'

export default function YeniEgitimPage() {
  const router = useRouter();
  
  const [egitim, setEgitim] = useState({
    title: '',
    slug: '',
    description: '',
    content: `# Eğitim Başlığı

## Eğitim İçeriği

- Madde 1
- Madde 2
- Madde 3

## Hedef Kitle

Bu eğitim, siber güvenlik alanında bilgi sahibi olmak isteyen herkes için uygundur.

## Eğitim Süresi

Yaklaşık 2 saat

## Öğrenilecek Konular

- Konu 1
- Konu 2
- Konu 3`,
    published: false
  });
  
  const [isSaving, setIsSaving] = useState(false);
  
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
    // Validasyon kontrolü
    if (!egitim.title || !egitim.slug || !egitim.description || !egitim.content) {
      alert('Lütfen tüm alanları doldurun!');
      return;
    }
    
    setIsSaving(true);
    
    try {
      // Burada gerçek bir API isteği yapılabilir
      console.log('Yeni eğitim kaydediliyor:', egitim);
      
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
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/admin-panel/egitimler">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h2 className="text-2xl font-bold tracking-tight">Yeni Eğitim Ekle</h2>
        </div>
        <Button onClick={handleSave} disabled={isSaving} className="gap-1">
          <Save className="h-4 w-4" />
          <span>{isSaving ? 'Kaydediliyor...' : 'Kaydet'}</span>
        </Button>
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
                  placeholder="Eğitim başlığı"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="slug">Slug</Label>
                <Input
                  id="slug"
                  name="slug"
                  value={egitim.slug}
                  onChange={handleInputChange}
                  placeholder="egitim-basligi"
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
                placeholder="Eğitim hakkında kısa bir açıklama"
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
              <Label htmlFor="published">Hemen Yayınla</Label>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 