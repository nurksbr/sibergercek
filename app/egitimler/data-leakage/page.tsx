'use client'

import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'
import Image from 'next/image'

// Ofis ortamı veri sızıntısı risk senaryoları
const scenarios = [
  {
    id: 1,
    title: 'Açık Ekran Politikası',
    image: 'https://placehold.co/600x400',
    description: 'Müşteri bilgilerini gösteren bir ekran açık bırakılmış ve çalışan yerinde yok.',
    riskPoints: [
      { x: 45, y: 35, description: 'Kimlik bilgileri içeren açık bırakılmış ekran' },
      { x: 80, y: 55, description: 'Gözetimsiz bilgisayar istasyonu' },
      { x: 20, y: 70, description: 'Kayıt defterinde müşteri bilgileri' }
    ],
    explanation: 'Açık bırakılan ekranlar, hassas verilere yetkisiz erişim riski oluşturur. Her çalışan, kısa bir süre için bile olsa masasından ayrıldığında bilgisayarını kilitlemelidir (Windows için Win+L tuşları). Ayrıca, fiziksel belgeler de (örn. kayıt defteri) hassas bilgiler içeriyorsa güvenli şekilde saklanmalıdır.',
    preventionTips: [
      'Bilgisayarınızdan ayrılırken ekranı kilitleyin (Win+L)',
      'Otomatik ekran kilitleme süresini en fazla 5 dakika olarak ayarlayın',
      'Fiziksel belgeleri güvenli bir şekilde saklayın',
      'Temiz masa politikası uygulayın'
    ]
  },
  {
    id: 2,
    title: 'Yazıcı ve Ortak Alanlar',
    image: 'https://placehold.co/600x400',
    description: 'Şirket yazıcısının yanında unutulmuş belgeler ve şüpheli bir USB bellek var.',
    riskPoints: [
      { x: 75, y: 30, description: 'Yazıcıda unutulmuş hassas belgeler' },
      { x: 30, y: 50, description: 'İşaretsiz, sahipsiz USB bellek' },
      { x: 60, y: 65, description: 'Kilitlenmemiş belge dolabı' }
    ],
    explanation: 'Yazıcılar gibi ortak alanlar, veri sızıntısı için kritik noktalardır. Burada unutulan belgeler herkes tarafından görülebilir. Ayrıca, sahipsiz USB bellekler güvenlik riski oluşturur - bu tür cihazlar zararlı yazılım taşıyabilir veya veri çalmak için yerleştirilmiş olabilir.',
    preventionTips: [
      'Yazdırılan belgeleri hemen alın',
      'Gizli belgeler için güvenli yazdırma kullanın (kimlik doğrulama ile)',
      'Bulduğunuz USB bellekleri asla bilgisayarınıza takmayın',
      'Belge dolaplarını her zaman kilitli tutun'
    ]
  },
  {
    id: 3,
    title: 'Toplantı Odası Riskleri',
    image: 'https://placehold.co/600x400',
    description: 'Bir toplantı odası: tahta üzerinde gizli proje bilgileri, video konferans ekranı açık ve not kağıtları masa üzerinde dağınık durumda.',
    riskPoints: [
      { x: 20, y: 25, description: 'Silinmemiş tahta üzerinde gizli proje bilgileri' },
      { x: 70, y: 40, description: 'Bağlantısı kesilmemiş video konferans' },
      { x: 40, y: 80, description: 'Masada bırakılmış toplantı notları' }
    ],
    explanation: 'Toplantı odaları, çeşitli veri sızıntısı riskleri barındırır. Beyaz tahtalar üzerinde hassas bilgilerin silinmeden bırakılması, aktif video konferans bağlantılarının kapatılmaması ve masa üzerinde bırakılan notlar, gizli bilgilerin istenmeyen kişilere sızmasına neden olabilir.',
    preventionTips: [
      'Toplantı bittikten sonra tahtaları temizleyin',
      'Video konferans uygulamalarından tamamen çıkış yapın',
      'Toplantı notlarını asla masa üzerinde bırakmayın',
      'Toplantı odasını terk etmeden önce kontrol listesi uygulayın'
    ]
  },
  {
    id: 4,
    title: 'Uzaktan Çalışma Ortamı',
    image: 'https://placehold.co/600x400',
    description: 'Bir kafe ortamında dizüstü bilgisayarla çalışan kişi, ekranı açıkça görülebilir durumda ve hassas bir belge üzerinde çalışıyor.',
    riskPoints: [
      { x: 35, y: 30, description: 'Herkese açık alanda görülebilir ekran' },
      { x: 70, y: 50, description: 'Güvensiz Wi-Fi bağlantısı' },
      { x: 20, y: 70, description: 'Masada bırakılmış şirket kimlik kartı' }
    ],
    explanation: 'Uzaktan çalışma, özellikle kamuya açık alanlarda, ekran görünürlüğü, güvensiz ağ bağlantıları ve fiziksel belge güvenliği açısından riskler oluşturur. Hassas bilgilerin kamuya açık alanlarda görüntülenmesi hem fiziksel gözetleme hem de siber saldırı riskleri yaratır.',
    preventionTips: [
      'Gizlilik filtresi kullanın',
      'Halka açık Wi-Fi ağlarında VPN kullanın',
      'Kimlik bilgilerinizi her zaman güvende tutun',
      'Hassas bilgiler üzerinde çalışırken etrafınıza dikkat edin'
    ]
  },
  {
    id: 5,
    title: 'Masa Üstü ve Doküman Güvenliği',
    image: 'https://placehold.co/600x400',
    description: 'Bir ofis masası: yapışkan notlarda şifreler, kağıtlar üzerinde müşteri verileri ve kilitsiz çekmecede dosyalar görülüyor.',
    riskPoints: [
      { x: 75, y: 25, description: 'Ekrana yapıştırılmış şifre notları' },
      { x: 30, y: 60, description: 'Açıkta bırakılmış müşteri verileri' },
      { x: 50, y: 80, description: 'Kilitlenmemiş çekmecede hassas dosyalar' }
    ],
    explanation: 'Çalışma masası, veri güvenliği için kritik bir alandır. Yapışkan notlarda yazılı şifreler, açıkta bırakılan belgeler ve güvenli olmayan depolama, veri ihlallerine davetiye çıkarır. Hatta ekranın kendisi de (arka plan, dosya ve klasör adları) hassas bilgileri gösterebilir.',
    preventionTips: [
      'Şifreleri yapışkan notlara yazmak yerine şifre yöneticisi kullanın',
      'Gün sonunda masayı tamamen temizleyin',
      'Hassas belgeleri kilitli dolaplarda saklayın',
      'Dosya ve klasör adlarında gizli bilgileri kullanmaktan kaçının'
    ]
  }
]

export default function DataLeakagePrevention() {
  // Veri analizi simülasyonu için durum
  const [showRisk1Alert, setShowRisk1Alert] = useState(false)
  const [showRisk2Alert, setShowRisk2Alert] = useState(false)

  return (
    <>
      <Navbar />
      
      <main className="bg-gray-900 min-h-screen">
        {/* Hero Section */}
        <section className="relative py-16 bg-gray-900">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute -top-1/4 -right-1/4 h-96 w-96 rounded-full bg-cyan-600 blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block text-cyan-400">🔐 Veri Sızıntısı Önleme</span>
                <span className="block">(DLP – Data Loss Prevention)</span>
              </h1>
              <div className="mt-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-900 text-red-300">
                  İleri Seviye
                </span>
                <span className="ml-3 text-gray-300">⏱ Süre: 60 dakika</span>
              </div>
              <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
                Hassas verilerin sızmasını önleme yolları, olası sızıntıların tespit edilmesi ve hızlı müdahale stratejileri
              </p>
            </div>
          </div>
        </section>

        {/* İçerik Bölümü */}
        <section className="py-12 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-700 shadow-xl mb-10">
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6">🔹 1. Veri Sızıntısı Nedir?</h2>
                <p className="text-gray-300 mb-4">
                  <strong>⏱ Süre:</strong> 10 dakika
                </p>
                
                <p className="text-gray-300 mb-6">
                  Veri sızıntısı, hassas veya gizli bilgilerin yetkisiz kişilerin eline geçmesi durumudur. Bu, istemli veya kasıtsız olabilir ve büyük maddi kayıplar, itibar zedelenmesi ve yasal yaptırımlarla sonuçlanabilir.
                </p>
                
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4">Veri Sızıntısı Kaynakları:</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-900 p-5 rounded-lg border border-gray-700">
                      <div className="flex items-center mb-3">
                        <span className="text-red-400 mr-3 text-xl">📧</span>
                        <h3 className="text-lg font-semibold text-white">E-posta Kaynaklı</h3>
                      </div>
                      <ul className="space-y-2 text-gray-300 ml-8">
                        <li className="list-disc">Yanlış alıcıya gönderim</li>
                        <li className="list-disc">Toplu e-postalarda BCC kullanmama</li>
                        <li className="list-disc">Hassas eklentileri şifresiz yollama</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-900 p-5 rounded-lg border border-gray-700">
                      <div className="flex items-center mb-3">
                        <span className="text-red-400 mr-3 text-xl">💾</span>
                        <h3 className="text-lg font-semibold text-white">Fiziksel Medya</h3>
                      </div>
                      <ul className="space-y-2 text-gray-300 ml-8">
                        <li className="list-disc">Şifrelenmemiş USB bellekler</li>
                        <li className="list-disc">Korumasız dizüstü bilgisayarlar</li>
                        <li className="list-disc">Güvenli imha edilmemiş belgeler</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-900 p-5 rounded-lg border border-gray-700">
                      <div className="flex items-center mb-3">
                        <span className="text-red-400 mr-3 text-xl">☁️</span>
                        <h3 className="text-lg font-semibold text-white">Bulut Depolama</h3>
                      </div>
                      <ul className="space-y-2 text-gray-300 ml-8">
                        <li className="list-disc">Yanlış erişim hakları</li>
                        <li className="list-disc">Halka açık bağlantılar</li>
                        <li className="list-disc">Güvensiz 3. parti uygulamalar</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-indigo-900 bg-opacity-30 p-6 rounded-lg border border-indigo-700 mb-6">
                  <h3 className="text-lg font-semibold text-indigo-300 mb-4">Gerçek Hayat Örnekleri:</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-indigo-900 bg-opacity-40 p-4 rounded-lg border border-indigo-800">
                      <h4 className="text-white font-medium">📋 Sağlık Verilerinin Sızdırılması (HIPAA İhlali)</h4>
                      <p className="text-gray-300 mt-2">
                        Bir hastane çalışanının hasta verilerini içeren şifrelenmemiş bir dizüstü bilgisayarı kaybetmesi sonucu binlerce hasta kaydı risk altına girdi. Bu, HIPAA düzenlemelerinin ciddi bir ihlaliydi ve kuruma milyonlarca dolar ceza ve hastalara tazminat ödenmeye sebep oldu.
                      </p>
                    </div>
                    
                    <div className="bg-indigo-900 bg-opacity-40 p-4 rounded-lg border border-indigo-800">
                      <h4 className="text-white font-medium">📧 Mail Yoluyla Sızan Personel Bilgileri</h4>
                      <p className="text-gray-300 mt-2">
                        Bir şirkette, İK departmanı "Tümü Yanıtla" seçeneği ile tüm şirkete hassas maaş bilgilerini içeren bir e-posta gönderdi. Bu, çalışanlar arasında huzursuzluk ve yönetime olan güvenin azalmasına neden oldu.
                      </p>
                    </div>
                    
                    <div className="bg-indigo-900 bg-opacity-40 p-4 rounded-lg border border-indigo-800">
                      <h4 className="text-white font-medium">☁️ Yanlış Paylaşılan Google Drive Klasörleri</h4>
                      <p className="text-gray-300 mt-2">
                        Bir pazarlama ekibi, müşteri verilerini içeren bir klasörü "link sahibi erişebilir" ayarıyla paylaşarak herkese açık hale getirdi. Bu klasörün linkinin bir forum sitesinde paylaşılmasıyla binlerce müşterinin kişisel bilgileri ifşa oldu.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-700 shadow-xl mb-10">
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6">🔹 2. DLP Teknolojileri ve Politikaları</h2>
                <p className="text-gray-300 mb-4">
                  <strong>⏱ Süre:</strong> 15 dakika
                </p>
                
                <p className="text-gray-300 mb-6">
                  DLP (Data Loss Prevention) teknolojileri, hassas verilerin tanımlanması, izlenmesi ve korunması için kullanılan çözümlerdir.
                  Bu teknolojiler ve politikalar, yetkisiz erişimi engellerken iş sürekliliğini sağlamak için kritik öneme sahiptir.
                </p>
                
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8">
                  <h3 className="text-lg font-semibold text-white mb-6">DLP Türleri:</h3>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr className="bg-gray-900">
                          <th className="py-3 px-6 text-left text-xs font-medium text-cyan-400 uppercase tracking-wider">DLP Türü</th>
                          <th className="py-3 px-6 text-left text-xs font-medium text-cyan-400 uppercase tracking-wider">Açıklama</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-700">
                        <tr className="bg-gray-900 bg-opacity-40">
                          <td className="py-4 px-6 whitespace-nowrap">
                            <div className="flex items-center">
                              <span className="text-xl mr-2">🔍</span>
                              <span className="font-medium text-white">Endpoint DLP</span>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-gray-300">
                            USB, pano (clipboard), yazdırma gibi uç nokta aktivitelerini kontrol eder. Cihazlar çevrimdışı olsa bile çalışır.
                          </td>
                        </tr>
                        <tr className="bg-gray-900 bg-opacity-40">
                          <td className="py-4 px-6 whitespace-nowrap">
                            <div className="flex items-center">
                              <span className="text-xl mr-2">☁️</span>
                              <span className="font-medium text-white">Network DLP</span>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-gray-300">
                            E-posta, FTP, HTTP üzerinden veri çıkışını izler. Ağ trafiğini analiz ederek hassas veri akışını tespit eder.
                          </td>
                        </tr>
                        <tr className="bg-gray-900 bg-opacity-40">
                          <td className="py-4 px-6 whitespace-nowrap">
                            <div className="flex items-center">
                              <span className="text-xl mr-2">🧠</span>
                              <span className="font-medium text-white">Content-aware DLP</span>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-gray-300">
                            Belge içeriğini (TC kimlik, kredi kartı, sağlık bilgileri) analiz ederek uyarı verir. Yapay zeka ve desenler kullanır.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4">Temel DLP Stratejileri:</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                      <div className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1">✅</span>
                        <div>
                          <h4 className="text-white font-semibold">Dosya Şifreleme</h4>
                          <p className="text-gray-300 mt-1">
                            Hassas veriler hem depolama hem de iletim sırasında şifrelenmelidir. Şifreleme, veriler çalınsa bile okunmasını engeller.
                            Özellikle dizüstü bilgisayarlarda tam disk şifreleme (BitLocker, FileVault) kullanılmalıdır.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                      <div className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1">✅</span>
                        <div>
                          <h4 className="text-white font-semibold">Veri Sınıflandırması</h4>
                          <p className="text-gray-300 mt-1">
                            Veri varlıklarının hassasiyet düzeyine göre sınıflandırılması (Genel, Dahili, Gizli, Kritik gibi) ve her seviye için uygun koruma önlemlerinin alınması.
                            Bu etiketleme, otomatik DLP kurallarının uygulanmasını kolaylaştırır.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                      <div className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1">✅</span>
                        <div>
                          <h4 className="text-white font-semibold">Davranış Analitiği</h4>
                          <p className="text-gray-300 mt-1">
                            Anormal veri akışı tespiti için yapay zeka kullanımı. Örneğin, bir kullanıcının normalde erişmediği verilere erişmesi veya
                            olağandışı miktarda veri indirmesi gibi şüpheli davranışların tespit edilmesi.
                          </p>
                        </div>
                      </div>
                              </div>
                    
                    <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                      <div className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1">✅</span>
                        <div>
                          <h4 className="text-white font-semibold">Erişim Kontrolü</h4>
                          <p className="text-gray-300 mt-1">
                            En az ayrıcalık prensibine dayalı erişim hakları. Çalışanlar sadece görevlerini yerine getirmek için ihtiyaç duydukları verilere
                            erişebilmelidir. Düzenli erişim hakları gözden geçirmeleri yapılmalıdır.
                          </p>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-900 bg-opacity-30 p-6 rounded-lg border border-blue-700">
                  <h3 className="text-lg font-semibold text-blue-300 mb-4">DLP Politikasını Oluşturma Adımları:</h3>
                  
                  <ol className="space-y-4 text-gray-300 list-decimal ml-5">
                    <li className="pl-2">
                      <span className="text-white font-medium">Veri Envanteri Oluşturun:</span> Hangi verilerin korunması gerektiğini belirleyin (kişisel veriler, finansal veriler, fikri mülkiyet).
                    </li>
                    <li className="pl-2">
                      <span className="text-white font-medium">Veri Sınıflandırma Şeması Tanımlayın:</span> Verileri hassasiyet derecelerine göre kategorilere ayırın.
                    </li>
                    <li className="pl-2">
                      <span className="text-white font-medium">Düzenleyici Gereksinimleri Belirleyin:</span> KVKK, GDPR gibi uymanız gereken standartları tanımlayın.
                    </li>
                    <li className="pl-2">
                      <span className="text-white font-medium">DLP Kurallarını Belirleyin:</span> "Kredi kartı bilgileri e-posta ile gönderilemez" gibi spesifik kurallar oluşturun.
                    </li>
                    <li className="pl-2">
                      <span className="text-white font-medium">Eğitim Planı Geliştirin:</span> Çalışanları düzenli olarak veri güvenliği konusunda eğitin.
                    </li>
                    <li className="pl-2">
                      <span className="text-white font-medium">İhlal Müdahale Planı Oluşturun:</span> Sızıntı durumunda izlenecek adımları belirleyin.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-700 shadow-xl mb-10">
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6">🔹 3. Simülasyon: Kritik Veriyi Fark Et</h2>
                <p className="text-gray-300 mb-4">
                  <strong>⏱ Süre:</strong> 10 dakika
                </p>
                
                <p className="text-gray-300 mb-6">
                  Aşağıdaki interaktif örneklerde, hangi verilerin risk taşıdığını tespit etmeyi öğreneceksiniz. 
                  Content-aware DLP sistemleri, belirli desenler ve yapılandırmalar kullanarak bu tür kritik verileri otomatik olarak tespit edebilir.
                </p>
                
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4">JSON Verilerinde Gizli Bilgileri Tespit Etme:</h3>
                  
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-200">Aşağıdaki veride bir risk var mı?</h3>
                    <pre className="bg-slate-800 p-4 rounded text-sm text-pink-200 font-mono">
{`{
  "name": "Ayşe Demir",
  "email": "ayse@firma.com",
  "tc_kimlik": "52474038900",
  "iban": "TR140006200000000123456789"
}`}
                    </pre>
                    <button 
                      onClick={() => alert('⚠️ Kişisel veri içeriyor: TCKN ve IBAN. Maskeleme veya şifreleme gereklidir.')}
                      className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded mt-4 text-white"
                    >
                      Veriyi İncele
                    </button>
                          </div>
                  
                  <div className="mt-6 bg-gray-900 p-5 rounded-lg border border-gray-700">
                    <h4 className="text-white font-semibold mb-3">DLP Tespit Kuralları:</h4>
                    <ul className="space-y-2 text-gray-300 ml-5 list-disc">
                      <li>TC Kimlik numarası (11 rakam): Regex ile <code className="bg-gray-800 px-2 py-1 rounded text-pink-200">\b[1-9][0-9]{10}\b</code></li>
                      <li>IBAN (TR ile başlayan): Regex ile <code className="bg-gray-800 px-2 py-1 rounded text-pink-200">TR[0-9]{2}[0-9A-Z]{22}</code></li>
                      <li>Kredi kartı numarası (16 rakam): Regex ile <code className="bg-gray-800 px-2 py-1 rounded text-pink-200">\b[0-9]{4}[ -]?[0-9]{4}[ -]?[0-9]{4}[ -]?[0-9]{4}\b</code></li>
                    </ul>
                    
                    <div className="mt-4 bg-blue-900 bg-opacity-30 p-3 rounded border border-blue-800">
                      <p className="text-blue-200 text-sm">
                        <strong>Not:</strong> Gerçek DLP çözümleri, düzenli ifadelerin yanı sıra, veri içeriğinin anlamsal analizini yapabilen ve makine öğrenmesi ile hatalı tespitleri azaltan ileri teknolojiler kullanır.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-4">Metinde Gizli Bilgileri Maskeleme:</h3>
                  
                  <div className="bg-gray-900 p-5 rounded-lg border border-gray-700 mb-6">
                    <p className="text-gray-300 mb-3">
                      Dokümanlarınızdaki hassas bilgileri otomatik olarak maskelemeyi veya şifrelemeyi öğrenin. 
                      Aşağıdaki örnek, bir veritabanı sorgusu ve kullanıcı bilgilerini içeriyor:
                    </p>
                    
                    <div className="bg-slate-800 p-4 rounded text-sm font-mono text-gray-300">
                      <p>SELECT * FROM users WHERE email = 'ahmet@example.com' AND password = '<span className="text-red-400">P@ssw0rd123!</span>';</p>
                      <p className="mt-2">Müşteri Bilgileri:<br/>
                      Ad: Ahmet Yılmaz<br/>
                      Telefon: <span className="text-red-400">05351234567</span><br/>
                      Kredi Kartı: <span className="text-red-400">4532 9612 3456 7890</span><br/>
                      Son Kullanma: 05/25</p>
                    </div>
                    
                  <button
                      onClick={() => {
                        setShowRisk1Alert(true)
                        setTimeout(() => setShowRisk1Alert(false), 5000)
                      }}
                      className="bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded mt-4 text-white"
                    >
                      DLP Analizi Çalıştır
                  </button>
                    
                    {showRisk1Alert && (
                      <div className="mt-4 bg-red-900 bg-opacity-40 p-4 rounded border border-red-800 animate-pulse">
                        <h5 className="text-white font-medium flex items-center">
                          <span className="text-red-400 mr-2">⚠️</span>
                          DLP Uyarısı Tetiklendi
                        </h5>
                        <p className="text-red-200 mt-2">
                          Tespit Edilen Hassas Veriler:
                        </p>
                        <ul className="list-disc ml-6 mt-1 text-gray-300">
                          <li>Şifre metni: Maskelenmeli veya şifrelenmeli</li>
                          <li>Telefon numarası: Kısmen maskelenmeli</li>
                          <li>Kredi kartı numarası: PCI-DSS standardına göre yalnızca son 4 hane görünür olmalı</li>
                        </ul>
                        <p className="text-gray-300 mt-2">
                          Önerilen DLP eylemi: <span className="text-white font-medium">Engelle ve Rapor Et</span>
                        </p>
                      </div>
                    )}
                  </div>
                  
                  <div className="bg-gray-900 p-5 rounded-lg border border-gray-700">
                    <h4 className="text-white font-semibold mb-3">Güvenli Veri Görüntüleme:</h4>
                    <div className="bg-slate-800 p-4 rounded text-sm font-mono text-gray-300">
                      <p>SELECT * FROM users WHERE email = 'ahmet@example.com' AND password = '<span className="text-green-400">********</span>';</p>
                      <p className="mt-2">Müşteri Bilgileri:<br/>
                      Ad: Ahmet Yılmaz<br/>
                      Telefon: <span className="text-green-400">0535***4567</span><br/>
                      Kredi Kartı: <span className="text-green-400">**** **** **** 7890</span><br/>
                      Son Kullanma: 05/25</p>
                    </div>
                    
                    <div className="mt-4 bg-green-900 bg-opacity-30 p-3 rounded border border-green-800">
                      <p className="text-green-200 text-sm">
                        <strong>Güvenlik İpucu:</strong> Hassas veriler DLP politikanıza göre otomatik olarak maskelenmiş ve log kayıtlarına bu şekilde yazılmıştır. 
                        Bu, içeriden tehdit riskini ve kaza ile ifşa olma olasılığını azaltır.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-700 shadow-xl mb-10">
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6">🔹 4. Sızıntı Tespit & Müdahale Adımları</h2>
                <p className="text-gray-300 mb-4">
                  <strong>⏱ Süre:</strong> 15 dakika
                </p>
                
                <p className="text-gray-300 mb-6">
                  Veri sızıntısını tespit etmek ve hızlı müdahale etmek, kaybı en aza indirmek için kritik öneme sahiptir.
                  Bu bölümde, sistematik bir tespit ve müdahale süreci ele alınacaktır.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                    <div className="flex items-center mb-3">
                      <span className="text-cyan-400 mr-3 text-xl">📥</span>
                      <h3 className="text-lg font-semibold text-white">Log İzleme</h3>
                    </div>
                    <p className="text-gray-300 mb-4">
                      SIEM sistemleri ve log yönetimi ile "veri kopyalandı mı, dışarı çıktı mı?" gibi sorular cevaplanır.
                    </p>
                    <ul className="space-y-2 text-gray-300 ml-5 list-disc">
                      <li>Veri erişim logları</li>
                      <li>Kullanıcı davranış analizi</li>
                      <li>Anormal veri hareketi tespiti</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                    <div className="flex items-center mb-3">
                      <span className="text-cyan-400 mr-3 text-xl">🧭</span>
                      <h3 className="text-lg font-semibold text-white">Otomatik Müdahale</h3>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Şüpheli bir veri çıkışı tespit edildiğinde sistem otomatik tepki verebilir.
                    </p>
                    <ul className="space-y-2 text-gray-300 ml-5 list-disc">
                      <li>USB üzerinden çıkış engelleme</li>
                      <li>İşlemi karantinaya alma</li>
                      <li>Kullanıcı oturumunu kapatma</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                    <div className="flex items-center mb-3">
                      <span className="text-cyan-400 mr-3 text-xl">🛑</span>
                      <h3 className="text-lg font-semibold text-white">Anında Bildirim</h3>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Olayların gerçek zamanlı olarak raporlanması.
                    </p>
                    <ul className="space-y-2 text-gray-300 ml-5 list-disc">
                      <li>BT yöneticisine e-posta</li>
                      <li>Slack/Teams bildirim</li>
                      <li>SIEM alert ve dashboard</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4">DLP'de Olay Akışı</h3>
                  
                  <div className="relative">
                    {/* Akış çizgisi */}
                    <div className="absolute h-full w-0.5 bg-cyan-800 left-3 top-0"></div>
                    
                    <div className="space-y-6">
                      <div className="flex relative z-10">
                        <div className="h-6 w-6 rounded-full bg-cyan-600 mt-1 flex items-center justify-center">
                          <span className="text-white text-xs font-bold">1</span>
                        </div>
                        <div className="ml-6">
                          <h4 className="text-white font-semibold">Kural Tetiklenir</h4>
                          <p className="text-gray-300 mt-1">
                            Bir DLP politikası veya kural ihlali tespit edilir. Örneğin; kredi kartı numarası dış e-posta adresine gönderilmeye çalışılması.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex relative z-10">
                        <div className="h-6 w-6 rounded-full bg-cyan-600 mt-1 flex items-center justify-center">
                          <span className="text-white text-xs font-bold">2</span>
                        </div>
                        <div className="ml-6">
                          <h4 className="text-white font-semibold">Veri Tipi Analiz Edilir</h4>
                          <p className="text-gray-300 mt-1">
                            İçerik regex, hash veya OCR ile analiz edilir. DLP motoru, içeriğin hangi veri sınıfına girdiğini ve ne kadar hassas olduğunu belirler.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex relative z-10">
                        <div className="h-6 w-6 rounded-full bg-cyan-600 mt-1 flex items-center justify-center">
                          <span className="text-white text-xs font-bold">3</span>
                        </div>
                        <div className="ml-6">
                          <h4 className="text-white font-semibold">Eylem Uygulanır</h4>
                          <p className="text-gray-300 mt-1">
                            Politikaya göre belirlenmiş eylem uygulanır: İzin Ver, İzleme Kaydı Tut, Engelle, Karantinaya Al, Şifrele veya Yönetici Onayı Bekle.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex relative z-10">
                        <div className="h-6 w-6 rounded-full bg-cyan-600 mt-1 flex items-center justify-center">
                          <span className="text-white text-xs font-bold">4</span>
                        </div>
                        <div className="ml-6">
                          <h4 className="text-white font-semibold">Kullanıcı Bilgilendirilir</h4>
                          <p className="text-gray-300 mt-1">
                            Eylem sonrası kullanıcıya geri bildirim verilir. Örneğin, "Göndermeye çalıştığınız e-posta hassas veri içeriyor" gibi 
                            bir uyarı gösterilebilir.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-amber-900 bg-opacity-30 p-6 rounded-lg border border-amber-700">
                  <h3 className="text-lg font-semibold text-amber-300 mb-4">Olay Müdahale Planı Bileşenleri:</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-amber-900 bg-opacity-20 p-4 rounded-lg border border-amber-800">
                      <h4 className="text-white font-medium flex items-center">
                        <span className="text-amber-400 mr-2">🔍</span>
                        Tespit ve Analiz
                      </h4>
                      <p className="text-gray-300 mt-2">
                        İhlal kapsamını belirleme: Hangi veriler etkilendi? Kaç kullanıcı/kayıt? Saldırgan kim?
                        Veri tespiti için tüm log kayıtları, DLP alarmları ve kullanıcı raporları incelenir.
                      </p>
                    </div>
                    
                    <div className="bg-amber-900 bg-opacity-20 p-4 rounded-lg border border-amber-800">
                      <h4 className="text-white font-medium flex items-center">
                        <span className="text-amber-400 mr-2">🛡️</span>
                        İzolasyon ve Etkiyi Sınırlama
                      </h4>
                      <p className="text-gray-300 mt-2">
                        Etkilenen sistemlerin ağdan izolasyonu, güvenlik açıklarının kapatılması ve ilave veri sızıntısını önleme.
                        Gerekirse şüpheli hesapların dondurulması veya erişim haklarının değiştirilmesi.
                      </p>
                    </div>
                    
                    <div className="bg-amber-900 bg-opacity-20 p-4 rounded-lg border border-amber-800">
                      <h4 className="text-white font-medium flex items-center">
                        <span className="text-amber-400 mr-2">📢</span>
                        Bildirim ve Raporlama
                      </h4>
                      <p className="text-gray-300 mt-2">
                        İç paydaşlar, müşteriler ve düzenleyici kurumlar için bildirim süreçlerinin yönetilmesi.
                        KVKK gereği 72 saat içinde VERBİS'e bildirim yapılması. Etkilenen kişilerin uygun şekilde bilgilendirilmesi.
                      </p>
                    </div>
                    
                    <div className="bg-amber-900 bg-opacity-20 p-4 rounded-lg border border-amber-800">
                      <h4 className="text-white font-medium flex items-center">
                        <span className="text-amber-400 mr-2">🔄</span>
                        İyileştirme ve Öğrenme
                      </h4>
                      <p className="text-gray-300 mt-2">
                        Kök neden analizi, sistem ve süreçlerde iyileştirmeler, güvenlik açıklarının kapatılması.
                        DLP kuralları ve politikalarının güncellenmesi, personel eğitimlerinin gözden geçirilmesi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6">🔹 5. Test Etkinliği - Sızan Bilgiyi Bul</h2>
                <p className="text-gray-300 mb-4">
                  <strong>⏱ Süre:</strong> 10 dakika
                </p>
                
                <p className="text-gray-300 mb-6">
                  Aşağıdaki senaryolarda veri sızıntısı risklerini tespit etme ve uygun şekilde müdahale etme becerinizi test edin.
                </p>
                
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8">
                  <h3 className="mt-2 font-semibold text-white mb-4">Aşağıdaki mail içeriğinde ne yanlış?</h3>
                  <blockquote className="bg-slate-700 p-4 text-sm text-gray-300 rounded">
                    Merhaba,<br /><br />
                    Maaş bordrosu ve tüm çalışanların kimlik bilgilerini ekte iletiyorum.<br />
                    Kolay gelsin.
                  </blockquote>
                  
                  <button
                    onClick={() => {
                      setShowRisk2Alert(true)
                      setTimeout(() => setShowRisk2Alert(false), 5000)
                    }}
                    className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded mt-4 text-white"
                  >
                    Yanıtla
                  </button>
                  
                  {showRisk2Alert && (
                    <div className="mt-4 bg-red-900 bg-opacity-40 p-4 rounded border border-red-800 animate-pulse">
                      <h5 className="text-white font-medium flex items-center">
                        <span className="text-red-400 mr-2">🚨</span>
                        DLP İhlali Tespit Edildi
                      </h5>
                      <p className="text-red-200 mt-2">
                        Ekte hassas bilgi (kişisel veri) olduğu belirtilmiş. Bu içerik DLP filtresi tarafından engellenmeli ve şu işlemler uygulanmalıdır:
                      </p>
                      <ul className="list-disc ml-6 mt-1 text-gray-300">
                        <li>Hassas veri paylaşımı için güvenli dosya paylaşım sistemleri kullanılmalı</li>
                        <li>Dosyalar şifrelenmeli ve şifre ayrı bir kanaldan iletilmeli</li>
                        <li>Kimlik bilgileri gibi kişisel veriler, yalnızca "bilmesi gereken" prensibine göre paylaşılmalı</li>
                      </ul>
                    </div>
                  )}
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="font-semibold text-white mb-4">DLP Yanlış Yapılandırma Testi</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-900 p-5 rounded-lg border border-gray-700">
                      <h4 className="text-white font-semibold mb-2">Doğru DLP Yapılandırması:</h4>
                      <p className="text-gray-300 mb-4">
                        Şirketin DLP yazılımı şu şekilde yapılandırılmıştır:
                      </p>
                      <ul className="list-disc ml-6 text-gray-300 space-y-1">
                        <li>Tüm taşınabilir medya şifrelenmiş</li>
                        <li>E-postalarla giden ekler DLP taramasına tabi</li>
                        <li>Hassas dosyalara erişim loglanıyor</li>
                        <li>KVKK verileri için özel profiller tanımlanmış</li>
                      </ul>
                      <div className="mt-3 bg-green-900 bg-opacity-30 p-3 rounded border border-green-800">
                        <p className="text-green-200 text-sm">
                          <strong>Sonuç:</strong> Hassas müşteri verileri dış taraflarla güvenli bir şekilde paylaşılır ve olası veri sızıntılarına karşı koruma sağlanır.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-900 p-5 rounded-lg border border-gray-700">
                      <h4 className="text-white font-semibold mb-2">Hatalı DLP Yapılandırması:</h4>
                      <p className="text-gray-300 mb-4">
                        Şirketin DLP yazılımı şu eksikliklere sahiptir:
                      </p>
                      <ul className="list-disc ml-6 text-gray-300 space-y-1">
                        <li>Yalnızca belirli dosya formatları (docx) taranıyor</li>
                        <li>Bulut depolama servisleri izlenmiyor</li>
                        <li>Hassas veriler için regex desenler tanımlanmamış</li>
                        <li>Ekran görüntüsü alma engellenmemiş</li>
                      </ul>
                      <div className="mt-3 bg-red-900 bg-opacity-30 p-3 rounded border border-red-800">
                        <p className="text-red-200 text-sm">
                          <strong>Sonuç:</strong> Bilgisayar korsanları veya kötü niyetli çalışanlar, PDF formatıyla veya ekran görüntüsü alarak veri sızdırabilirler. Bulut hizmetlerine yüklenen veriler kontrol edilmez.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-6">🧠 Kazanımlar</h2>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <div>
                      Sızıntı türlerini ve örneklerini tanıdın
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <div>
                      DLP çözümlerinin nasıl çalıştığını öğrendin
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <div>
                      Gerçek veri içeriğinde riskli bölgeyi analiz etmeyi uyguladın
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <div>
                      Kriz durumunda nasıl tepki verileceğini kavradın
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Diğer Eğitimler */}
        <section className="py-12 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6">Diğer İleri Seviye Eğitimler</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/egitimler/bulut-guvenligi" className="block">
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-2">☁️ Bulut Güvenliği</h3>
                  <p className="text-gray-300 mb-4">Bulut hizmetlerinde güvenlik, paylaşılan sorumluluk modeli ve güvenli yapılandırma</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">55 dakika</span>
                    <span className="px-2 py-1 rounded text-xs font-medium bg-red-900 text-red-300">İleri</span>
                  </div>
                  </div>
                </Link>
                
              <Link href="/egitimler/olay-mudahale" className="block">
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-2">🚨 Güvenlik Olayları ve Müdahale</h3>
                  <p className="text-gray-300 mb-4">Güvenlik ihlallerini tanıma, raporlama ve müdahale prosedürleri</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">65 dakika</span>
                    <span className="px-2 py-1 rounded text-xs font-medium bg-red-900 text-red-300">İleri</span>
                  </div>
                  </div>
                </Link>
                
              <Link href="/egitimler/mesleki-guvenlik" className="block">
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-2">🏢 Mesleki Siber Güvenlik</h3>
                  <p className="text-gray-300 mb-4">Sektöre özgü siber güvenlik gereksinimleri, standartlar ve en iyi uygulamalar</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">70 dakika</span>
                    <span className="px-2 py-1 rounded text-xs font-medium bg-red-900 text-red-300">İleri</span>
                  </div>
                  </div>
                </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
} 