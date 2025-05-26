import nodemailer from 'nodemailer'

type EmailPayload = {
  to: string
  subject: string
  html: string
}

// E-posta gönderme işlemi için transporter yapılandırması
const getTransporter = () => {
  // Mail servisi yapılandırması
  return nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: Number(process.env.EMAIL_SERVER_PORT),
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
    secure: Boolean(process.env.EMAIL_SERVER_SECURE) || false,
  })
}

// E-posta gönderme fonksiyonu
export const sendEmail = async (data: EmailPayload) => {
  const transporter = getTransporter()
  
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      ...data,
    })
    
    console.log(`E-posta gönderildi: ${info.messageId}`)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('E-posta gönderme hatası:', error)
    return { success: false, error }
  }
}

// Doğrulama e-postası gönderme
export const sendVerificationEmail = async (email: string, verificationUrl: string, name?: string) => {
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
  })
} 