import type { Metadata } from "next";
import {Poppins} from "next/font/google";
import "./globals.css";


const popinsFont = Poppins({weight: ['400', '600', '700'], subsets: ['latin']})

export const metadata: Metadata = {
  title: "Sitio Web de Banco Virtual",
  description: "Realiza tus operaciones aquí",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={popinsFont.className}
      >
        {children}
      </body>
    </html>
  );
}
