import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import Header from "@/components/Header";
import CartProvider from "@/context/CartContext";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MKS Sistemas | Loja",
  description: "Loja virtual da MKS Sistemas, aqui você encontra de tudo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <StyledComponentsRegistry>
          <CartProvider>
            <Header />
            {children}
            <Footer />
          </CartProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
