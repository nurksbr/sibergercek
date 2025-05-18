'use client'

import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function BulutGuvenligi() {
  // Simülasyon için state tanımlamaları
  const [showS3Alert, setShowS3Alert] = useState(false)
  const [showRoleAlert, setShowRoleAlert] = useState(false)
  
  return (
    <>
      <Navbar />
      
      <main className="bg-gray-900 min-h-screen">
        {/* Hero Section */}
        <section className="relative py-16 bg-gray-900">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute -top-1/4 -right-1/4 h-96 w-96 rounded-full bg-blue-600 blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block text-blue-400">☁️ Bulut Güvenliği</span>
                <span className="block">(Cloud Security)</span>
              </h1>
              <div className="mt-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-900 text-red-300">
                  İleri Seviye
                </span>
                <span className="ml-3 text-gray-300">⏱ Süre: 55 dakika</span>
              </div>
              <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
                AWS, Azure, Google Cloud gibi ortamlarda güvenli yapılandırma yapmak, sızıntıları önlemek ve güvenlik rollerini anlamak
              </p>
            </div>
          </div>
        </section>

        {/* İçerik Bölümü 1: Paylaşılan Sorumluluk Modeli */}
        <section className="py-12 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-700 shadow-xl mb-10">
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-blue-400 mb-6">🔹 1. Paylaşılan Sorumluluk Modeli (Shared Responsibility Model)</h2>
                <p className="text-gray-300 mb-4">
                  <strong>⏱ Süre:</strong> 10 dakika
                </p>
                
                <p className="text-gray-300 mb-6">
                  Bulut güvenliği, bulut sağlayıcısı ve kullanıcı arasında paylaşılan bir sorumluluktur. Bulut sağlayıcıları altyapı güvenliğinden sorumlu olurken, 
                  kullanıcılar kendi verilerinin, uygulamalarının ve erişim yönetiminin güvenliğinden sorumludur. Bu modeli anlamak, güvenlik stratejinizi doğru şekilde planlamanızı sağlar.
                </p>
                
                <div className="overflow-x-auto bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="py-3 px-6 text-left text-xs font-medium text-blue-400 uppercase tracking-wider">Katman</th>
                        <th className="py-3 px-6 text-left text-xs font-medium text-blue-400 uppercase tracking-wider">Sorumlu</th>
                        <th className="py-3 px-6 text-left text-xs font-medium text-blue-400 uppercase tracking-wider">Açıklama</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      <tr>
                        <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-300">Fiziksel güvenlik</td>
                        <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-300">
                          <span className="bg-blue-900 text-blue-200 px-2 py-1 rounded-full text-xs">☁️ Bulut Sağlayıcısı</span>
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-300">Veri merkezleri, sunucular, kablolama, enerji</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-300">Ağ altyapısı</td>
                        <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-300">
                          <span className="bg-blue-900 text-blue-200 px-2 py-1 rounded-full text-xs">☁️ Bulut Sağlayıcısı</span>
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-300">Ağ güvenliği, DDoS koruması, temel güvenlik duvarları</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-300">Hypervisor</td>
                        <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-300">
                          <span className="bg-blue-900 text-blue-200 px-2 py-1 rounded-full text-xs">☁️ Bulut Sağlayıcısı</span>
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-300">Sanallaştırma katmanı, makine izolasyonu</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-300">İşletim sistemi</td>
                        <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-300">
                          <span className="bg-purple-900 text-purple-200 px-2 py-1 rounded-full text-xs">👤 Kullanıcı/Kuruluş</span>
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-300">Patch yönetimi, güvenlik ayarları, sıkılaştırma</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-300">Uygulama güvenliği</td>
                        <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-300">
                          <span className="bg-purple-900 text-purple-200 px-2 py-1 rounded-full text-xs">👤 Kullanıcı/Kuruluş</span>
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-300">Yazılım güvenliği, güvenli kod, uygulama yapılandırması</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-300">Veri güvenliği</td>
                        <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-300">
                          <span className="bg-purple-900 text-purple-200 px-2 py-1 rounded-full text-xs">👤 Kullanıcı/Kuruluş</span>
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-300">Veri şifreleme, sınıflandırma, yedekleme, silme</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-300">Kimlik yönetimi</td>
                        <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-300">
                          <span className="bg-purple-900 text-purple-200 px-2 py-1 rounded-full text-xs">👤 Kullanıcı/Kuruluş</span>
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-300">Kimlik doğrulama, yetkilendirme, kullanıcı hakları</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="bg-indigo-900 bg-opacity-30 p-6 rounded-lg border border-indigo-700 mb-6">
                  <h3 className="text-lg font-semibold text-indigo-300 mb-4">Gerçek Hayat Örneği:</h3>
                  
                  <div className="bg-indigo-900 bg-opacity-40 p-4 rounded-lg border border-indigo-800">
                    <h4 className="text-white font-medium">🔍 AWS S3 Bucket Yapılandırma Hatası</h4>
                    <p className="text-gray-300 mt-2">
                      AWS altyapısı güvenli olsa da, yanlış yapılandırılmış bir S3 Bucket'ı halka açık hale getirerek hassas verilerin sızmasına neden olabilir. 
                      Amazon altyapının güvenliğini sağlarken, S3 Bucket'ın erişim izinleri kullanıcının sorumluluğundadır. 2019'da, Capital One bankasının AWS Cloud'da depolanan 
                      yaklaşık 100 milyon müşteriye ait kişisel bilgileri, yanlış yapılandırılmış bir web uygulaması güvenlik duvarı nedeniyle sızdırıldı.
                    </p>
                  </div>
                </div>
                
                <div className="bg-blue-900 bg-opacity-20 p-5 rounded-lg border border-blue-800">
                  <h3 className="text-white font-semibold mb-2">💡 Önemli Noktalar:</h3>
                  <ul className="list-disc ml-6 text-gray-300 space-y-1">
                    <li>Bulut güvenliği yalnızca sağlayıcının sorumluluğu değildir</li>
                    <li>Kullanıcılar olarak, kendi sorumluluğumuzdaki güvenlik katmanlarını anlamalıyız</li>
                    <li>Her bulut sağlayıcısının modeli biraz farklılık gösterebilir (AWS, Azure, GCP)</li>
                    <li>"Bulutu güvenli şekilde kullanmak" ile "bulut içinde güvenli uygulamalar oluşturmak" farklıdır</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* İçerik Bölümü 2: Yaygın Tehditler ve Hatalar */}
        <section className="py-12 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-700 shadow-xl mb-10">
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-blue-400 mb-6">🔹 2. Yaygın Tehditler ve Hatalar</h2>
                <p className="text-gray-300 mb-4">
                  <strong>⏱ Süre:</strong> 15 dakika
                </p>
                
                <p className="text-gray-300 mb-6">
                  Bulut ortamlarında en yaygın güvenlik tehditleri genellikle yanlış yapılandırmalardan kaynaklanır. Bu bölümde, en sık karşılaşılan yapılandırma hatalarını ve bunların nasıl önleneceğini öğreneceksiniz.
                </p>
                
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8">
                  <h3 className="text-lg font-semibold text-white mb-6">En Yaygın Bulut Güvenliği Tehditleri:</h3>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr className="bg-gray-900">
                          <th className="py-3 px-6 text-left text-xs font-medium text-blue-400 uppercase tracking-wider">Tehdit</th>
                          <th className="py-3 px-6 text-left text-xs font-medium text-blue-400 uppercase tracking-wider">Açıklama</th>
                          <th className="py-3 px-6 text-left text-xs font-medium text-blue-400 uppercase tracking-wider">Etki</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-700">
                        <tr className="bg-gray-900 bg-opacity-40">
                          <td className="py-4 px-6 whitespace-nowrap">
                            <div className="flex items-center">
                              <span className="text-xl mr-2">🔓</span>
                              <span className="font-medium text-white">Public S3 bucket</span>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-gray-300">
                            Herkesin erişebildiği ve içeriği okuyabildiği veri depolama alanları
                          </td>
                          <td className="py-4 px-6 text-gray-300">
                            Hassas verilerin ifşa olması, KVKK/GDPR ihlalleri, finansal ve itibar kaybı
                          </td>
                        </tr>
                        <tr className="bg-gray-900 bg-opacity-40">
                          <td className="py-4 px-6 whitespace-nowrap">
                            <div className="flex items-center">
                              <span className="text-xl mr-2">❌</span>
                              <span className="font-medium text-white">Varsayılan güvenlik grupları</span>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-gray-300">
                            Tüm dünyaya açık 22. port (SSH) veya RDP portları gibi varsayılan ayarlar
                          </td>
                          <td className="py-4 px-6 text-gray-300">
                            Yetkisiz erişim, brute force saldırıları, sistem ele geçirme riskleri
                          </td>
                        </tr>
                        <tr className="bg-gray-900 bg-opacity-40">
                          <td className="py-4 px-6 whitespace-nowrap">
                            <div className="flex items-center">
                              <span className="text-xl mr-2">🔑</span>
                              <span className="font-medium text-white">Sabit kodlanmış API anahtarları</span>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-gray-300">
                            Kaynak kodda, konfigürasyon dosyalarında veya GitHub'da sızdırılmış API anahtarları
                          </td>
                          <td className="py-4 px-6 text-gray-300">
                            Yetkisiz hesap erişimi, bulut kaynaklarının kötüye kullanımı, ek maliyetler
                          </td>
                        </tr>
                        <tr className="bg-gray-900 bg-opacity-40">
                          <td className="py-4 px-6 whitespace-nowrap">
                            <div className="flex items-center">
                              <span className="text-xl mr-2">💽</span>
                              <span className="font-medium text-white">Şifrelenmemiş veriler</span>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-gray-300">
                            Durağan veya hareket halindeki verilerin şifrelenmemesi
                          </td>
                          <td className="py-4 px-6 text-gray-300">
                            Veri ihlalleri, gizlilik sorunları, yasal düzenlemelere aykırılık
                          </td>
                        </tr>
                        <tr className="bg-gray-900 bg-opacity-40">
                          <td className="py-4 px-6 whitespace-nowrap">
                            <div className="flex items-center">
                              <span className="text-xl mr-2">👥</span>
                              <span className="font-medium text-white">Aşırı izinler (IAM)</span>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-gray-300">
                            Kullanıcılara gereksiz yere geniş yetkiler verilmesi
                          </td>
                          <td className="py-4 px-6 text-gray-300">
                            Bir hesabın ele geçirilmesi durumunda daha büyük etkili saldırılar
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4">⚠️ Simülasyon: Tehlikeli S3 Yapılandırması</h3>
                  
                  <p className="text-gray-300 mb-4">
                    Aşağıdaki S3 bucket yapılandırmasındaki güvenlik riskini tespit edin:
                  </p>
                  
                  <pre className="bg-slate-800 p-4 rounded text-red-300 text-sm font-mono mt-4">
{`"ACL": "public-read",
"BucketPolicy": {
  "Effect": "Allow",
  "Principal": "*",
  "Action": "s3:GetObject"
}`}
                  </pre>
                  
                  <button 
                    onClick={() => {
                      setShowS3Alert(true)
                      setTimeout(() => setShowS3Alert(false), 5000)
                    }}
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded mt-4 text-white"
                  >
                    Yapılandırmayı İncele
                  </button>
                  
                  {showS3Alert && (
                    <div className="mt-4 bg-red-900 bg-opacity-40 p-4 rounded border border-red-800 animate-pulse">
                      <h5 className="text-white font-medium flex items-center">
                        <span className="text-red-400 mr-2">🚨</span>
                        Kritik Güvenlik Riski
                      </h5>
                      <p className="text-red-200 mt-2">
                        Bu yapılandırma, bucket'ı tüm dünyaya açık hale getirir. "public-read" ACL ve "*" principal ayarları internetteki herkesin 
                        bucket içindeki nesnelere erişmesine izin verir. Bu, hassas verilerin herkes tarafından okunmasına neden olabilir.
                      </p>
                      <div className="mt-3 bg-gray-800 p-3 rounded">
                        <h6 className="text-white text-sm font-medium">Düzeltme:</h6>
                        <ul className="list-disc ml-5 mt-1 text-gray-300 text-sm">
                          <li>ACL'yi "private" olarak değiştirin</li>
                          <li>Bucket politikasında "Principal" değerini yalnızca belirli AWS hesapları veya roller olarak belirtin</li>
                          <li>Presigned URL'ler kullanarak geçici, sınırlı erişim sağlayın</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="bg-red-900 bg-opacity-20 p-5 rounded-lg border border-red-800">
                  <h3 className="text-white font-semibold mb-3">Bulut Ortamlarında En Sık Yapılan Hatalar:</h3>
                  <ul className="list-disc ml-6 space-y-3 text-gray-300">
                    <li>
                      <strong className="text-white">Git'te kimlik bilgileri paylaşmak:</strong> Yapılandırma dosyalarında, kaynak kodda veya commit geçmişinde API anahtarları, 
                      erişim anahtarları veya sertifikalar bırakmak. Bot'lar sürekli GitHub'ı tarayarak açığa çıkmış anahtarları kötüye kullanmaktadır.
                    </li>
                    <li>
                      <strong className="text-white">Log/denetim yetersizliği:</strong> CloudTrail, VPC Flow Logs, S3 Access Logs gibi denetim sistemlerini 
                      aktif etmemek, güvenlik olaylarını tespit etmeyi ve müdahale etmeyi imkansız hale getirir.
                    </li>
                    <li>
                      <strong className="text-white">Yama yönetimi eksikliği:</strong> EC2 örnekleri ve diğer hizmetlerde otomatik yama yönetiminin yapılmaması, 
                      bilinen güvenlik açıklarına karşı sistemleri savunmasız bırakır.
                    </li>
                    <li>
                      <strong className="text-white">MFA kullanmamak:</strong> Özellikle yönetici ve root hesapları için çok faktörlü kimlik doğrulamanın 
                      aktifleştirilmemesi, hesap ele geçirme saldırılarına davetiye çıkarır.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
              {/* İçerik Bölümü 3: Güvenli Yapılandırma İlkeleri */}        <section className="py-12 bg-gray-800">          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">            <div className="bg-gray-900 rounded-xl p-8 border border-gray-700 shadow-xl mb-10">              <div className="mb-10">                <h2 className="text-2xl font-bold text-blue-400 mb-6">🔹 3. Güvenli Yapılandırma İlkeleri</h2>                <p className="text-gray-300 mb-4">                  <strong>⏱ Süre:</strong> 15 dakika                </p>                                <p className="text-gray-300 mb-6">                  Bulut ortamlarını güvenli bir şekilde yapılandırmak, veri sızıntılarını ve güvenlik ihlallerini önlemenin anahtarıdır.                   Bu bölümde, bulutta güvenli yapılandırma için temel ilkeleri ve en iyi uygulamaları öğreneceksiniz.                </p>                                <div className="space-y-6">                  <div className="bg-green-900 bg-opacity-20 p-5 rounded-lg border border-green-800">                    <div className="flex items-start">                      <span className="text-green-400 mr-3 mt-1">✅</span>                      <div>                        <h4 className="text-white font-semibold">IAM Rolleri Kullanın (Bireysel Kullanıcılara Değil)</h4>                        <p className="text-gray-300 mt-2">                          Uygulamalar ve hizmetler için bireysel IAM kullanıcıları oluşturmak yerine, roller kullanın. Roller, kimlik bilgilerinin                           uygulamalarda saklanmasına gerek kalmadan otomatik olarak döndürülen geçici kimlik bilgileri sağlar.                           Bu, anahtarların sızma veya çalınma riskini azaltır.                        </p>                      </div>                    </div>                  </div>                                    <div className="bg-green-900 bg-opacity-20 p-5 rounded-lg border border-green-800">                    <div className="flex items-start">                      <span className="text-green-400 mr-3 mt-1">✅</span>                      <div>                        <h4 className="text-white font-semibold">Şifreli Veri Aktarımı ve Depolama</h4>                        <p className="text-gray-300 mt-2">                          Hem hareket halindeki (in-transit) hem de durağan (at-rest) verileri şifrelemek kritik önem taşır. HTTPS, TLS/SSL, SFTP                           gibi güvenli protokoller kullanın ve veri depolama servislerinde (S3, EBS, RDS) şifrelemeyi etkinleştirin.                        </p>                      </div>                    </div>                  </div>                                    <div className="bg-green-900 bg-opacity-20 p-5 rounded-lg border border-green-800">                    <div className="flex items-start">                      <span className="text-green-400 mr-3 mt-1">✅</span>                      <div>                        <h4 className="text-white font-semibold">Güvenlik Gruplarını Özelleştirin</h4>                        <p className="text-gray-300 mt-2">                          Varsayılan güvenlik grupları yerine, gerekli minimum portları ve IP aralıklarını açan özelleştirilmiş güvenlik grupları                           oluşturun. "0.0.0.0/0" gibi tüm IP adreslerine izin veren kurallardan kaçının. CIDR blokları ile erişimi sınırlandırın.                        </p>                      </div>                    </div>                  </div>                                    <div className="bg-green-900 bg-opacity-20 p-5 rounded-lg border border-green-800">                    <div className="flex items-start">                      <span className="text-green-400 mr-3 mt-1">✅</span>                      <div>                        <h4 className="text-white font-semibold">Denetim Günlüklerini Aktifleştirin</h4>                        <p className="text-gray-300 mt-2">                          Bulut ortamında tüm aktiviteleri izlemek için kapsamlı günlük kaydı yapılandırın. AWS CloudTrail, Azure Monitor veya                           Google Cloud Logging gibi servisleri kullanarak tüm API çağrılarını, kullanıcı aktivitelerini ve kaynaklar üzerindeki                           değişiklikleri kaydedin.                        </p>                      </div>                    </div>                  </div>                                    <div className="bg-green-900 bg-opacity-20 p-5 rounded-lg border border-green-800">                    <div className="flex items-start">                      <span className="text-green-400 mr-3 mt-1">✅</span>                      <div>                        <h4 className="text-white font-semibold">Çok Faktörlü Kimlik Doğrulama (MFA)</h4>                        <p className="text-gray-300 mt-2">                          Tüm IAM kullanıcıları, özellikle yönetici ayrıcalıklarına sahip olanlar ve root hesabı için MFA'yı zorunlu kılın. MFA, şifre                           bilgileri ele geçirilse bile yetkisiz erişime karşı ek bir güvenlik katmanı sağlar.                        </p>                      </div>                    </div>                  </div>                </div>              </div>            </div>          </div>        </section>                {/* İçerik Bölümü 4: Uygulamalı Rol Denetimi */}        <section className="py-12 bg-gray-800">          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">            <div className="bg-gray-900 rounded-xl p-8 border border-gray-700 shadow-xl mb-10">              <div className="mb-10">                <h2 className="text-2xl font-bold text-blue-400 mb-6">🔹 4. Uygulamalı Rol Denetimi</h2>                <p className="text-gray-300 mb-4">                  <strong>⏱ Süre:</strong> 10 dakika                </p>                                <p className="text-gray-300 mb-6">                  IAM politikalarını ve rollerini doğru anlamak, bulut güvenliğinin temelidir. Bu bölümde, IAM politikalarını okuma ve değerlendirme becerilerinizi geliştireceksiniz.                </p>                                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8">                  <h3 className="mt-4 text-lg font-semibold text-white">Kullanıcı aşağıdaki role sahipse, ne yapabilir?</h3>                  <pre className="bg-slate-800 p-4 text-pink-300 rounded text-sm font-mono mt-4">{`{  "Action": "ec2:TerminateInstances",  "Effect": "Allow",  "Resource": "*"}`}                  </pre>                                    <button                     onClick={() => {                      setShowRoleAlert(true)                      setTimeout(() => setShowRoleAlert(false), 5000)                    }}                    className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded mt-4 text-white"                  >                    Rolü Değerlendir                  </button>                                    {showRoleAlert && (                    <div className="mt-4 bg-yellow-900 bg-opacity-40 p-4 rounded border border-yellow-800 animate-pulse">                      <h5 className="text-white font-medium flex items-center">                        <span className="text-yellow-400 mr-2">⚠️</span>                        Aşırı Geniş Yetki Tespit Edildi                      </h5>                      <p className="text-yellow-200 mt-2">                        Bu politika, kullanıcıya AWS hesabı altındaki <strong>tüm</strong> EC2 örneklerini silme yetkisi verir.                         Resource alanının "*" olması, hesaptaki tüm kaynaklar üzerinde bu yetkinin geçerli olduğunu gösterir.                         Bu, bir kullanıcının hesap içindeki tüm sanal makineleri silmesine olanak tanır.                      </p>                      <div className="mt-3 bg-gray-800 p-3 rounded">                        <h6 className="text-white text-sm font-medium">Düzeltme:</h6>                        <ul className="list-disc ml-5 mt-1 text-gray-300 text-sm">                          <li>Resource alanını belirli EC2 örnekleri ile sınırlandırın</li>                          <li>Koşullu izinler ekleyin (örn. belirli bir etiketle işaretlenmiş EC2'ler)</li>                          <li>En az ayrıcalık prensibini uygulayın</li>                        </ul>                      </div>                    </div>                  )}                </div>                                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">                  <h3 className="text-lg font-semibold text-white mb-4">IAM Politikası Değerlendirme Rehberi:</h3>                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">                    <div className="bg-gray-900 p-5 rounded-lg border border-gray-700">                      <h4 className="text-white font-semibold mb-2">Değerlendirme Soruları:</h4>                      <ul className="list-disc ml-6 text-gray-300 space-y-1">                        <li>Bu politika hangi servislerde etkindir?</li>                        <li>Tüm kaynaklarda mı yoksa belirli kaynaklarda mı geçerli?</li>                        <li>Koşullu sınırlamalar var mı?</li>                        <li>İzin mi yoksa engelleme mi yapıyor?</li>                        <li>Hangi eylemler (actions) izin veriliyor?</li>                      </ul>                    </div>                                        <div className="bg-gray-900 p-5 rounded-lg border border-gray-700">                      <h4 className="text-white font-semibold mb-2">Güvenli Politika İlkeleri:</h4>                      <ul className="list-disc ml-6 text-gray-300 space-y-1">                        <li>Her zaman belirli kaynakları hedefleyin ("*" kullanmayın)</li>                        <li>Gerekli minimum izinleri verin</li>                        <li>İzin yerine açıkça reddetme (Deny) kullanmayı tercih edin</li>                        <li>İhtiyaç duymayan kullanıcılara IAM yönetim yetkisi vermeyin</li>                        <li>Düzenli olarak kullanılmayan izinleri kaldırın</li>                      </ul>                    </div>                  </div>                </div>              </div>            </div>          </div>        </section>                {/* İçerik Bölümü 5: İzleme ve Olay Yanıtı */}        <section className="py-12 bg-gray-800">          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">            <div className="bg-gray-900 rounded-xl p-8 border border-gray-700 shadow-xl mb-10">              <div className="mb-10">                <h2 className="text-2xl font-bold text-blue-400 mb-6">🔹 5. İzleme ve Olay Yanıtı</h2>                <p className="text-gray-300 mb-4">                  <strong>⏱ Süre:</strong> 10 dakika                </p>                                <p className="text-gray-300 mb-6">                  Güvenli bir bulut yapılandırmasına sahip olmak yeterli değildir; bulut ortamınızda meydana gelen olayları sürekli izlemeli                   ve anormal davranışlara hızla yanıt verebilmelisiniz.                </p>                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">                  <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">                    <div className="flex items-center mb-3">                      <span className="text-blue-400 mr-3 text-xl">📈</span>                      <h3 className="text-lg font-semibold text-white">CloudTrail & Logs</h3>                    </div>                    <p className="text-gray-300 mb-4">                      Bulut ortamındaki tüm API çağrılarını ve etkinlikleri kaydeden servisler.                    </p>                    <ul className="space-y-2 text-gray-300 ml-5 list-disc">                      <li>Kim, ne zaman, ne yaptı?</li>                      <li>Root hesap kullanımını izleme</li>                      <li>Güvenlik grubu değişikliklerini takip etme</li>                    </ul>                  </div>                                    <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">                    <div className="flex items-center mb-3">                      <span className="text-blue-400 mr-3 text-xl">🛑</span>                      <h3 className="text-lg font-semibold text-white">Tehdit Tespiti</h3>                    </div>                    <p className="text-gray-300 mb-4">                      Anormal davranışları ve potansiyel tehditleri otomatik olarak tespit eden servisler.                    </p>                    <ul className="space-y-2 text-gray-300 ml-5 list-disc">                      <li>AWS GuardDuty, Azure Security Center</li>                      <li>Şüpheli IP'lerden gelen erişimler</li>                      <li>Anormal API kullanımı tespiti</li>                    </ul>                  </div>                                    <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">                    <div className="flex items-center mb-3">                      <span className="text-blue-400 mr-3 text-xl">⚙️</span>                      <h3 className="text-lg font-semibold text-white">Auto-remediation</h3>                    </div>                    <p className="text-gray-300 mb-4">                      Tespit edilen güvenlik sorunlarına otomatik yanıt veren sistemler.                    </p>                    <ul className="space-y-2 text-gray-300 ml-5 list-disc">                      <li>CloudWatch Events + Lambda fonksiyonları</li>                      <li>Açık S3 bucket'ı otomatik kapatma</li>                      <li>Şüpheli hesapların dondurulması</li>                    </ul>                  </div>                </div>                                <div className="bg-blue-900 bg-opacity-30 p-6 rounded-lg border border-blue-700">                  <h3 className="text-lg font-semibold text-blue-300 mb-4">Bulut Güvenlik Olayı Müdahale Aşamaları:</h3>                                    <ol className="space-y-4 text-gray-300 list-decimal ml-5">                    <li className="pl-2">                      <span className="text-white font-medium">Hazırlık:</span> Doğru izleme araçlarını yapılandırma, alarm eşiklerini belirleme,                      müdahale ekiplerini ve prosedürlerini tanımlama.                    </li>                    <li className="pl-2">                      <span className="text-white font-medium">Tespit & Analiz:</span> Alarmlar ve izleme araçlarıyla anormal aktiviteyi tespit etme,                      olayın kapsamını ve etkisini değerlendirme.                    </li>                    <li className="pl-2">                      <span className="text-white font-medium">Çevreleme:</span> Etkilenen kaynakları izole etme, güvenlik açıklarını kapatma,                      zararlı erişimi sonlandırma (örn. IAM anahtarlarını iptal etme).                    </li>                    <li className="pl-2">                      <span className="text-white font-medium">Ortadan Kaldırma:</span> Tehdit aktörlerini sistemden çıkarma, güvenlik açıklarını kapatma,                      etkilenen sistemleri güvenli bir duruma geri yükleme.                    </li>                    <li className="pl-2">                      <span className="text-white font-medium">Kurtarma:</span> Güvenli yedeklerden sistemleri geri yükleme, normal operasyonlara dönme,                      sıkı izleme ile operasyonların normal olduğunu doğrulama.                    </li>                    <li className="pl-2">                      <span className="text-white font-medium">Öğrenilen Dersler:</span> Olayın kök nedenini analiz etme, tekrarını önlemek için                      yapılandırmaları ve politikaları güncelleme, müdahale süreçlerini iyileştirme.                    </li>                  </ol>                </div>              </div>                            <div>                <h2 className="text-2xl font-bold text-blue-400 mb-6">🧠 Kazanımlar</h2>                <ul className="space-y-4 text-gray-300">                  <li className="flex items-start">                    <span className="text-blue-400 mr-2">•</span>                    <div>                      Paylaşılan sorumluluğun ne anlama geldiğini öğrendin                    </div>                  </li>                  <li className="flex items-start">                    <span className="text-blue-400 mr-2">•</span>                    <div>                      Riskli yapılandırmaları tespit edebiliyorsun                    </div>                  </li>                  <li className="flex items-start">                    <span className="text-blue-400 mr-2">•</span>                    <div>                      IAM ve rol tabanlı erişim kontrolüne hâkimsin                    </div>                  </li>                  <li className="flex items-start">                    <span className="text-blue-400 mr-2">•</span>                    <div>                      Olay yanıtı araçlarını tanıdın                    </div>                  </li>                </ul>              </div>            </div>          </div>        </section>                {/* Diğer Eğitimler */}        <section className="py-12 bg-gray-900">          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">            <h2 className="text-2xl font-bold text-white mb-6">Diğer İleri Seviye Eğitimler</h2>                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">              <Link href="/egitimler/data-leakage" className="block">                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all shadow-lg">                  <h3 className="text-xl font-bold text-white mb-2">🔐 Veri Sızıntısı Önleme (DLP)</h3>                  <p className="text-gray-300 mb-4">Hassas verilerin sızmasını önleme ve olası sızıntılara hızlı müdahale stratejileri</p>                  <div className="flex justify-between items-center">                    <span className="text-sm text-gray-400">60 dakika</span>                    <span className="px-2 py-1 rounded text-xs font-medium bg-red-900 text-red-300">İleri</span>                  </div>                </div>              </Link>                            <Link href="/egitimler/olay-mudahale" className="block">                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all shadow-lg">                  <h3 className="text-xl font-bold text-white mb-2">🚨 Güvenlik Olayları ve Müdahale</h3>                  <p className="text-gray-300 mb-4">Güvenlik ihlallerini tanıma, raporlama ve müdahale prosedürleri</p>                  <div className="flex justify-between items-center">                    <span className="text-sm text-gray-400">65 dakika</span>                    <span className="px-2 py-1 rounded text-xs font-medium bg-red-900 text-red-300">İleri</span>                  </div>                </div>              </Link>                            <Link href="/egitimler/ag-guvenligi" className="block">                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all shadow-lg">                  <h3 className="text-xl font-bold text-white mb-2">🌐 Ağ Güvenliği</h3>                  <p className="text-gray-300 mb-4">Kurumsal ağ güvenliğinin temelleri, ağ saldırıları ve savunma mekanizmaları</p>                  <div className="flex justify-between items-center">                    <span className="text-sm text-gray-400">50 dakika</span>                    <span className="px-2 py-1 rounded text-xs font-medium bg-red-900 text-red-300">İleri</span>                  </div>                </div>              </Link>            </div>          </div>        </section>      </main>      <Footer />    </>  )
} 