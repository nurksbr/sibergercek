'use client'

import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { Simulation } from './components'

export default function MeslekiSiberGuvenlik() {
  // Simülasyon için state tanımlamaları
  const [showFinanceAnswer, setShowFinanceAnswer] = useState(false)
  const [securityStandardAnswer, setSecurityStandardAnswer] = useState(false)
  
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
                <span className="block text-blue-400">🛡️ Mesleki Siber Güvenlik Uygulamaları</span>
                <span className="block">(Professional Cybersecurity Practices)</span>
              </h1>
              <div className="mt-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-900 text-red-300">
                  İleri Seviye
                </span>
                <span className="ml-3 text-gray-300">⏱ Süre: 70 dakika</span>
              </div>
              <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
                Farklı sektörlerdeki siber güvenlik ihtiyaçlarını, standartlara uyum yöntemlerini ve en iyi uygulamaları öğrenin
              </p>
            </div>
          </div>
        </section>

        {/* İçerik Bölümü 1: Sektörel Farklılıklar */}
        <section className="py-12 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-700 shadow-xl mb-10">
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-blue-400 mb-6">🔹 1. Sektörel Farklılıklar Nelerdir?</h2>
                <p className="text-gray-300 mb-4">
                  <strong>⏱ Süre:</strong> 10 dakika
                </p>
                
                <p className="text-gray-300 mb-6">
                  Siber güvenlik ihtiyaçları sektörden sektöre önemli ölçüde farklılık gösterir. Her sektörün kendine özgü risk profilleri, 
                  düzenleyici zorunlulukları ve koruma altına alınması gereken kritik varlıkları vardır. Bu bölümde, farklı sektörlerdeki
                  siber güvenlik gereksinimlerini ve önemli güvenlik önlemlerini inceleyeceğiz.
                </p>
                
                <div className="overflow-x-auto mb-8">
                  <table className="min-w-full bg-gray-800 border border-gray-700 rounded-lg">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="py-4 px-6 bg-gray-800 text-left text-xs font-medium text-blue-400 uppercase tracking-wider">Sektör</th>
                        <th className="py-4 px-6 bg-gray-800 text-left text-xs font-medium text-blue-400 uppercase tracking-wider">Kritik Güvenlik İhtiyacı</th>
                        <th className="py-4 px-6 bg-gray-800 text-left text-xs font-medium text-blue-400 uppercase tracking-wider">Düzenlemeler</th>
                        <th className="py-4 px-6 bg-gray-800 text-left text-xs font-medium text-blue-400 uppercase tracking-wider">Kritik Koruma Noktaları</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      <tr>
                        <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-white">
                          <span className="text-blue-300 mr-2">💳</span> Finans Sektörü
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-300">PCI-DSS, şifreleme, iz kayıtları</td>
                        <td className="py-4 px-6 text-sm text-gray-300">PCI-DSS, BDDK, Basel</td>
                        <td className="py-4 px-6 text-sm text-gray-300">
                          <ul className="list-disc list-inside">
                            <li>Ödeme sistemleri</li>
                            <li>Müşteri finansal verileri</li>
                            <li>İşlem kayıtları</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-white">
                          <span className="text-blue-300 mr-2">🏥</span> Sağlık Sektörü
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-300">HIPAA, hasta verisi gizliliği</td>
                        <td className="py-4 px-6 text-sm text-gray-300">HIPAA, KVKK</td>
                        <td className="py-4 px-6 text-sm text-gray-300">
                          <ul className="list-disc list-inside">
                            <li>Hasta kayıtları</li>
                            <li>Tıbbi cihazlar</li>
                            <li>İlaç sistemleri</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-white">
                          <span className="text-blue-300 mr-2">🏭</span> Endüstri
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-300">OT (Operational Tech), SCADA güvenliği</td>
                        <td className="py-4 px-6 text-sm text-gray-300">IEC 62443, NERC CIP</td>
                        <td className="py-4 px-6 text-sm text-gray-300">
                          <ul className="list-disc list-inside">
                            <li>Üretim sistemleri</li>
                            <li>Endüstriyel kontrol sistemleri</li>
                            <li>Tedarik zinciri</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-white">
                          <span className="text-blue-300 mr-2">🧑‍💼</span> Genel Kurumsal
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-300">Erişim kontrolü, IAM, DLP</td>
                        <td className="py-4 px-6 text-sm text-gray-300">ISO 27001, KVKK</td>
                        <td className="py-4 px-6 text-sm text-gray-300">
                          <ul className="list-disc list-inside">
                            <li>Fikri mülkiyet</li>
                            <li>Müşteri verileri</li>
                            <li>İş sürekliliği</li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="space-y-8">
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h3 className="text-lg font-semibold text-white mb-4">Finans Sektörü Güvenlik Gereksinimleri</h3>
                    
                    <div className="bg-gray-900 p-5 rounded-lg border border-gray-700">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-blue-300 font-medium mb-2">PCI-DSS Uyumluluğu</h4>
                          <p className="text-gray-300 text-sm">
                            Ödeme Kartı Endüstrisi Veri Güvenliği Standardı (PCI-DSS), kredi kartı verilerini işleyen tüm kuruluşlar için zorunludur
                            ve aşağıdaki kritik kontrolleri gerektirir:
                          </p>
                          <ul className="list-disc ml-6 text-gray-300 text-sm mt-2 space-y-1">
                            <li>Güvenli bir ağ altyapısı kurma ve sürdürme</li>
                            <li>Kart sahiplerinin verilerini koruma</li>
                            <li>Güvenlik açıklarını düzenli olarak tarama ve test etme</li>
                            <li>Sağlam bir bilgi güvenliği politikası sürdürme</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-blue-300 font-medium mb-2">Güçlü Kayıt Tutma ve Şifreleme</h4>
                          <p className="text-gray-300 text-sm">
                            Finans sektöründe tüm işlemlerin denetlenebilirliği ve verilerin gizliliği için:
                          </p>
                          <ul className="list-disc ml-6 text-gray-300 text-sm mt-2 space-y-1">
                            <li>Tüm sistem ve kullanıcı faaliyetlerini kaydeden merkezi bir günlük yönetimi</li>
                            <li>Hassas verilerin hem durağan hem de aktarım halindeyken şifrelenmesi</li>
                            <li>Çoklu faktörlü kimlik doğrulama (MFA) uygulanması</li>
                            <li>Finansal sistemler için penetrasyon testleri ve güvenlik zafiyeti taramaları</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* İçerik Bölümü 5: Simülasyon: Uyumlu mu Değil mi? */}
        <section className="py-12 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-700 shadow-xl mb-10">
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-blue-400 mb-6">🔹 5. Simülasyon: Uyumlu mu Değil mi?</h2>
                <p className="text-gray-300 mb-4">
                  <strong>⏱ Süre:</strong> 15 dakika
                </p>
                
                <p className="text-gray-300 mb-6">
                  Güvenlik standartlarına ve düzenlemelere uyum, kurumsal siber güvenliğin önemli bir parçasıdır. Bu bölümde,
                  gerçek dünya senaryoları üzerinden uyumluluk değerlendirmeleri yapacağız ve yaygın uyumluluk hatalarını inceleyeceğiz.
                </p>
                
                <Simulation />
                
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
} 