import type { Metadata } from "next";
import "./globals.css";
import { Lily_Script_One } from "next/font/google";

const lilyScript = Lily_Script_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lily",
});

export const metadata: Metadata = {
  title: "Blog Post App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lilyScript.variable}>{children}</body>
    </html>
  );
}
