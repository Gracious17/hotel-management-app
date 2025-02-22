// next-auth.d.ts
import { User as NextAuthUser } from "next-auth";

declare module "next-auth" {
  interface User {
    email: string;
    token: string;
  }

  interface Session {
    user: NextAuthUser & {
      email: string;
      token: string;
    };
  }
}
