import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {JetBrains_Mono} from "next/font/google";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  weight: "100 900",
});
 const jetBrainMono = JetBrains_Mono({
  subsets:["latin"],
  weight:["100","200","300","400","500","600","700","800"],
  variable:'--font-jetbraineMono'
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainMono.variable} ${jetBrainMono.variable} antialiased`}
      >
      <Header/>
      <StairTransition/>
      <PageTransition>
          {children}
      </PageTransition>

      </body>
    </html>
  );
}
