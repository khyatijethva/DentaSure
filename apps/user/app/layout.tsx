import type { Metadata } from "next";
import { dmSans, newsreader } from "@dentasure/ui/fonts";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import "@dentasure/ui/styles/base.css";
import "./globals.css";
import "@dentasure/ui/styles/utilities.css";

export const metadata: Metadata = {
  title: "DentaSure — Patient Portal",
  description: "Your dental health, simplified.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${newsreader.variable}`}>
      <body>
        <div className="main-wrapper">
          <Header />
          <main className="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
