'use client'

import React from 'react'
import useMeslekiStore from '../store'

const ScenarioCard = ({ category, scenario, scenarioNum, question, description, feedbackPositive, feedbackNegative }) => {
  const store = useMeslekiStore()
  
  // Doğru kategori için cevap durumunu al
  let answer
  if (category === 'iso27001') {
    answer = store.iso27001Answers[scenario]
  } else if (category === 'pciDss') {
    answer = store.pciDssAnswers[scenario]
  } else if (category === 'kvkk') {
    answer = store.kvkkAnswers[scenario]
  }

  return (
    <div className="bg-gray-900 p-5 rounded-lg border border-gray-700 mb-4">
      <h3 className="font-semibold text-white mb-3">Senaryo {scenarioNum}: {question}</h3>
      
      <blockquote className="bg-slate-800 p-4 text-sm text-gray-200 rounded mb-4">
        {description}
      </blockquote>
      
      {!answer.checked ? (
        <div className="flex space-x-4 mt-4">
          <button 
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white"
            onClick={() => store.checkAnswer(category, scenario, 'yes')}
          >
            Uyumlu ✓
          </button>
          <button 
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white"
            onClick={() => store.checkAnswer(category, scenario, 'no')}
          >
            Uyumlu Değil ✗
          </button>
        </div>
      ) : (
        <div className={`mt-4 p-4 rounded ${answer.isCorrect ? 'bg-green-900 bg-opacity-30 border border-green-800' : 'bg-red-900 bg-opacity-30 border border-red-800'}`}>
          <div className="flex items-center">
            <span className={`text-2xl mr-2 ${answer.isCorrect ? 'text-green-400' : 'text-red-400'}`}>
              {answer.isCorrect ? '✓' : '✗'}
            </span>
            <p className="text-white font-medium">
              {answer.isCorrect ? 'Doğru cevap!' : 'Yanlış cevap!'}
            </p>
          </div>
          <p className="text-gray-300 mt-2">
            {answer.isCorrect ? feedbackPositive : feedbackNegative}
          </p>
        </div>
      )}
    </div>
  )
}

export default function Simulation() {
  const { simulationScore, simulationCompleted, resetSimulation } = useMeslekiStore()

  return (
    <div className="space-y-8">
      {/* Puan kartı */}
      <div className="bg-blue-900 bg-opacity-20 p-4 rounded-lg border border-blue-800 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-white font-medium">Simülasyon Puanınız</h3>
            <p className="text-2xl font-bold text-blue-400">{simulationScore} / 100</p>
          </div>
          <button 
            onClick={resetSimulation} 
            className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded text-white text-sm"
          >
            Simülasyonu Sıfırla
          </button>
        </div>
        
        {simulationCompleted && (
          <div className="mt-4 p-4 bg-green-900 bg-opacity-20 rounded border border-green-800">
            <p className="text-white font-medium">
              {simulationScore === 100 
                ? "Tebrikler! Tüm soruları doğru yanıtladınız!" 
                : "Simülasyon tamamlandı. Eksik kalan kısımlar için tekrar deneyebilirsiniz."}
            </p>
          </div>
        )}
      </div>

      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8">
        <h3 className="text-lg font-semibold text-white mb-4">ISO 27001 Uyumluluk Değerlendirmesi</h3>
        
        <div className="space-y-6">
          <ScenarioCard 
            category="iso27001"
            scenario="scenario1"
            scenarioNum="1"
            question="Kurumunuz ISO 27001 belgesine başvuracak. Aşağıdaki politika uyumlu mu?"
            description="Tüm yazılım güncellemeleri, IT departmanı tarafından yayınlandıktan sonra bir yıl içinde uygulanmalıdır."
            feedbackPositive="Bu yanıt doğru değil. ISO 27001 A.12.6.1 kontrol hedefi, teknik açıklıkların zamanında güncellenmesini ve yama yönetimini gerektirir. Kritik güvenlik yamaları için 1 yıl çok uzundur."
            feedbackNegative="Doğru! ISO 27001 A.12.6.1 gerekliliği, zamanında güncelleme ve yama yönetimini gerektirir. Kritik güvenlik yamaları için 1 yıl çok uzundur. Güvenlik yamalarının risk değerlendirmesine göre 30-90 gün içinde uygulanması önerilir."
          />
          
          <ScenarioCard 
            category="iso27001"
            scenario="scenario2"
            scenarioNum="2"
            question="Kurumunuz ISO 27001 belgesine başvuracak. Aşağıdaki uygulama uyumlu mu?"
            description="Varlık envanterimiz her üç yılda bir gözden geçirilir ve güncellenir. Son güncelleme 2021 yılında yapılmıştır."
            feedbackPositive="Bu yanıt doğru değil. ISO 27001 A.8.1.1, varlıkların belirlenmesi ve envanterinin tutulmasını gerektirir. Üç yıl ara ile yapılan gözden geçirme yeterli değildir."
            feedbackNegative="Doğru! ISO 27001 A.8.1.1, varlıkların belirlenmesi ve envanterinin tutulmasını gerektirir. Varlık envanteri, önemli değişiklikler olduğunda ve düzenli olarak (genellikle yılda en az bir kez) gözden geçirilmeli ve güncellenmelidir."
          />
        </div>
      </div>
      
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8">
        <h3 className="text-lg font-semibold text-white mb-4">PCI-DSS Uyumluluk Değerlendirmesi</h3>
        
        <div className="space-y-6">
          <ScenarioCard 
            category="pciDss"
            scenario="scenario1"
            scenarioNum="1"
            question="E-ticaret firmanız PCI-DSS uyumluluğu arıyor. Aşağıdaki durum uyumlu mu?"
            description="Müşteri kredi kartı verilerini şifreliyoruz, ancak şifreleme anahtarlarını uygulamanın çalıştığı aynı sunucuda saklıyoruz."
            feedbackPositive="Bu yanıt doğru değil. PCI-DSS Gereksinim 3.5, şifreleme anahtarlarının korunmasını ve kart verilerinin kendisinden ayrı olarak saklanmasını gerektirir."
            feedbackNegative="Doğru! PCI-DSS Gereksinim 3.5, şifreleme anahtarlarının korunmasını ve kart verilerinin kendisinden ayrı olarak saklanmasını gerektirir. Anahtarları verilerin kendisiyle aynı sunucuda saklamak, tek bir güvenlik ihlalinin hem verilere hem de anahtarlara erişim sağlayabileceği anlamına gelir."
          />
        </div>
      </div>
      
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8">
        <h3 className="text-lg font-semibold text-white mb-4">KVKK Uyumluluk Değerlendirmesi</h3>
        
        <div className="space-y-6">
          <ScenarioCard 
            category="kvkk"
            scenario="scenario1"
            scenarioNum="1"
            question="Şirketiniz müşteri verilerini işliyor. Aşağıdaki durum KVKK'ya uyumlu mu?"
            description="Müşterilerimizin kişisel verilerini pazarlama amaçlı kullanıyoruz. Müşterilerimize kaydolurken bir aydınlatma metni sunuyoruz, ancak açık rıza almıyoruz çünkü web sitemizi kullanan herkes pazarlama iletişimlerini almayı kabul etmiş sayılır."
            feedbackPositive="Bu yanıt doğru değil. KVKK, müşterilerin kişisel verilerinin pazarlama amaçlı kullanımı için açık rıza alınmasını gerektirir."
            feedbackNegative="Doğru! KVKK, müşterilerin kişisel verilerinin pazarlama amaçlı kullanımı için açık rıza alınmasını gerektirir. Sadece aydınlatma metni sunmak yeterli değildir, ve 'web sitesini kullanmak açık rıza sayılır' varsayımı geçerli değildir."
          />
        </div>
      </div>
      
      {/* Sertifika */}
      {simulationScore >= 75 && (
        <div className="mt-8 bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-lg border border-blue-600 text-center">
          <h3 className="text-xl font-bold text-white mb-2">🏆 Tebrikler!</h3>
          <p className="text-blue-200 mb-4">
            Mesleki Siber Güvenlik Simülasyonunu başarıyla tamamladınız!
          </p>
          <div className="py-4 border-t border-b border-blue-700 mb-4">
            <p className="text-white text-2xl font-bold">{simulationScore}% Başarı</p>
          </div>
          <p className="text-blue-200 text-sm">
            Bu simülasyon, siber güvenlik standartları ve düzenlemeleri konusundaki bilginizi test etti.
            Öğrenmeye devam edin ve güvenlik uygulamalarınızı geliştirin!
          </p>
        </div>
      )}
    </div>
  )
} 