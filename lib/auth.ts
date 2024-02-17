import type { NextAuthOptions  } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions  = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize (credentials, req) {
        if (typeof credentials !== "undefined") {
          console.error(process.env.NEXTAUTH_URL)
          console.error('username', credentials?.username,)
          console.error('userpass', credentials?.password,)

          const res = await fetch(process.env.NEXTAUTH_URL!+'/api/login', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body:JSON.stringify({
              username: credentials?.username,
              password: credentials?.password
            })
          })

          console.warn(res);

          const user = await res.json();

          if (typeof user !== "undefined") {
            return user
          } else {
            return null
          }
        } else {
          return null
        }
      }
    })
  ],
  callbacks: {
    async jwt({token, user}) {
      return {...token, ...user}
    },

    async session({session, token}) {
      session.user = token as any
      return session
    }
  }
}