'use client'

import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function OlayMudahale() {
  // Simülasyon için state tanımlamaları
  const [showCaseAlert, setShowCaseAlert] = useState(false)
  
  return (
    <>
      <Navbar />
      
      <main className="bg-gray-900 min-h-screen">
        {/* Hero Section */}
        <section className="relative py-16 bg-gray-900">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute -top-1/4 -right-1/4 h-96 w-96 rounded-full bg-red-600 blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block text-red-400">🛡️ Güvenlik Olayları ve Müdahale</span>
                <span className="block">(Security Incident Response)</span>
              </h1>
              <div className="mt-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-900 text-red-300">
                  İleri Seviye
                </span>
                <span className="ml-3 text-gray-300">⏱ Süre: 65 dakika</span>
              </div>
              <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
                Güvenlik ihlallerini tespit etme, doğru raporlama yapma ve etkili müdahale prosedürleri geliştirme
              </p>
            </div>
          </div>
        </section>
        
        {/* İçerik Bölümü 1: Güvenlik Olayı Nedir? */}
        <section className="py-12 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-700 shadow-xl mb-10">
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-red-400 mb-6">🔹 1. Güvenlik Olayı Nedir?</h2>
                <p className="text-gray-300 mb-4">
                  <strong>⏱ Süre:</strong> 10 dakika
                </p>
                
                <p className="text-gray-300 mb-6">
                  Güvenlik olayı, bir kuruluşun bilgi ve sistem varlıklarının gizliliğini, bütünlüğünü veya erişilebilirliğini tehdit eden herhangi bir faaliyettir. 
                  Bu olaylar, basit bir konfigürasyon hatasından büyük bir veri ihlaline kadar değişen şiddet düzeylerinde olabilir.
                </p>
                
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8">
                  <h3 className="text-lg font-semibold text-white mb-6">Yaygın Güvenlik Olayı Türleri:</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-900 p-5 rounded-lg border border-gray-700">
                      <div className="flex items-center mb-3">
                        <span className="text-red-400 mr-3 text-xl">🔒</span>
                        <h3 className="text-lg font-semibold text-white">Yetkisiz Erişim Girişimi</h3>
                      </div>
                      <p className="text-gray-300">
                        Bir kullanıcının veya sistemin, erişim yetkisi olmayan kaynaklara veya bilgilere ulaşmaya çalışması. Bu, brute force saldırıları,
                        kimlik bilgilerinin ele geçirilmesi veya yetki yükseltme girişimleri şeklinde olabilir.
                      </p>
                    </div>
                    
                    <div className="bg-gray-900 p-5 rounded-lg border border-gray-700">
                      <div className="flex items-center mb-3">
                        <span className="text-red-400 mr-3 text-xl">🔑</span>
                        <h3 className="text-lg font-semibold text-white">Fidye Yazılımı Bulaşması</h3>
                      </div>
                      <p className="text-gray-300">
                        Sistemdeki verileri şifreleyen ve erişimi engelleyen zararlı yazılımlar. Saldırganlar, şifre çözme anahtarı karşılığında
                        genellikle kripto para birimi ile ödeme talep ederler.
                      </p>
                    </div>
                    
                    <div className="bg-gray-900 p-5 rounded-lg border border-gray-700">
                      <div className="flex items-center mb-3">
                        <span className="text-red-400 mr-3 text-xl">📧</span>
                        <h3 className="text-lg font-semibold text-white">E-posta Kimlik Avı (Phishing)</h3>
                      </div>
                      <p className="text-gray-300">
                        Güvenilir kişi veya kurumları taklit eden sahte e-postalar yoluyla hassas bilgileri ele geçirmeye yönelik saldırılar.
                        Hedefli phishing saldırılarına "spear phishing" adı verilir ve genellikle daha sofistike olurlar.
                      </p>
                    </div>
                    
                    <div className="bg-gray-900 p-5 rounded-lg border border-gray-700">
                      <div className="flex items-center mb-3">
                        <span className="text-red-400 mr-3 text-xl">👤</span>
                        <h3 className="text-lg font-semibold text-white">Sızan Kullanıcı Kimlik Bilgileri</h3>
                      </div>
                      <p className="text-gray-300">
                        Kullanıcı adı ve şifre gibi kimlik doğrulama bilgilerinin üçüncü kişilere geçmesi. Bu bilgiler dark web'de satılabilir
                        veya doğrudan kuruluşa saldırı için kullanılabilir.
                      </p>
                    </div>
                    
                    <div className="bg-gray-900 p-5 rounded-lg border border-gray-700">
                      <div className="flex items-center mb-3">
                        <span className="text-red-400 mr-3 text-xl">📊</span>
                        <h3 className="text-lg font-semibold text-white">Anormal Trafik ve Davranışlar</h3>
                      </div>
                      <p className="text-gray-300">
                        Normal kullanım modellerinden sapan şüpheli ağ trafiği veya kullanıcı davranışları. Örneğin, 
                        yüksek hacimli veri transferleri, alışılmadık zamanlarda giriş denemeleri veya farklı coğrafi konumlardan erişim.
                      </p>
                    </div>
                    
                    <div className="bg-gray-900 p-5 rounded-lg border border-gray-700">
                      <div className="flex items-center mb-3">
                        <span className="text-red-400 mr-3 text-xl">💾</span>
                        <h3 className="text-lg font-semibold text-white">Veri Sızıntısı</h3>
                      </div>
                      <p className="text-gray-300">
                        Hassas verilerin yetkisiz kişilere kasıtlı veya kazara açıklanması. Bu, içeriden tehditler, kötü amaçlı yazılımlar
                        veya güvenlik açıkları aracılığıyla gerçekleşebilir.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-6">
                  <h3 className="text-white font-semibold flex items-center">
                    <span className="text-red-400 mr-2">❗</span>
                    Örnek: Kullanıcı saat 03:24'te Çin'den giriş yaptı – anormal mi?
                  </h3>
                  
                  <div className="mt-4 bg-gray-900 p-5 rounded-lg border border-gray-700">
                    <h4 className="text-white text-lg mb-3">Değerlendirme Kriterleri:</h4>
                    
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2">1.</span>
                        <div>
                          <strong>Kullanıcı profili:</strong> Kullanıcı normalde hangi lokasyonlardan giriş yapıyor? Çin'de iş seyahati olabilir mi?
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2">2.</span>
                        <div>
                          <strong>Saat anomalisi:</strong> Kullanıcının çalışma saatlerine göre 03:24 anormal bir zaman mı?
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2">3.</span>
                        <div>
                          <strong>Eşzamanlı oturumlar:</strong> Aynı anda farklı lokasyonlardan aktif oturumlar var mı?
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2">4.</span>
                        <div>
                          <strong>IP adresi geçmişi:</strong> Bu IP adresi daha önce kötü amaçlı aktivitelerde bulunmuş mu?
                        </div>
                      </li>
                    </ul>
                    
                    <div className="mt-4 bg-red-900 bg-opacity-30 p-4 rounded border border-red-800">
                      <p className="text-red-200">
                        <strong>Sonuç:</strong> Kullanıcı Çin'de iş seyahatinde olduğunu bildirmediyse, özellikle normal çalışma saatleri dışında yapılan 
                        bu giriş muhtemelen bir güvenlik olayıdır ve acil müdahale gerektirir.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-900 bg-opacity-20 p-5 rounded-lg border border-red-800">
                  <h3 className="text-white font-semibold mb-3">Güvenlik Olayı Kategorileri ve Önem Seviyeleri:</h3>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="py-3 px-6 text-left text-xs font-medium text-red-400 uppercase tracking-wider">Kategori</th>
                          <th className="py-3 px-6 text-left text-xs font-medium text-red-400 uppercase tracking-wider">Kritiklik</th>
                          <th className="py-3 px-6 text-left text-xs font-medium text-red-400 uppercase tracking-wider">Müdahale Süresi</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-700">
                        <tr>
                          <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-white">
                            <span className="bg-red-800 text-red-200 px-2 py-1 rounded-full text-xs mr-2">KRİTİK</span>
                            Aktif Saldırı / Büyük Veri İhlali
                          </td>
                          <td className="py-4 px-6 text-sm text-gray-300">Çok Yüksek</td>
                          <td className="py-4 px-6 text-sm text-gray-300">Anında (0-1 saat)</td>
                        </tr>
                        <tr>
                          <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-white">
                            <span className="bg-orange-800 text-orange-200 px-2 py-1 rounded-full text-xs mr-2">YÜKSEK</span>
                            Fidye Yazılımı / Yetkisiz Erişim
                          </td>
                          <td className="py-4 px-6 text-sm text-gray-300">Yüksek</td>
                          <td className="py-4 px-6 text-sm text-gray-300">Hızlı (1-4 saat)</td>
                        </tr>
                        <tr>
                          <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-white">
                            <span className="bg-yellow-800 text-yellow-200 px-2 py-1 rounded-full text-xs mr-2">ORTA</span>
                            Şüpheli Davranış / Olası Kimlik Avı
                          </td>
                          <td className="py-4 px-6 text-sm text-gray-300">Orta</td>
                          <td className="py-4 px-6 text-sm text-gray-300">Aynı Gün (4-8 saat)</td>
                        </tr>
                        <tr>
                          <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-white">
                            <span className="bg-blue-800 text-blue-200 px-2 py-1 rounded-full text-xs mr-2">DÜŞÜK</span>
                            Politika İhlalleri / Küçük Anormallikler
                          </td>
                          <td className="py-4 px-6 text-sm text-gray-300">Düşük</td>
                          <td className="py-4 px-6 text-sm text-gray-300">Planlanmış (24-48 saat)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* İçerik Bölümü 2: Olay Tespiti Yöntemleri */}
        <section className="py-12 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-700 shadow-xl mb-10">
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-red-400 mb-6">🔹 2. Olay Tespiti Yöntemleri</h2>
                <p className="text-gray-300 mb-4">
                  <strong>⏱ Süre:</strong> 15 dakika
                </p>
                
                <p className="text-gray-300 mb-6">
                  Güvenlik olaylarını hızlı ve doğru bir şekilde tespit etmek, etkin bir müdahale için kritik öneme sahiptir.
                  Bu bölümde, çeşitli güvenlik olay tespiti araçlarını ve tekniklerini inceleyeceğiz.
                </p>
                
                <div className="space-y-8">
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <div className="flex items-center mb-4">
                      <span className="text-green-400 mr-3 text-xl">✅</span>
                      <h3 className="text-lg font-semibold text-white">IDS/IPS Sistemleri</h3>
                    </div>
                    
                    <div className="bg-gray-900 p-5 rounded-lg border border-gray-700">
                      <p className="text-gray-300 mb-4">
                        <strong>IDS (Intrusion Detection System)</strong> ve <strong>IPS (Intrusion Prevention System)</strong>, ağ ve sistem trafiğini izleyen
                        ve bilinen saldırı imzalarını veya anormal davranışları tespit eden güvenlik teknolojileridir.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-800 p-4 rounded border border-gray-700">
                          <h4 className="text-white font-medium mb-2">IDS Özellikleri:</h4>
                          <ul className="list-disc ml-6 text-gray-300 space-y-1">
                            <li>Pasif izleme - trafik üzerinde değişiklik yapmaz</li>
                            <li>Anormal trafik tespit edildiğinde uyarı üretir</li>
                            <li>Ağ trafiğini (NIDS) veya sistem aktivitelerini (HIDS) izleyebilir</li>
                            <li>Popüler araçlar: Snort, Suricata, OSSEC</li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-800 p-4 rounded border border-gray-700">
                          <h4 className="text-white font-medium mb-2">IPS Özellikleri:</h4>
                          <ul className="list-disc ml-6 text-gray-300 space-y-1">
                            <li>Aktif koruma - kötü amaçlı trafiği engeller</li>
                            <li>Tespit edildiğinde hemen müdahale eder</li>
                            <li>Güvenlik duvarı yetenekleriyle birlikte çalışır</li>
                            <li>Popüler araçlar: Cisco FirePOWER, Palo Alto NGFW</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-4 bg-gray-800 p-4 rounded border border-gray-700">
                        <h4 className="text-white font-medium mb-2">Tespit Mekanizmaları:</h4>
                        <ul className="list-disc ml-6 text-gray-300 space-y-1">
                          <li>
                            <strong>İmza Tabanlı Tespit:</strong> Bilinen saldırı modellerini karşılaştırma
                          </li>
                          <li>
                            <strong>Anomali Tabanlı Tespit:</strong> Normal davranıştan sapmaları algılama
                          </li>
                          <li>
                            <strong>Protokol Analizi:</strong> Protokol standartlarına aykırılıkları tespit etme
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <div className="flex items-center mb-4">
                      <span className="text-green-400 mr-3 text-xl">✅</span>
                      <h3 className="text-lg font-semibold text-white">SIEM (Log İzleme)</h3>
                    </div>
                    
                    <div className="bg-gray-900 p-5 rounded-lg border border-gray-700">
                      <p className="text-gray-300 mb-4">
                        <strong>SIEM (Security Information and Event Management)</strong> sistemleri, farklı kaynaklardan toplanan günlük verilerini bir araya getirerek
                        korelasyon kurar ve güvenlik olaylarını tespit eder.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="bg-gray-800 p-4 rounded border border-gray-700">
                          <h4 className="text-white font-medium mb-2">Splunk</h4>
                          <p className="text-gray-300 text-sm">
                            Yüksek hacimli veri işleme kapasitesi, esnek arama dili ve zengin gösterge panelleri sunan kurumsal düzeyde SIEM çözümü.
                          </p>
                        </div>
                        
                        <div className="bg-gray-800 p-4 rounded border border-gray-700">
                          <h4 className="text-white font-medium mb-2">Wazuh</h4>
                          <p className="text-gray-300 text-sm">
                            Açık kaynaklı, ölçeklenebilir ve kapsamlı güvenlik izleme platformu. Endpoint koruması ve tehdit istihbaratı entegrasyonu sağlar.
                          </p>
                        </div>
                        
                        <div className="bg-gray-800 p-4 rounded border border-gray-700">
                          <h4 className="text-white font-medium mb-2">IBM QRadar</h4>
                          <p className="text-gray-300 text-sm">
                            Yapay zeka destekli güvenlik analizleri ve otomatik tehdit tespiti sunan entegre risk yönetimi platformu.
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-gray-800 p-4 rounded border border-gray-700">
                        <h4 className="text-white font-medium mb-2">SIEM'in Ana Bileşenleri:</h4>
                        <ul className="list-disc ml-6 text-gray-300 space-y-1">
                          <li>
                            <strong>Log Toplama:</strong> Çeşitli kaynaklardan (ağ cihazları, sunucular, uygulamalar) günlük verilerini toplar
                          </li>
                          <li>
                            <strong>Normalizasyon:</strong> Farklı formatlardaki verileri standart bir formata dönüştürür
                          </li>
                          <li>
                            <strong>Korelasyon:</strong> İlişkili olayları birleştirerek anlamlı bağlantılar kurar
                          </li>
                          <li>
                            <strong>Uyarı Mekanizması:</strong> Tanımlı kurallara göre uyarılar oluşturur
                          </li>
                          <li>
                            <strong>Raporlama:</strong> Olayların analizini ve özetini sağlar
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <div className="flex items-center mb-4">
                      <span className="text-green-400 mr-3 text-xl">✅</span>
                      <h3 className="text-lg font-semibold text-white">Davranışsal Analiz Sistemleri (UEBA)</h3>
                    </div>
                    
                    <div className="bg-gray-900 p-5 rounded-lg border border-gray-700">
                      <p className="text-gray-300 mb-4">
                        <strong>UEBA (User and Entity Behavior Analytics)</strong> sistemleri, normal davranış modellerinden sapmaları tespit ederek
                        içeriden tehditler ve gelişmiş kalıcı tehditler (APT) gibi tespit edilmesi zor tehditleri belirler.
                      </p>
                      
                      <div className="bg-gray-800 p-4 rounded border border-gray-700 mb-4">
                        <h4 className="text-white font-medium mb-2">UEBA Nasıl Çalışır?</h4>
                        <ol className="list-decimal ml-6 text-gray-300 space-y-1">
                          <li>Kullanıcı ve varlık davranışları için temel veri toplanır</li>
                          <li>Makine öğrenimi algoritmaları normal davranış modelleri oluşturur</li>
                          <li>Gerçek zamanlı davranışlar bu modellerle karşılaştırılır</li>
                          <li>Anormal davranışlar tespit edildiğinde risk puanı atanır</li>
                          <li>Belirli bir eşik aşıldığında uyarılar tetiklenir</li>
                        </ol>
                      </div>
                      
                      <div className="bg-gray-800 p-4 rounded border border-gray-700">
                        <h4 className="text-white font-medium mb-2">UEBA'nın Tespit Ettiği Anormallikler:</h4>
                        <ul className="list-disc ml-6 text-gray-300 space-y-1">
                          <li>Olağandışı zamanlarda sistem erişimi</li>
                          <li>Anormal miktarda veri indirme/yükleme</li>
                          <li>Tipik olmayan coğrafi konumlardan bağlantılar</li>
                          <li>Yetkisiz kaynaklara tekrarlanan erişim girişimleri</li>
                          <li>Kullanıcı rolüne uymayan işlem kalıpları</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <div className="flex items-center mb-4">
                      <span className="text-green-400 mr-3 text-xl">✅</span>
                      <h3 className="text-lg font-semibold text-white">Kullanıcı Şikayetleri / E-posta İhbarları</h3>
                    </div>
                    
                    <div className="bg-gray-900 p-5 rounded-lg border border-gray-700">
                      <p className="text-gray-300 mb-4">
                        Teknolojik çözümlerin yanı sıra, kullanıcılardan gelen bildirimlerin de bir olay tespit mekanizması olarak değeri büyüktür.
                        Çalışanlar genellikle sistemlerindeki şüpheli davranışları ilk fark eden kişilerdir.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-800 p-4 rounded border border-gray-700">
                          <h4 className="text-white font-medium mb-2">Etkin Bildirim Sistemi İçin Gereksinimler:</h4>
                          <ul className="list-disc ml-6 text-gray-300 space-y-1">
                            <li>Kullanımı kolay bir raporlama mekanizması</li>
                            <li>Phishing e-posta bildirimi için özel araçlar</li>
                            <li>7/24 erişilebilir yardım masası veya güvenlik ekibi</li>
                            <li>Anonim bildirim seçenekleri</li>
                            <li>Çalışanlar için ödül/tanınma programları</li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-800 p-4 rounded border border-gray-700">
                          <h4 className="text-white font-medium mb-2">Yaygın Kullanıcı Bildirimleri:</h4>
                          <ul className="list-disc ml-6 text-gray-300 space-y-1">
                            <li>Şüpheli e-postalar veya mesajlar</li>
                            <li>Yavaşlayan sistem performansı</li>
                            <li>Açıklanamayan sistem yeniden başlatmaları</li>
                            <li>Beklenmeyen pop-up'lar veya uyarılar</li>
                            <li>Hesaplarda izinsiz değişiklikler</li>
                            <li>Erişilemeyen dosyalar veya sistemler</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-red-900 bg-opacity-20 p-5 rounded-lg border border-red-800">
                  <h3 className="text-white font-semibold mb-3">Tespit Sistemlerinin Entegrasyonu:</h3>
                  
                  <p className="text-gray-300 mb-4">
                    Etkili bir olay tespiti stratejisi, farklı yaklaşımların katmanlı bir şekilde uygulanmasını gerektirir.
                    Hiçbir tek teknoloji tüm tehditleri tespit edemez, bu nedenle tamamlayıcı sistemlerin bir arada kullanılması önemlidir.
                  </p>
                  
                  <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                    <h4 className="text-white font-medium mb-3">Katmanlı Tespit Stratejisi:</h4>
                    
                    <div className="overflow-x-auto">
                      <table className="min-w-full">
                        <thead>
                          <tr className="border-b border-gray-700">
                            <th className="py-3 px-6 text-left text-xs font-medium text-red-400 uppercase tracking-wider">Katman</th>
                            <th className="py-3 px-6 text-left text-xs font-medium text-red-400 uppercase tracking-wider">Tespit Yöntemi</th>
                            <th className="py-3 px-6 text-left text-xs font-medium text-red-400 uppercase tracking-wider">Avantajları</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-700">
                          <tr>
                            <td className="py-3 px-6 text-sm text-gray-300">Ağ Katmanı</td>
                            <td className="py-3 px-6 text-sm text-gray-300">IDS/IPS, Ağ Trafiği Analizi</td>
                            <td className="py-3 px-6 text-sm text-gray-300">Gerçek zamanlı tespit, geniş kapsam</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-6 text-sm text-gray-300">Endpoint Katmanı</td>
                            <td className="py-3 px-6 text-sm text-gray-300">EDR, Antivirüs, HIDS</td>
                            <td className="py-3 px-6 text-sm text-gray-300">Ayrıntılı host aktivitesi, şifreli trafik tespiti</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-6 text-sm text-gray-300">Veri Korelasyonu</td>
                            <td className="py-3 px-6 text-sm text-gray-300">SIEM, Log Analizi</td>
                            <td className="py-3 px-6 text-sm text-gray-300">Kapsamlı olay görünürlüğü, merkezi izleme</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-6 text-sm text-gray-300">Davranışsal Analiz</td>
                            <td className="py-3 px-6 text-sm text-gray-300">UEBA, AI/ML Modelleri</td>
                            <td className="py-3 px-6 text-sm text-gray-300">İçeriden tehditleri ve APT'leri tespit</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-6 text-sm text-gray-300">İnsan Katmanı</td>
                            <td className="py-3 px-6 text-sm text-gray-300">Kullanıcı Bildirimleri, SOC Analistleri</td>
                            <td className="py-3 px-6 text-sm text-gray-300">Bağlamsal değerlendirme, sezgisel tespit</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* İçerik Bölümü 3: Olay Müdahale Süreci */}
        <section className="py-12 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-700 shadow-xl mb-10">
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-red-400 mb-6">🔹 3. Olay Müdahale Süreci</h2>
                <p className="text-gray-300 mb-4">
                  <strong>⏱ Süre:</strong> 15 dakika
                </p>
                
                <p className="text-gray-300 mb-6">
                  Bir güvenlik olayı tespit edildiğinde izlenecek sistematik yaklaşım, zararı en aza indirmek ve normal operasyonlara
                  hızlı dönüş sağlamak için kritik öneme sahiptir. Bu bölümde, etkili bir olay müdahale sürecinin aşamalarını inceleyeceğiz.
                </p>
                
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8">
                  <h3 className="text-lg font-semibold text-white mb-6">Olay Müdahale Yaşam Döngüsü:</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-gray-900 p-5 rounded-lg border border-gray-700">
                      <div className="flex items-center justify-center mb-3">
                        <span className="text-red-400 text-4xl">1</span>
                      </div>
                      <h4 className="text-center text-white font-semibold mb-2">Hazırlık</h4>
                      <p className="text-gray-300 text-sm">
                        Olay müdahale planlarını, araçlarını ve ekiplerini geliştirme ve test etme süreci.
                        Olası senaryolar için önceden hazırlık yapılması.
                      </p>
                    </div>
                    
                    <div className="bg-gray-900 p-5 rounded-lg border border-gray-700">
                      <div className="flex items-center justify-center mb-3">
                        <span className="text-red-400 text-4xl">2</span>
                      </div>
                      <h4 className="text-center text-white font-semibold mb-2">Tespit ve Analiz</h4>
                      <p className="text-gray-300 text-sm">
                        Güvenlik olaylarının belirlenmesi, sınıflandırılması ve olayın kapsamı/etkisinin değerlendirilmesi.
                      </p>
                    </div>
                    
                    <div className="bg-gray-900 p-5 rounded-lg border border-gray-700">
                      <div className="flex items-center justify-center mb-3">
                        <span className="text-red-400 text-4xl">3</span>
                      </div>
                      <h4 className="text-center text-white font-semibold mb-2">Çevreleme</h4>
                      <p className="text-gray-300 text-sm">
                        Olayın yayılmasını durdurmak ve etkisini izole etmek için acil önlemler alma.
                      </p>
                    </div>
                    
                    <div className="bg-gray-900 p-5 rounded-lg border border-gray-700">
                      <div className="flex items-center justify-center mb-3">
                        <span className="text-red-400 text-4xl">4</span>
                      </div>
                      <h4 className="text-center text-white font-semibold mb-2">Ortadan Kaldırma</h4>
                      <p className="text-gray-300 text-sm">
                        Tehdit kaynaklarını tamamen temizleme ve güvenlik açıklarını kapatma.
                      </p>
                    </div>
                    
                    <div className="bg-gray-900 p-5 rounded-lg border border-gray-700">
                      <div className="flex items-center justify-center mb-3">
                        <span className="text-red-400 text-4xl">5</span>
                      </div>
                      <h4 className="text-center text-white font-semibold mb-2">Kurtarma</h4>
                      <p className="text-gray-300 text-sm">
                        Sistemleri normal duruma döndürme ve operasyonları yeniden başlatma süreci.
                      </p>
                    </div>
                    
                    <div className="bg-gray-900 p-5 rounded-lg border border-gray-700">
                      <div className="flex items-center justify-center mb-3">
                        <span className="text-red-400 text-4xl">6</span>
                      </div>
                      <h4 className="text-center text-white font-semibold mb-2">Öğrenilen Dersler</h4>
                      <p className="text-gray-300 text-sm">
                        Olayın gözden geçirilmesi, dokümantasyon ve gelecekte benzer olayları önlemek için iyileştirmeler yapma.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8">
                  <div className="flex items-center mb-4">
                    <span className="text-green-400 mr-3 text-xl">✅</span>
                    <h3 className="text-lg font-semibold text-white">1. Hazırlık Aşaması</h3>
                  </div>
                  
                  <div className="bg-gray-900 p-5 rounded-lg border border-gray-700">
                    <p className="text-gray-300 mb-4">
                      Etkili bir olay müdahalesi için en kritik bileşen, olaylar gerçekleşmeden önce yapılan hazırlıktır.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-800 p-4 rounded border border-gray-700">
                        <h4 className="text-white font-medium mb-2">Hazırlık Kontrol Listesi:</h4>
                        <ul className="list-disc ml-6 text-gray-300 space-y-1">
                          <li>Resmi olay müdahale planı oluşturma</li>
                          <li>Olay müdahale ekibini (CSIRT) belirleme</li>
                          <li>Rol ve sorumlulukları tanımlama</li>
                          <li>İletişim ve eskalasyon prosedürleri</li>
                          <li>Gerekli araçları ve kaynakları sağlama</li>
                          <li>Düzenli tatbikatlar ve simülasyonlar</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-800 p-4 rounded border border-gray-700">
                        <h4 className="text-white font-medium mb-2">Standart Çalışma Prosedürleri (SOP):</h4>
                        <ul className="list-disc ml-6 text-gray-300 space-y-1">
                          <li>Sık karşılaşılan olay türleri için adım adım rehberler</li>
                          <li>Kanıt toplama prosedürleri</li>
                          <li>Sistem yalıtım protokolleri</li>
                          <li>Yedekleme ve kurtarma süreçleri</li>
                          <li>Yasalara uyum ve bildirim gereksinimleri</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 p-4 rounded border border-gray-700">
                      <h4 className="text-white font-medium mb-2">Playbook Örneği: Ransomware Müdahalesi</h4>
                      <div className="bg-gray-900 p-3 rounded-md border border-gray-700 text-sm text-gray-300">
                        <ol className="list-decimal ml-6 space-y-1">
                          <li>Etkilenen sistemleri ağdan izole et</li>
                          <li>Fidye yazılımı türünü ve sürümünü tanımla</li>
                          <li>Uygulanabilir çözümler için tehdit istihbaratı kontrol et</li>
                          <li>Temiz yedeklerden kurtarma olasılığını değerlendir</li>
                          <li>Adli inceleme için sistem görüntüleri al</li>
                          <li>Bölüm yöneticileri ve yasal ekibe bilgi ver</li>
                          <li>Temiz sistemler üzerinde kurtarma işlemini başlat</li>
                          <li>Giriş noktasını tespit et ve güvenlik açığını kapat</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8">
                  <div className="flex items-center mb-4">
                    <span className="text-green-400 mr-3 text-xl">✅</span>
                    <h3 className="text-lg font-semibold text-white">2-3. Tespit, Analiz ve Çevreleme</h3>
                  </div>
                  
                  <div className="bg-gray-900 p-5 rounded-lg border border-gray-700">
                    <p className="text-gray-300 mb-4">
                      Bir olay tespit edildiğinde, hızlı ve doğru analiz yaparak olayın kapsamını belirlemek ve çevrelemek kritik öneme sahiptir.
                    </p>
                    
                    <div className="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
                      <h4 className="text-white font-medium mb-2">Olayın Kapsamını Belirleme:</h4>
                      <div className="text-gray-300 space-y-2">
                        <p><strong>Hızlı Değerlendirme Soruları:</strong></p>
                        <ol className="list-decimal ml-6 space-y-1">
                          <li>Hangi sistemler ve veriler etkilenmiş?</li>
                          <li>İhlal ne zaman başlamış ve hala devam ediyor mu?</li>
                          <li>Hangi kullanıcı hesapları etkilenmiş olabilir?</li>
                          <li>İş operasyonları üzerindeki mevcut ve potansiyel etki nedir?</li>
                          <li>Saldırı vektörü nedir (başlangıç noktası)?</li>
                        </ol>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-800 p-4 rounded border border-gray-700">
                        <h4 className="text-white font-medium mb-2">Çevreleme Stratejileri:</h4>
                        <ul className="list-disc ml-6 text-gray-300 space-y-1">
                          <li>
                            <strong>Kısa vadeli:</strong> Etkilenen sistemleri ağdan izole etme, şüpheli hesapları devre dışı bırakma
                          </li>
                          <li>
                            <strong>Orta vadeli:</strong> Ek güvenlik kontrolleri uygulama, ağ segmentasyonunu güçlendirme
                          </li>
                          <li>
                            <strong>Uzun vadeli:</strong> Sistem mimarisini güncelleme, güvenlik duvarı kurallarını yeniden yapılandırma
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-800 p-4 rounded border border-gray-700">
                        <h4 className="text-white font-medium mb-2">Kritik Yapılacaklar:</h4>
                        <ul className="list-disc ml-6 text-gray-300 space-y-1">
                          <li>Detaylı olay günlüğü tutma (timeline)</li>
                          <li>Tehdidi izole etmek için ağ segmentasyonu uygulama</li>
                          <li>Tüm müdahale işlemlerini belgeleme</li>
                          <li>Adli kanıtları koruma (log dosyaları, disk görüntüleri)</li>
                          <li>İş etkisini en aza indirmek için alternatif süreçler planlama</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-red-900 bg-opacity-20 p-4 rounded border border-red-800">
                      <h4 className="text-white font-medium mb-2">Dikkat Edilmesi Gerekenler:</h4>
                      <ul className="list-disc ml-6 text-red-200 space-y-1">
                        <li>
                          <strong>Aşırı tepki vermeyin:</strong> İş operasyonlarını gereksiz yere kesintiye uğratmayın
                        </li>
                        <li>
                          <strong>Kanıtları yok etmeyin:</strong> Çözüm uygulamadan önce etkilenen sistemlerin adli kopyalarını alın
                        </li>
                        <li>
                          <strong>Saldırganı uyarmayın:</strong> Saldırgan fark ederse taktiklerini değiştirebilir veya delilleri yok edebilir
                        </li>
                        <li>
                          <strong>Erken bildirimde bulunmayın:</strong> Tam kapsamı belirlemeden paydaşlara bildirim yapmayın
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <div className="flex items-center mb-4">
                    <span className="text-green-400 mr-3 text-xl">✅</span>
                    <h3 className="text-lg font-semibold text-white">4-5-6. Ortadan Kaldırma, Kurtarma ve Öğrenilen Dersler</h3>
                  </div>
                  
                  <div className="bg-gray-900 p-5 rounded-lg border border-gray-700">
                    <p className="text-gray-300 mb-4">
                      Olay çevrelendikten sonra, tehdidi tamamen ortadan kaldırma, sistemleri kurtarma ve 
                      gelecekteki olayları önlemeye yönelik dersler çıkarma süreçleri başlar.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-gray-800 p-4 rounded border border-gray-700">
                        <h4 className="text-white font-medium mb-2">Ortadan Kaldırma:</h4>
                        <ul className="list-disc ml-6 text-gray-300 space-y-1">
                          <li>Tüm zararlı bileşenleri temizleme</li>
                          <li>Etkilenen sistemleri yeniden oluşturma</li>
                          <li>Güvenlik açıklarını kapatma</li>
                          <li>Parolaları sıfırlama</li>
                          <li>Ek güvenlik kontrolleri uygulama</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-800 p-4 rounded border border-gray-700">
                        <h4 className="text-white font-medium mb-2">Kurtarma:</h4>
                        <ul className="list-disc ml-6 text-gray-300 space-y-1">
                          <li>Yedeklenen verilerden sistemleri geri yükleme</li>
                          <li>Kademeli olarak servisleri yeniden başlatma</li>
                          <li>Sistem güvenliğini doğrulama testleri</li>
                          <li>İş sürekliliği planını devreye alma</li>
                          <li>İzlemeyi artırma</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-800 p-4 rounded border border-gray-700">
                        <h4 className="text-white font-medium mb-2">Öğrenilen Dersler:</h4>
                        <ul className="list-disc ml-6 text-gray-300 space-y-1">
                          <li>Detaylı olay raporu hazırlama</li>
                          <li>Kök neden analizi yapma</li>
                          <li>Müdahale etkinliğini değerlendirme</li>
                          <li>Güvenlik kontrollerini güncelleme</li>
                          <li>Personel eğitimlerini güncelleme</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 p-4 rounded border border-gray-700 mb-4">
                      <h4 className="text-white font-medium mb-2">Olay Sonrası Analiz (Post-Mortem):</h4>
                      <div className="bg-gray-900 p-3 rounded-md border border-gray-700 text-sm text-gray-300">
                        <ol className="list-decimal ml-6 space-y-1">
                          <li>
                            <strong>Zaman Çizelgesi:</strong> Olayın başlangıcından çözülmesine kadar tüm adımların kronolojik sıralaması
                          </li>
                          <li>
                            <strong>Etki Değerlendirmesi:</strong> İş operasyonları, maliyetler ve itibar üzerindeki etkilerin analizi
                          </li>
                          <li>
                            <strong>Başarılı Uygulamalar:</strong> Olayı tespit etme ve yanıtlamada iyi çalışan yöntemler
                          </li>
                          <li>
                            <strong>İyileştirme Alanları:</strong> Gelecekteki olay müdahale süreçlerini güçlendirmek için öneriler
                          </li>
                          <li>
                            <strong>Teknik Detaylar:</strong> Saldırı vektörü, kullanılan teknikler ve alınan güvenlik önlemleri
                          </li>
                        </ol>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-blue-900 bg-opacity-20 rounded border border-blue-800">
                      <h4 className="text-white font-medium mb-2">İletişim ve Raporlama:</h4>
                      <div className="text-gray-300">
                        <p className="mb-3">
                          Bir güvenlik olayının iyileştirilmesinden sonra, farklı paydaşlara bilgi verilmesi gerekebilir:
                        </p>
                        <ul className="list-disc ml-6 space-y-1">
                          <li>
                            <strong>İç Paydaşlar:</strong> Yönetim ekibi, etkilenen departmanlar, çalışanlar
                          </li>
                          <li>
                            <strong>Dış Paydaşlar:</strong> Müşteriler, iş ortakları, tedarikçiler
                          </li>
                          <li>
                            <strong>Düzenleyici Kurumlar:</strong> KVKK, SPK, BDDK veya sektöre özgü düzenleyiciler
                          </li>
                          <li>
                            <strong>Hukuk Ekibi:</strong> Yasal yükümlülükler ve potansiyel sorumluluklar
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
} 