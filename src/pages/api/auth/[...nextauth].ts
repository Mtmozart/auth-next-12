import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',

      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'matheusMozart',
        },
        password: { label: 'Senha', type: 'password' },
      },
      async authorize(credentials, req) {
        const res = await fetch('/your/endpoint', {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' },
        });
        const user = await res.json();

        if (res.ok && user) {
          return user;
        }

        return null;
      },
    }),
  ],
});
