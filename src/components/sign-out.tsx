"use client";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

const SignOut = () => {
  const handleSignOut = async () => {
    await signOut();
  };
  return (
    <div>
      <Button variant="destructive" onClick={handleSignOut}>
        signOut
      </Button>
    </div>
  );
};
export { SignOut };
