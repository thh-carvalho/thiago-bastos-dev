import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'tailwindcss/tailwind.css'

import { Hero } from "./hero/hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thiago Bastos",
  description: "Desenvolvedor Front-end & Web Analytics",
  icons: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/layout/favicon/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/static/thiago.png',
    },
    {
      rel: 'shortcut icon',
      url: '/static/thiago.png',
    },
  ],
};

export default function RootLayout({ children, }: { children: React.ReactNode}) {
  return (
    <html lang="pt-br">
      <body className="bg-[url('https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWxmajZoYTBvbmU4c2FneG44Znd1eXI2ZGl6NzgxcXRubDlweDJxcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/U4ExkAvRpVQGB0NMe0/giphy.webp')] bg-no-repeat bg-cover">
        <div className="grid grid-cols-2 max-[990px]:flex max-[990px]:flex-col max-[990px]:justify-start">
          <div>
            <Hero />
          </div>
          <div>
            <main>{children}</main>
          </div>
        </div>
        </body>
    </html>
  )
}