import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

import { api } from '../../../services/api';

interface SignInRequestProps {
  user?: {
    name: string;
    email: string;
    id: string;
  };
  token?: string;
  message?: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'credentials',
      authorize: async (credentials: SignInCredentials) => {
        try {
          const response = await api.post<SignInRequestProps>(
            '/session',
            {
              email: credentials.email,
              password: credentials.password,
            },
            {
              headers: { 'Content-Type': 'application/json' },
            }
          );

          if (response.data.message) {
            return null;
          }

          return {
            email: response.data.user.email,
            name: response.data.user.name,
            token: response.data.token,
            id: response.data.user.id
          };
        } catch (e) {
          if (e.response.data.message) {
            throw new Error(e.response.data.message);
          }
          throw new Error('Ocorreu um erro no servidor');
        }
      },
    }),
  ],
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.accessToken = user.token;
        token.id = user.id;
      }

      return token;
    },
    async session(session, token) {
      session.accessToken = token.accessToken;
      session.id = token.id;

      return session;
    },
  },
  pages: {
    error: '/login',
  },
});
