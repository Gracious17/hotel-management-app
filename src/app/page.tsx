import React from "react";
import { SignOut } from "@/components/sign-out";
import Hero from "../components/Hero";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
const page = async () => {
  const session = await auth();
  if (!session) redirect("/sign-in");
  console.log(session);

  return (
    <div>
      <div className="bg-gray-100 rounded-lg p-4 text-center mb-6">
        <p className="text-gray-600">Signed is as:</p>
        <p className="font-medium text-5xl">todo</p>
      </div>
     
      <SignOut /> 
      <Hero/>
    </div>
  );
};

export default page;
