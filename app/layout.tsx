import type { Metadata } from "next";
import "./globals.css";
import {JetBrains_Mono} from "next/font/google";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

 const jetBrainMono = JetBrains_Mono({
  subsets:["latin"],
  weight:["100","200","300","400","500","600","700","800"],
  variable:'--font-jetbraineMono'
});

export const metadata: Metadata = {
  title: "Achraf Elkalchy portfolio",
  description: "Welcome",
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
