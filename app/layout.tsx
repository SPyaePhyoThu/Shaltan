import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { ShoeProvider } from "./context/shoesContext";
import { CartProvider } from "./context/cartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShalTan",
  description: "ShalTan | shoes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ShoeProvider>
          <CartProvider>{children}</CartProvider>
        </ShoeProvider>
      </body>
    </html>
  );
}

//components
// /home => components/home/index.js
//          components/home/components

// /lib

//app

// /home => app/home/page.js
