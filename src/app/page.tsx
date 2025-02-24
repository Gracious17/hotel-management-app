import React from "react";
import Hero from "../components/Hero";
import CustomerCareExpLay from "@/components/customerExp/CustomerExpLay";
import { ResponsiveCarousel } from "@/components/ResponsiveCarousel";
import { BrowsePropertyCards } from "@/components/browseProperty/BrowsePropertyCards";
// import { auth } from "@/lib/auth";
// import { redirect } from "next/navigation";
const page = async () => {
  // const session = await auth();
  // if (!session) redirect("/sign-in");
  // console.log(session);

  return (
    <div>
      <Hero />
      <CustomerCareExpLay />
      <ResponsiveCarousel />
      <BrowsePropertyCards />
    </div>
  );
};

export default page;
