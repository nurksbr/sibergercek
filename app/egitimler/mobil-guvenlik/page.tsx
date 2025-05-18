'use client'

import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function MobilGuvenlik() {
  const [permissionGranted, setPermissionGranted] = useState(false)

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
                <span className="block text-cyan-400">📱 Mobil Cihaz Güvenliği</span>
              </h1>
              <div className="mt-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-900 text-yellow-300">
                  Orta Seviye
                </span>
                <span className="ml-3 text-gray-300">⏱ Süre: 40 dakika</span>
              </div>
              <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
                Akıllı telefon ve tablet güvenliği, uygulama izinleri ve veri koruma üzerine etkileşimli eğitim
              </p>
            </div>
          </div>
        </section>

        {/* İçerik Bölümü */}
        <section className="py-12 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-700 shadow-xl mb-10">
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6">📵 1. Mobil Cihazlara Yönelik Tehditler</h2>
                <p className="text-gray-300 mb-4">
                  <strong>⏱ Süre:</strong> 10 dakika
                </p>
                
                <p className="text-gray-300 mb-6">
                  Mobil cihazlar, sürekli yanımızda olmaları ve kişisel verilerimize erişim sağlamaları nedeniyle siber saldırganların birincil hedefi haline gelmiştir.
                  Bu bölümde, mobil cihazlara yönelik yaygın tehdit türlerini inceleyeceğiz.
                </p>
                
                <div className="space-y-6">
                  <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                    <h3 className="text-xl font-semibold text-white flex items-center">
                      <span className="text-red-400 mr-3">⚠️</span>
                      Kötü Amaçlı Uygulamalar
                    </h3>
                    <p className="text-gray-300 mt-2">
                      Özellikle resmi uygulama mağazaları dışından (APK olarak) indirilen uygulamalar büyük risk taşır.
                      Bu uygulamalar, cihazınıza sızabilir, verilerinizi çalabilir veya kontrolü ele geçirebilir.
                    </p>
                    <div className="mt-3 bg-red-900 bg-opacity-30 p-3 rounded border border-red-800">
                      <p className="text-red-300 text-sm">
                        <strong>Örnek:</strong> <em>"Ücretsiz Film İndir"</em> uygulaması kullanıcıların bankacılık bilgilerini çalabilir veya
                        kişisel fotoğraf ve mesajlarını siber suçlulara aktarabilir.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                    <h3 className="text-xl font-semibold text-white flex items-center">
                      <span className="text-red-400 mr-3">⚠️</span>
                      Sahte SMS ve WhatsApp Bağlantıları
                    </h3>
                    <p className="text-gray-300 mt-2">
                      Kısa mesaj veya anlık mesajlaşma uygulamaları üzerinden gönderilen sahte bağlantılar, 
                      kimlik avı (phishing) saldırılarının yaygın bir türüdür.
                    </p>
                    <div className="mt-3 bg-red-900 bg-opacity-30 p-3 rounded border border-red-800">
                      <p className="text-red-300 text-sm">
                        <strong>Örnek:</strong> <em>"Kargonuz teslimat aşamasında, takip etmek için tıklayın: bit.ly/sahte-link"</em>
                        Bu bağlantılar genellikle cihazınıza zararlı yazılım bulaştırır veya hesap bilgilerinizi çalan sahte web sayfalarına yönlendirir.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 mt-6">
                  <h3 className="text-xl font-semibold text-white flex items-center">
                    <span className="text-red-400 mr-3">⚠️</span>
                    Açık Wi-Fi Ağı Kullanımıyla Veri Çalınması
                  </h3>
                  <p className="text-gray-300 mt-2">
                    Kafelerde, havaalanlarında veya diğer halka açık alanlardaki şifrelenmemiş Wi-Fi ağlarına 
                    bağlanmak, verilerinizin izlenmesine veya çalınmasına yol açabilir.
                  </p>
                  <div className="mt-3 bg-red-900 bg-opacity-30 p-3 rounded border border-red-800">
                    <p className="text-red-300 text-sm">
                      <strong>Örnek:</strong> Bir saldırgan, halka açık bir Wi-Fi ağında "man-in-the-middle" saldırısı
                      düzenleyerek, ağa bağlı kullanıcıların veri trafiğini izleyebilir ve şifrelerini ele geçirebilir.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 mt-6">
                  <h3 className="text-xl font-semibold text-white flex items-center">
                    <span className="text-red-400 mr-3">⚠️</span>
                    Erişim İzinlerinin Kötüye Kullanılması
                  </h3>
                  <p className="text-gray-300 mt-2">
                    Uygulamalara verdiğimiz kamera, mikrofon, konum veya rehber gibi izinler,
                    kötü niyetli uygulamalar tarafından suistimal edilebilir.
                  </p>
                  <div className="mt-3 bg-red-900 bg-opacity-30 p-3 rounded border border-red-800">
                    <p className="text-red-300 text-sm">
                      <strong>Örnek:</strong> Basit bir fener uygulaması, neden kamera, mikrofon ve konum izni istiyor?
                      Bu tür gereksiz izinler isteyen uygulamalar, genellikle veri toplama amacı taşır.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mb-10 mt-12">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6">📲 2. Uygulama İzinlerini Yönetmek</h2>
                <p className="text-gray-300 mb-4">
                  <strong>⏱ Süre:</strong> 10 dakika
                </p>
                
                <p className="text-gray-300 mb-6">
                  Mobil uygulamalar, cihazınızın çeşitli özelliklerine erişim talep eder. Bu izinleri bilinçli şekilde
                  yönetmek, veri güvenliğiniz için kritik öneme sahiptir.
                </p>
                
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-4">İzin Kontrolü İçin İpuçları:</h3>
                  
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✅</span>
                      <div>
                        Her uygulama için "Bu izin gerçekten gerekli mi?" sorusunu sorun
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✅</span>
                      <div>
                        Uygulamanın işleviyle ilgisiz izinleri reddedin (ör: hesap makinesi uygulamasının kameraya erişim istemesi)
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✅</span>
                      <div>
                        "Yalnızca kullanırken" izin seçeneğini tercih edin, sürekli erişim yerine
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✅</span>
                      <div>
                        Düzenli olarak uygulama izinlerini gözden geçirin ve gereksiz izinleri kaldırın
                      </div>
                    </li>
                  </ul>
                  
                  <div className="mt-6 bg-gray-900 p-5 rounded-lg border border-gray-700">
                    <h3 className="text-lg font-semibold text-white mb-3">Etkileşimli Simülasyon:</h3>
                    <p className="text-gray-300 mb-4">Aşağıdaki izin isteğine nasıl yanıt verirdiniz?</p>
                    
                    <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold mr-3">F</div>
                        <div>
                          <div className="text-white font-medium">Fotoğraf Düzenleyici</div>
                          <div className="text-gray-400 text-sm">kamera erişimi istiyor</div>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex space-x-3">
                        <button 
                          onClick={() => {
                            setPermissionGranted(true)
                            alert('✅ Kamera izni verildi. Bu izin fotoğraf düzenleyici için mantıklı.')
                          }}
                          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
                        >
                          İzin Ver
                        </button>
                        <button 
                          onClick={() => {
                            setPermissionGranted(false)
                            alert('❌ Kamera izni reddedildi. Bu durumda uygulama doğru çalışmayabilir çünkü bir fotoğraf düzenleyicinin kameraya erişimi işlevselliği için önemlidir.')
                          }}
                          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
                        >
                          Reddet
                        </button>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => alert('📸 Kamera erişimi isteniyor.\nİzin verilmeli mi? Sadece güvenilir uygulamalara verin.')}
                      className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded mt-5"
                    >
                      Kamera Erişimi İste
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6">🔒 3. Telefon Güvenlik Ayarları</h2>
                <p className="text-gray-300 mb-4">
                  <strong>⏱ Süre:</strong> 10 dakika
                </p>
                
                <p className="text-gray-300 mb-6">
                  Akıllı telefonunuzu daha güvenli hale getirmek için yapabileceğiniz temel ayarlar ve alışkanlıklar vardır.
                  Bu önlemler, cihazınızı pek çok yaygın tehdide karşı koruyabilir.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                    <div className="flex items-center mb-3">
                      <span className="text-cyan-400 mr-3 text-xl">🔑</span>
                      <h3 className="text-lg font-semibold text-white">Güçlü Kimlik Doğrulama</h3>
                    </div>
                    <ul className="space-y-2 text-gray-300 ml-8">
                      <li className="list-disc">Parmak izi kullan</li>
                      <li className="list-disc">Yüz tanıma etkinleştir</li>
                      <li className="list-disc">En az 6 haneli PIN kodu seç</li>
                      <li className="list-disc">Desenler yerine şifre kullan</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                    <div className="flex items-center mb-3">
                      <span className="text-cyan-400 mr-3 text-xl">📱</span>
                      <h3 className="text-lg font-semibold text-white">Sistem Güvenliği</h3>
                    </div>
                    <ul className="space-y-2 text-gray-300 ml-8">
                      <li className="list-disc">"Bilinmeyen kaynaklardan yükleme" kapalı olsun</li>
                      <li className="list-disc">Otomatik güncellemeleri etkinleştir</li>
                      <li className="list-disc">Ekran kilidi süresini kısa tut (1-2 dk)</li>
                      <li className="list-disc">Kullanılmayan uygulamaları kaldır</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                    <div className="flex items-center mb-3">
                      <span className="text-cyan-400 mr-3 text-xl">🔍</span>
                      <h3 className="text-lg font-semibold text-white">Düzenli Kontroller</h3>
                    </div>
                    <ul className="space-y-2 text-gray-300 ml-8">
                      <li className="list-disc">Uygulama izinlerini periyodik kontrol et</li>
                      <li className="list-disc">Şüpheli uygulamaları hemen kaldır</li>
                      <li className="list-disc">Veri kullanımını takip et</li>
                      <li className="list-disc">Pil kullanım istatistiklerini incele</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                    <div className="flex items-center mb-3">
                      <span className="text-cyan-400 mr-3 text-xl">🛡️</span>
                      <h3 className="text-lg font-semibold text-white">Ek Koruma Araçları</h3>
                    </div>
                    <ul className="space-y-2 text-gray-300 ml-8">
                      <li className="list-disc">Mobil antivirüs kullan</li>
                      <li className="list-disc">"Find My Phone" özelliğini etkinleştir</li>
                      <li className="list-disc">Güvenilir VPN kullan (açık ağlarda)</li>
                      <li className="list-disc">Önemli hesaplarında 2FA kullan</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6">🧪 4. Uygulamalı Veri Koruma Testi</h2>
                <p className="text-gray-300 mb-4">
                  <strong>⏱ Süre:</strong> 10 dakika
                </p>
                
                <p className="text-gray-300 mb-6">
                  Uygulama izinlerini değerlendirme ve riskleri anlama becerinizi test edelim.
                  Aşağıdaki senaryoları inceleyerek güvenlik farkındalığınızı artırın.
                </p>
                
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-6">
                  <h3 className="text-lg font-semibold mt-1 mb-3 text-white">Bu uygulama aşağıdaki izinleri istiyor. Güvenilir mi?</h3>
                  <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 mb-4">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold mr-3">H</div>
                      <div>
                        <div className="text-white font-medium">Hava Durumu Uygulaması</div>
                        <div className="text-gray-400 text-sm">4.2 ★ | 1M+ indirme</div>
                      </div>
                    </div>
                    
                    <ul className="list-disc list-inside text-gray-300 mb-4 ml-3">
                      <li>📍 Konum</li>
                      <li>📸 Kamera</li>
                      <li>📞 Arama geçmişi</li>
                      <li>🎙️ Mikrofon</li>
                      <li>💬 SMS okuma</li>
                    </ul>
                  </div>
                  
                  <button
                    onClick={() => alert('⚠️ Bu izinler gereksiz fazla. Bu uygulama zararlı olabilir. Bir hava durumu uygulamasının sadece konum bilgisine ihtiyacı vardır.')}
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
                  >
                    Uyarıyı Göster
                  </button>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-lg font-semibold mt-1 mb-3 text-white">Güvenli vs. Şüpheli Uygulama Karşılaştırması</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-900 bg-opacity-30 p-4 rounded-lg border border-green-800">
                      <h4 className="text-green-400 font-medium mb-2">✅ Güvenli Uygulama Örneği:</h4>
                      <ul className="list-disc list-inside text-gray-300 ml-3 space-y-1">
                        <li>Sadece gerçekten ihtiyaç duyduğu izinleri ister</li>
                        <li>Gizlilik politikası açık ve anlaşılırdır</li>
                        <li>Resmi uygulama mağazasında yüksek puanı vardır</li>
                        <li>Düzenli olarak güncellenir</li>
                        <li>Bilinen, güvenilir bir geliştiriciye aittir</li>
                      </ul>
                    </div>
                    
                    <div className="bg-red-900 bg-opacity-30 p-4 rounded-lg border border-red-800">
                      <h4 className="text-red-400 font-medium mb-2">⚠️ Şüpheli Uygulama Belirtileri:</h4>
                      <ul className="list-disc list-inside text-gray-300 ml-3 space-y-1">
                        <li>İşleviyle ilgisiz izinler talep eder</li>
                        <li>Belirsiz veya çok uzun gizlilik politikası</li>
                        <li>Düşük indirme sayısı ve puanları</li>
                        <li>Nadiren güncellenir veya hiç güncellenmez</li>
                        <li>Bilinmeyen veya yeni bir geliştiriciye aittir</li>
                      </ul>
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
                      Tehditleri analiz etme yeteneği kazanırsın
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <div>
                      Uygulama izinlerini farkında olarak kontrol edersin
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <div>
                      Veri koruma alışkanlıkları geliştirirsin
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <div>
                      Gerçek hayattan senaryolarla bilinç kazanırsın
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
            <h2 className="text-2xl font-bold text-white mb-6">Diğer Eğitimler</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/egitimler/ag-guvenligi" className="block">
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-2">🌐 Ağ Güvenliği Temelleri</h3>
                  <p className="text-gray-300 mb-4">Wi-Fi güvenliği, VPN kullanımı ve güvenli uzaktan çalışma uygulamaları</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">55 dakika</span>
                    <span className="px-2 py-1 rounded text-xs font-medium bg-yellow-900 text-yellow-300">Orta</span>
                  </div>
                </div>
              </Link>
              
              <Link href="/egitimler/malware-detection" className="block">
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-2">🦠 Zararlı Yazılım Tespiti</h3>
                  <p className="text-gray-300 mb-4">Zararlı yazılımları tanıma, şüpheli dosyaları tespit etme ve güvenlik önlemleri</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">40 dakika</span>
                    <span className="px-2 py-1 rounded text-xs font-medium bg-yellow-900 text-yellow-300">Orta</span>
                  </div>
                </div>
              </Link>
              
              <Link href="/egitimler/sosyal-muhendislik" className="block">
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-2">🧑‍💼 Sosyal Mühendislik</h3>
                  <p className="text-gray-300 mb-4">Sosyal mühendislik saldırılarını tanıma, savunma ve bilgi güvenliği farkındalığı</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">50 dakika</span>
                    <span className="px-2 py-1 rounded text-xs font-medium bg-yellow-900 text-yellow-300">Orta</span>
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