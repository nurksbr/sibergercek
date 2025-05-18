import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function SosyalMedyaGuvenligiPage() {
  return (
    <>
      <Navbar />
      
      <main className="bg-gray-900 min-h-screen text-white">
        {/* Hero Section */}
        <section className="relative py-16 bg-gray-900">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute -top-1/4 -right-1/4 h-96 w-96 rounded-full bg-cyan-600 blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                Temel Seviye
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block">Sosyal Medya Güvenliği</span>
              </h1>
              <div className="mt-4 flex justify-center items-center text-cyan-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>35 dakika</span>
              </div>
              <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
                Sosyal medya platformlarında güvenliğiniz için almanız gereken önlemleri öğrenin.
              </p>
            </div>
          </div>
        </section>

        {/* Eğitim İçeriği */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-white">Eğitim İçeriği</h2>
              
              {/* Bölüm 1 */}
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-900 flex items-center justify-center text-cyan-300 mr-4">
                    <span className="font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Giriş: Sosyal Medya Neden Tehlikeli Olabilir?</h3>
                </div>
                
                <div className="ml-14 text-gray-300">
                  <p className="mb-2">Sosyal medya platformları hayatımızın vazgeçilmez bir parçası haline geldi. Ancak aşağıdaki riskler kullanıcıları tehdit ediyor:</p>
                  
                  <ul className="list-disc ml-6 space-y-2 mt-4">
                    <li><strong>Kişisel verilerin yayılması</strong> - Paylaştığınız her bilgi kötü niyetli kişilerce izlenebilir ve depolanabilir.</li>
                    <li><strong>Kimlik hırsızlığı ve dolandırıcılık</strong> - Paylaştığınız bilgiler üzerinden kimliğiniz çalınabilir veya dolandırıcılık amaçlı kullanılabilir.</li>
                    <li><strong>Sosyal mühendislik saldırıları</strong> - Kişisel bilgileriniz, alışkanlıklarınız ve ilişkileriniz sosyal mühendislik saldırıları için kullanılabilir.</li>
                  </ul>
                </div>
              </div>
              
              {/* Bölüm 2 */}
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-900 flex items-center justify-center text-cyan-300 mr-4">
                    <span className="font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Hesap Güvenliği Ayarları</h3>
                </div>
                
                <div className="ml-14 text-gray-300">
                  <p className="mb-2">Hesabınızı korumak için alınabilecek temel önlemler:</p>
                  
                  <ul className="list-disc ml-6 space-y-2 mt-4">
                    <li><strong>İki faktörlü kimlik doğrulama (2FA)</strong> - Hesabınıza giriş yaparken telefon veya e-posta üzerinden ikinci bir doğrulama adımı ekleyin.</li>
                    <li><strong>Güçlü ve benzersiz şifre kullanımı</strong> - Her platform için karmaşık ve farklı şifreler kullanın.</li>
                    <li><strong>Şifre yöneticilerinin kullanımı</strong> - Güvenli şifreleri hatırlamak için şifre yöneticisi uygulamaları kullanın.</li>
                  </ul>
                </div>
              </div>
              
              {/* Bölüm 3 */}
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-900 flex items-center justify-center text-cyan-300 mr-4">
                    <span className="font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Gizlilik Ayarları</h3>
                </div>
                
                <div className="ml-14 text-gray-300">
                  <p className="mb-2">Kişisel bilgilerinizin kontrolünü elinizde tutmak için:</p>
                  
                  <ul className="list-disc ml-6 space-y-2 mt-4">
                    <li><strong>Profil görünürlüğünü yönetme</strong> - Profilinizin kimlere görüneceğini sınırlayın.</li>
                    <li><strong>Paylaşımların hedef kitlesini sınırlandırma</strong> - Her paylaşımın kime görüneceğini kontrol edin.</li>
                    <li><strong>Eski gönderileri gözden geçirme</strong> - Geçmiş paylaşımlarınızı düzenli olarak gözden geçirip gerekirse silin veya gizleyin.</li>
                  </ul>
                </div>
              </div>
              
              {/* Bölüm 4 */}
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-900 flex items-center justify-center text-cyan-300 mr-4">
                    <span className="font-bold">4</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Güvenli Paylaşım Prensipleri</h3>
                </div>
                
                <div className="ml-14 text-gray-300">
                  <p className="mb-2">Paylaşımlarınızın güvenliği için dikkat edilmesi gerekenler:</p>
                  
                  <ul className="list-disc ml-6 space-y-2 mt-4">
                    <li><strong>Lokasyon bilgisini paylaşmamak</strong> - Gerçek zamanlı konum bilgilerinizi paylaşmaktan kaçının.</li>
                    <li><strong>Hassas belgeleri veya kimlik bilgilerini yayınlamamak</strong> - Kimlik, pasaport, ehliyet gibi belgelerinizi asla paylaşmayın.</li>
                    <li><strong>Tanımadığınız kişilerle bağlantı kurarken dikkatli olmak</strong> - Tanımadığınız kişilerin arkadaşlık isteklerini kabul ederken temkinli olun.</li>
                  </ul>
                </div>
              </div>
              
              {/* Bölüm 5 */}
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-900 flex items-center justify-center text-cyan-300 mr-4">
                    <span className="font-bold">5</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Yaygın Tehditler</h3>
                </div>
                
                <div className="ml-14 text-gray-300">
                  <p className="mb-2">Sosyal medyada karşılaşabileceğiniz sık görülen tehditler:</p>
                  
                  <ul className="list-disc ml-6 space-y-2 mt-4">
                    <li><strong>Phishing (oltalama) mesajları</strong> - Sahte mesajlar veya linkler aracılığıyla bilgilerinizin çalınmasına yönelik girişimler.</li>
                    <li><strong>Sahte profiller</strong> - Tanıdığınız kişilerin taklit edildiği veya tamamen uydurma profiller.</li>
                    <li><strong>Zararlı bağlantılar ve içerikler</strong> - Tıklandığında zararlı yazılım indiren veya kişisel bilgilerinizi çalan bağlantılar.</li>
                  </ul>
                </div>
              </div>
              
              {/* Bölüm 6 */}
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-900 flex items-center justify-center text-cyan-300 mr-4">
                    <span className="font-bold">6</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Güvenlik Farkındalığı ve İpuçları</h3>
                </div>
                
                <div className="ml-14 text-gray-300">
                  <p className="mb-2">Kendinizi korumak için bilmeniz gerekenler:</p>
                  
                  <ul className="list-disc ml-6 space-y-2 mt-4">
                    <li><strong>Şüpheli hareketleri nasıl fark edersiniz?</strong> - Olağandışı mesajlar, beklenmedik oturum açma bildirimleri ve şüpheli arkadaşlık isteklerine dikkat edin.</li>
                    <li><strong>Hesabınız çalınırsa ne yapmalısınız?</strong> - Hemen platform destek ekibiyle iletişime geçin, şifrenizi değiştirin ve arkadaşlarınızı bilgilendirin.</li>
                    <li><strong>Güvenlik alışkanlıklarını günlük yaşama entegre etmek</strong> - Düzenli olarak şifrelerinizi değiştirme, hesap etkinliğinizi kontrol etme ve gizlilik ayarlarınızı gözden geçirme.</li>
                  </ul>
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