import type { Metadata } from "next";
import { dmSans } from "@dentasure/ui/fonts";
import "@dentasure/ui/styles/base.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "DentaSure — Admin Dashboard",
  description: "Manage patients, appointments, and clinic operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body>{children}</body>
    </html>
  );
}
