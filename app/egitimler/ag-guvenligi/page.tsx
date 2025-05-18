'use client'

import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function AgGuvenligi() {
  const [vpnActive, setVpnActive] = useState(false)

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
                <span className="block text-cyan-400">🌐 Ağ Güvenliği Temelleri</span>
              </h1>
              <div className="mt-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-900 text-yellow-300">
                  Orta Seviye
                </span>
                <span className="ml-3 text-gray-300">⏱ Süre: 55 dakika</span>
              </div>
              <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
                Wi-Fi güvenliği, VPN kullanımı ve güvenli uzaktan çalışma hakkında temel eğitim
              </p>
            </div>
          </div>
        </section>

        {/* İçerik Bölümü */}
        <section className="py-12 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-700 shadow-xl">
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6">📶 1. Wi-Fi Güvenliği</h2>
                <p className="text-gray-300 mb-4">
                  <strong>⏱ Süre:</strong> 15 dakika
                </p>
                
                <h3 className="text-xl font-semibold text-white mt-6 mb-4">Tehlikeler:</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">⚠️</span>
                    <div>
                      Ortak ağlarda "man-in-the-middle" saldırıları
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">⚠️</span>
                    <div>
                      Sahte Wi-Fi erişim noktaları (evil twin)
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">⚠️</span>
                    <div>
                      WPA2 şifre kırma saldırıları
                    </div>
                  </li>
                </ul>
                
                <h3 className="text-xl font-semibold text-white mt-6 mb-4">Korunma Yolları:</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✅</span>
                    <div>
                      WPA3 / WPA2-PSK güvenlik protokolü kullan
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✅</span>
                    <div>
                      Wi-Fi şifreni karmaşık yap
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✅</span>
                    <div>
                      Ortak ağlarda "otomatik bağlanma" seçeneğini kapat
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✅</span>
                    <div>
                      MAC filtreleme ve SSID gizleme
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6">🔒 2. VPN Kullanımı</h2>
                <p className="text-gray-300 mb-4">
                  <strong>⏱ Süre:</strong> 15 dakika
                </p>
                
                <h3 className="text-xl font-semibold text-white mt-6 mb-4">VPN Nedir?</h3>
                <p className="text-gray-300 mb-6">
                  Virtual Private Network – trafiğinizi şifreleyerek başka bir sunucu üzerinden iletir.
                </p>
                
                <h3 className="text-xl font-semibold text-white mt-6 mb-4">Neden Kullanmalısın?</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <div>
                      IP adresinizi gizler
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <div>
                      Verilerinizi şifreler
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <div>
                      Ortak ağlarda veri hırsızlığını engeller
                    </div>
                  </li>
                </ul>
                
                <h3 className="text-xl font-semibold text-white mt-6 mb-4">Kullanım Uygulaması:</h3>
                <div className="mt-4 flex justify-center">
                  <button 
                    onClick={() => {
                      setVpnActive(!vpnActive)
                      alert(vpnActive 
                        ? 'VPN bağlantısı kesildi. Artık normal internet bağlantınız üzerinden iletişim kuruyorsunuz.' 
                        : 'VPN aktif edildi. IP adresiniz şifreli bir tünel üzerinden yönlendiriliyor.')
                    }}
                    className={`px-4 py-2 rounded mt-2 font-medium ${
                      vpnActive 
                        ? 'bg-red-600 hover:bg-red-700' 
                        : 'bg-green-600 hover:bg-green-700'
                    }`}
                  >
                    {vpnActive ? 'VPN\'yi Durdur' : 'VPN\'yi Başlat'}
                  </button>
                </div>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6">💼 3. Uzaktan Çalışma Güvenliği</h2>
                <p className="text-gray-300 mb-4">
                  <strong>⏱ Süre:</strong> 15 dakika
                </p>
                
                <h3 className="text-xl font-semibold text-white mt-6 mb-4">Riskler:</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">⚠️</span>
                    <div>
                      Güvenli olmayan cihazlarla bağlantı
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">⚠️</span>
                    <div>
                      Şifrelenmemiş dosya transferi
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">⚠️</span>
                    <div>
                      Sosyal mühendislik saldırılarına açık olma
                    </div>
                  </li>
                </ul>
                
                <h3 className="text-xl font-semibold text-white mt-6 mb-4">Önlemler:</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✅</span>
                    <div>
                      Şirket cihazlarını kullan
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✅</span>
                    <div>
                      Dosyaları şifreli kanallar ile gönder (örneğin: SFTP, Signal, ProtonMail)
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✅</span>
                    <div>
                      Uzak masaüstü oturumlarında 2FA kullan
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6">🔍 4. Uygulamalı Test: Güvenli mi, Değil mi?</h2>
                <p className="text-gray-300 mb-4">
                  <strong>⏱ Süre:</strong> 10 dakika
                </p>
                <p className="text-gray-300 mb-6">
                  Aşağıdaki senaryoları değerlendir:
                </p>
                
                <div className="flex flex-col space-y-4 items-center">
                  <button 
                    onClick={() => alert('⚠️ Ortak Wi-Fi ağına VPN\'siz bağlanmak tehlikelidir.')}
                    className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded mb-2 w-full max-w-md"
                  >
                    Starbucks Wi-Fi + VPN yok
                  </button>
                  
                  <button 
                    onClick={() => alert('✅ Bu güvenli bir bağlantı yöntemidir.')}
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded w-full max-w-md"
                  >
                    Şirket VPN + WPA2 ağı
                  </button>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-6">🧠 Kazanımlar</h2>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <div>
                      Wi-Fi ağlarının nasıl daha güvenli kullanılacağını öğrendin
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <div>
                      VPN kullanım mantığını kavradın
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <div>
                      Uzaktan çalışma sırasında hangi önlemleri almalısın artık biliyorsun
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <div>
                      Gerçek senaryolarla farkındalığını test ettin
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
              <Link href="/egitimler/temel-siber-guvenlik" className="block">
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-2">💻 Siber Güvenlik Temelleri</h3>
                  <p className="text-gray-300 mb-4">Siber güvenliğin temel kavramları, tehdit türleri ve kişisel önlemler</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">45 dakika</span>
                    <span className="px-2 py-1 rounded text-xs font-medium bg-green-900 text-green-300">Temel</span>
                  </div>
                </div>
              </Link>
              
              <Link href="/egitimler/password-checker" className="block">
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-2">🔑 Güçlü Parola Oluşturma</h3>
                  <p className="text-gray-300 mb-4">Güvenli şifre oluşturma, şifre yöneticileri ve çok faktörlü kimlik doğrulama</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">30 dakika</span>
                    <span className="px-2 py-1 rounded text-xs font-medium bg-green-900 text-green-300">Temel</span>
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
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
} 