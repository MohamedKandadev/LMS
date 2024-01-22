import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"

export const authProviders = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    })
  ],
  secret: process.env.SECRET
}

export default NextAuth(authProviders)