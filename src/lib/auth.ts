import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
export const { auth, handlers, signIn } = NextAuth({
  providers: [
    GitHub,
    Credentials({
      credentials: {
        email: {},
        // firstName: { label: "First Name", type: "text", required: true },
        // lastName: { label: "Last Name", type: "text", required: true },
        password: {},
        // is_publisher: { label: "Are you a publisher", type: "boolean" },
      },

      authorize: async (credentials) => {
        const email = "king@gmail.com";
        const password = "123";
        if (credentials.email === email && credentials.password === password) {
          return { email, password };
        } else {
          throw new Error("Invalid credentials.");
        }
      },
    }),
  ],
});

// import NextAuth from "next-auth";
// import Credentials from "next-auth/providers/credentials";
// import GitHub from "next-auth/providers/github";
// import axios, { AxiosError } from "axios";
// import { User } from "next-auth";
// export const auth = NextAuth({
//   providers: [
//     GitHub,
//     Credentials({
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },

//       async authorize(credentials) {
//         try {
//           const response = await axios.post(
//             "https://artistic-insights-alley-api.onrender.com/api/user/login",
//             {
//               email: credentials?.email,
//               password: credentials?.password,
//             }
//           );

//           if (response.data.token) {
//             // Attach the token to the user object
//             return { email: credentials?.email, token: response.data.token };
//           }

//           throw new Error("Invalid credentials.");
//         } catch (error: unknown) {
//           if (error instanceof AxiosError)
//             throw new Error(
//               error.response?.data?.message || "Failed to authenticate."
//             );
//         }
//       },
//     }),
//   ],

//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.email = user.email;
//         token.token = user.token; // Add the token to the JWT token object
//       }
//       return token;
//     },

//     async session({ session, token }) {
//       if (session.user) {
//         session.user.email = token.email as string;
//         session.user.token = token.token as string; // Add the token to the session object
//       }
//       return session;
//     },
//   },
// });
