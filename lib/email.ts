import nodemailer from 'nodemailer'

type EmailPayload = {
  to: string
  subject: string
  html: string
}

// E-posta gönderme işlemi için transporter yapılandırması
const getTransporter = () => {
  console.log('Transporter oluşturuluyor, ayarlar:', {
    host: process.env.EMAIL_SERVER_HOST,
    port: Number(process.env.EMAIL_SERVER_PORT),
    secure: Boolean(process.env.EMAIL_SERVER_SECURE) || false,
    auth: {
      user: process.env.EMAIL_SERVER_USER ? '***' : 'eksik',
      pass: process.env.EMAIL_SERVER_PASSWORD ? '***' : 'eksik',
    }
  });

  if (!process.env.EMAIL_SERVER_HOST || !process.env.EMAIL_SERVER_USER || !process.env.EMAIL_SERVER_PASSWORD) {
    throw new Error('E-posta ayarları eksik. .env dosyasında EMAIL_SERVER_HOST, EMAIL_SERVER_USER ve EMAIL_SERVER_PASSWORD ayarlarını kontrol edin.');
  }

  // Mail servisi yapılandırması
  return nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: Number(process.env.EMAIL_SERVER_PORT) || 587,
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
    secure: Boolean(process.env.EMAIL_SERVER_SECURE) || false,
  });
}

// E-posta gönderme fonksiyonu
export const sendEmail = async (data: EmailPayload) => {
  try {
    // E-posta ayarlarını kontrol et
    if (!process.env.EMAIL_FROM) {
      console.error('EMAIL_FROM ayarı eksik');
      return { success: false, error: 'EMAIL_FROM ayarı eksik' };
    }

    // Transporter oluştur
    const transporter = getTransporter();
    
    console.log('E-posta gönderiliyor:', {
      to: data.to,
      subject: data.subject,
      from: process.env.EMAIL_FROM
    });
    
    // E-postayı gönder
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      ...data,
    });
    
    console.log(`E-posta gönderildi: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('E-posta gönderme hatası:', error);
    if (error instanceof Error) {
      console.error('Hata mesajı:', error.message);
      console.error('Hata stack:', error.stack);
    }
    return { success: false, error };
  }
}

// Doğrulama e-postası gönderme
export const sendVerificationEmail = async (email: string, verificationUrl: string, name?: string) => {
  console.log('Doğrulama e-postası gönderiliyor:', email, verificationUrl);
  
  // Test modu kontrolü
  const isTestMode = !process.env.EMAIL_SERVER_HOST || !process.env.EMAIL_SERVER_USER;
  if (isTestMode) {
    console.log('TEST MODU: E-posta ayarları eksik, sadece loglama yapılıyor.');
    console.log('Doğrulama URL:', verificationUrl);
    return { success: true, messageId: 'test-mode-no-email-sent' };
  }
  
  const emailContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
      <h2 style="color: #333; text-align: center;">E-posta Adresinizi Doğrulayın</h2>
      <p>Merhaba ${name || 'Değerli Kullanıcı'},</p>
      <p>CYBERLY'ye kayıt olduğunuz için teşekkür ederiz. Hesabınızı etkinleştirmek için lütfen aşağıdaki bağlantıya tıklayın:</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="${verificationUrl}" style="background-color: #4CAF50; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">E-posta Adresimi Doğrula</a>
      </div>
      <p>Bu bağlantı 24 saat boyunca geçerli olacaktır.</p>
      <p>Eğer bu işlemi siz yapmadıysanız, lütfen bu e-postayı dikkate almayın veya bize bildirin.</p>
      <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; color: #666; font-size: 12px;">
        <p>CYBERLY Siber Güvenlik Platformu</p>
      </div>
    </div>
  `
  
  return await sendEmail({
    to: email,
    subject: 'CYBERLY - E-posta Adresinizi Doğrulayın',
    html: emailContent
  });
} 