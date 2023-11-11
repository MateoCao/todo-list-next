import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { connectDB } from '@/libs/mongodb'
import { User } from '@/models/userSchema'
import bcrypt from 'bcryptjs'
import { cookies } from 'next/headers'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'example@asd.com' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize (credentials, req) {
        await connectDB()
        const userFound = await User.findOne({ email: credentials?.email }).select('+password')
        if (!userFound) throw new Error('Invalid credentials')
        const passwordMatched = await bcrypt.compare(credentials?.password, userFound.password)
        if (!passwordMatched) throw new Error('Invalid credentials')
        cookies().set('userId', userFound._id)

        return userFound
      }
    })
  ],
  callbacks: {
    jwt ({ token, user }) {
      if (user) token.user = user
      return token
    },
    session ({ session, token }) {
      session.user = token.user
      return session
    }
  }

}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
