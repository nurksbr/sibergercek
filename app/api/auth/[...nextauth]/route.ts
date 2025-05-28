import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcrypt';

// NextAuth yapılandırması - en basit hali
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Şifre", type: "password" }
      },
      // @ts-ignore - type hatalarını şimdilik görmezden gelelim
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const user = await prisma.user.findUnique({
            where: { email: credentials.email }
          });

          if (!user || !user.password) {
            return null;
          }

          const isValid = await bcrypt.compare(credentials.password, user.password);
          
          if (!isValid) {
            return null;
          }

          return {
            id: user.id,
            name: user.name || '',
            email: user.email
          };
        } catch (error) {
          console.error("Giriş hatası:", error);
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: '/giris',
    error: '/giris'
  },
  session: { 
    strategy: 'jwt'
  }
});

export { handler as GET, handler as POST };