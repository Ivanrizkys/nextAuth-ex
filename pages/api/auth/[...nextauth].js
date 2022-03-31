import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId:
        "1033745303049-ed3mol08q94a2qi8smpt18vhohp462ck.apps.googleusercontent.com",
      clientSecret: "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",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  jwt: {

  },
  callbacks: {
    // async signIn(params) {

    // },
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      // console.log(ctx)
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },
  },
});
