import React from "react";

import { auth } from "@/lib/auth";

import { signIn } from "@/lib/auth";
import { GithubSignIn } from "@/components/github-sign-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { executeAction } from "@/lib/executeAction";
import Link from "next/link";
import { redirect } from "next/navigation";
const page = async () => {
  // redirect to homePage If session
  //   here:

  const session = await auth();
  if (session) redirect("/");
  return (
    <div className="w-full max-w-sm mx-auto space-x-6 ">
      <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>
      {/* github sign-in component */}
      <GithubSignIn />
      <div className="relative">
        <div className="absolute inset-0 flex items-center ">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-background px-2 text-muted-foreground">
            or continue with email
          </span>
        </div>
      </div>
      {/* Email/Password Sign In */}
      <form
        className="space-y-4"
        action={async (formData) => {
          "use server";
          await executeAction({
            actionFn: async () => {
              await signIn("credentials", formData);
            },
          });
        }}
      >
        <Input
          type="email"
          name="email"
          placeholder="email"
          required
          autoComplete="email"
          className="outline-none"
        />
        <Input
          type="password"
          name="password"
          placeholder="password"
          required
          autoComplete="current-password"
          className="outline-none"
        />
        <Button className="w-full" type="submit">
          Sign In
        </Button>
      </form>
      <div className="text-center">
        <Button asChild variant="link">
          <Link href="/sign-up"> Don&apos;t have an account? Sign Up </Link>
        </Button>
      </div>
    </div>
  );
};

export default page;
