import React from "react";
import { SignOut } from "@/components/sign-out";
import Hero from "../components/Hero";
// import { auth } from "@/lib/auth";
// import { redirect } from "next/navigation";
const page = async () => {
  // const session = await auth();
  // if (!session) redirect("/sign-in");
  // console.log(session);

  return (
    <div>
      {/* <div className="bg-gray-100 rounded-lg p-4 text-center mb-6">
        <p className="text-gray-600">Signed is as:</p>
        <p className="font-medium text-5xl">todo</p>
      </div>
      {/* <Image src="https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XPWHWaj4B4p8TbgAL1Yfi77VdykK1Q-zuVwO-AmQklrim~EXoFBGikNwMHaS0Yi2wdmsGPh-SbImz4KD9HdvllNmaOD0X2B2ub2lrlgZ7d7qCJK6Udf~JuU5ZDqtITiHc5SKdjvOUewiaCHxPRBfXhJ0FcXQzVE5cHM2hYrrzDW3391N-GnYMEBcDh3S69JmVvyI0yhMOFyXYcZH74zm63EuIC3HLhNEOhvvL7pS62hlCnR3JUizQZWYI2jhqID057EN922rOz8hcIc78TfcGimeNH1amn4LWwDvRhVv-Iz2au-9MzWvYEAHauZRSamTO8OG~hQMdtfJaEemXuyT7g" /> */}
      <SignOut /> 
      <Hero/>
    </div>
  );
};

export default page;
