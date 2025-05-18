'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, Typography, Steps, Button, Alert, Space, Divider, List } from 'antd'

const { Title, Paragraph, Text } = Typography
const { Step } = Steps

export default function PhishingSimulasyonPage() {
  const [currentStep, setCurrentStep] = useState(0)

  const phishingScenarios = [
    {
      id: 'sosyal-medya',
      title: 'Sosyal Medya Girişi',
      path: '/egitimler/phishing-simulasyonu/sosyal-medya'
    },
    {
      id: 'e-posta',
      title: 'E-posta Servisi',
      path: '/egitimler/phishing-simulasyonu/e-posta'
    },
    {
      id: 'banka',
      title: 'Online Bankacılık',
      path: '/egitimler/phishing-simulasyonu/banka'
    },
    {
      id: 'e-ticaret',
      title: 'E-ticaret Platformu',
      path: '/egitimler/phishing-simulasyonu/e-ticaret'
    },
    {
      id: 'quiz',
      title: 'Bilgi Testi',
      path: '/egitimler/phishing-simulasyonu/quiz'
    }
  ]

  const phishingStats = [
    '2023 yılında dünya genelinde 300 milyondan fazla phishing saldırısı gerçekleştirildi.',
    'Kurumsal kullanıcıların %85\'i en az bir kez phishing saldırısına maruz kaldı.',
    'Veri ihlallerinin %36\'sı phishing saldırılarından kaynaklanmaktadır.',
    'Kimlik avı URL\'lerinin %75\'i yasal görünümlü güvenli sertifikalar kullanır.',
    'Phishing saldırıları 2020\'den bu yana %45 artış göstermiştir.'
  ]

  const phishingTips = [
    'E-posta adreslerini dikkatli kontrol edin - domain adı yasal mı?',
    'URL\'leri kontrol edin - bağlantıların nereye gittiğini görmek için üzerlerine gelin',
    'Beklenmedik ekleri açmaktan kaçının',
    'Aciliyet bildiren mesajlara dikkat edin - çoğu phishing saldırısı hızlı tepki vermenizi ister',
    'Şüphelendiğinizde doğrudan resmi web sitesini ziyaret edin'
  ]

  const next = () => {
    setCurrentStep(currentStep + 1)
  }

  const prev = () => {
    setCurrentStep(currentStep - 1)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Alert
          message="Eğitim Amaçlı İçerik"
          description="Bu modül tamamen eğitim ve farkındalık amacıyla hazırlanmıştır. Gerçek hayattaki zararlı phishing sitelerini tanımanıza yardımcı olacak simülasyonlar içerir. Hiçbir kişisel veri toplanmamaktadır."
          type="info"
          showIcon
          banner
        />
        
        <Title level={1}>Phishing Simülasyonu Eğitim Modülü</Title>
        
        <Paragraph>
          Bu eğitim modülü, phishing (oltalama) saldırılarını tanımanıza ve bu tür saldırılardan korunmanıza yardımcı olmak için tasarlanmıştır. 
          Modül boyunca gerçekçi phishing sayfaları görecek, bu sayfalardaki güvenlik zafiyetlerini tespit etmeyi öğrenecek ve kendinizi korumak için en iyi uygulamaları keşfedeceksiniz.
        </Paragraph>
        
        <Alert
          message="Etik Bilgilendirme"
          description="Bu eğitim modülü, etik hackerlik ve bilgi güvenliği farkındalığı kapsamında hazırlanmıştır. Öğrendiğiniz bilgileri yalnızca yasal ve etik sınırlar içerisinde kullanınız."
          type="warning"
          showIcon
        />
        
        {/* Phishing Nedir? Bölümü */}
        <Card title="Phishing (Oltalama) Nedir?" className="mt-8" variant="borderless">
          <Paragraph>
            Phishing, saldırganların kendilerini güvenilir kuruluşlar veya kişiler gibi göstererek hassas bilgilerinizi elde etmeye çalıştığı bir siber saldırı türüdür. Bu bilgiler genellikle:
          </Paragraph>
          
          <List
            bordered
            dataSource={[
              'Kullanıcı adları ve şifreler',
              'Kredi kartı bilgileri',
              'Banka hesap bilgileri',
              'Kişisel tanımlama bilgileri (TC Kimlik No, doğum tarihi vb.)',
              'Şirket veya kurumsal veriler'
            ]}
            renderItem={(item) => (
              <List.Item>
                <Text>{item}</Text>
              </List.Item>
            )}
            className="my-4"
          />
          
          <Paragraph>
            Phishing saldırıları tipik olarak e-posta, SMS mesajları, sosyal medya platformları veya sahte web siteleri aracılığıyla gerçekleştirilir. Saldırganlar genellikle korku, merak veya aciliyet gibi duygusal tepkileri tetikleyerek kurbanların dikkatini dağıtmayı ve mantıklı düşünme yeteneğini azaltmayı hedefler.
          </Paragraph>
        </Card>
        
        {/* Phishing İstatistikleri */}
        <Card title="Güncel Phishing İstatistikleri" className="mt-8" variant="borderless">
          <List
            bordered
            dataSource={phishingStats}
            renderItem={(item) => (
              <List.Item>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
        
        {/* Phishing İpuçları */}
        <Card title="Phishing Saldırılarından Korunma İpuçları" className="mt-8" variant="borderless">
          <List
            bordered
            dataSource={phishingTips}
            renderItem={(item, index) => (
              <List.Item>
                <Text mark={index === 0 || index === 3}>{item}</Text>
              </List.Item>
            )}
          />
        </Card>

        <Divider />
        
        <Title level={2}>Eğitim İçeriği</Title>
        
        <Paragraph>
          Bu eğitim modülünde, çeşitli senaryolarda karşılaşabileceğiniz gerçekçi phishing saldırılarını inceleyeceksiniz. Her bir senaryo, belirli bir platformu hedef alan phishing tekniklerini ve bunları nasıl tespit edebileceğinizi göstermektedir.
        </Paragraph>
        
        <Steps current={currentStep} onChange={setCurrentStep} direction="vertical" className="mt-6">
          {phishingScenarios.map((scenario) => (
            <Step 
              key={scenario.id} 
              title={scenario.title} 
              description={
                scenario.id === 'quiz' 
                  ? "Öğrendiklerinizi test edin" 
                  : "Gerçekçi bir phishing simülasyonu"
              } 
            />
          ))}
        </Steps>
        
        <div className="steps-content mt-6">
          <Card title={phishingScenarios[currentStep].title} variant="outlined">
            <Paragraph>
              {currentStep < 4 
                ? "Bu senaryoda gerçekçi bir phishing sayfası görecek ve güvenlik zafiyetlerini nasıl tespit edeceğinizi öğreneceksiniz."
                : "Öğrendiklerinizi test etmek için kısa bir quiz çözeceksiniz."}
            </Paragraph>
            <div className="mt-4">
              <Link href={phishingScenarios[currentStep].path}>
                <Button type="primary">Başla</Button>
              </Link>
            </div>
          </Card>
        </div>
        
        <div className="steps-action">
          {currentStep > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
              Geri
            </Button>
          )}
          {currentStep < phishingScenarios.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              İleri
            </Button>
          )}
        </div>
      </Space>
    </div>
  )
} 