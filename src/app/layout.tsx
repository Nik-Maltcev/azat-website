import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARD-AGRO — Запчасти для импортной с/х техники",
  description:
    "Карданные валы, крестовины, вилки и защитные кожухи для импортной сельхозтехники. Склад в РФ, отгрузка в день заказа.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
