import { Header } from "@/components/layouts/Header";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../styles/globals.scss";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital Booster",
  description:
    "Le programme Digital Booster d’Expansion est l’atout digital des petites, moyennes et grandes entreprises qui souhaitent développer ou confirmer leur présence en ligne.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
