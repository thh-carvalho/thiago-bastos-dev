import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'tailwindcss/tailwind.css'
import Head from "next/head";
import { GoogleTagManager } from '@next/third-parties/google'

import { Hero } from "./hero/hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thiago Bastos Dev | MKT",
  description: "Desenvolvedor Front-end & Web Analytics",
  generator: 'Next.js',
  applicationName: 'thiago-bastos-dev',
  referrer: 'origin-when-cross-origin',
  keywords: ['Front-end', 'React', 'JavaScript',
    'Next.js', 'Angular','WordPress', 'Strapi', 
    'Marketing', 'Analytics','Teste AB', 'CRO', 
    'Web Analytics', 'Google'],
  authors: [{ name: 'Bastos' }, { name: 'Thiago', url: 'https://thh-carvalho.github.io/thiago-bastos-dev/' }],
  creator: 'Thiago Bastos',
  publisher: 'Thiago Bastos',
  metadataBase: new URL('https://thh-carvalho.github.io/thiago-bastos-dev/'),
  alternates: {
    canonical: 'https://thh-carvalho.github.io/thiago-bastos-dev/',
    languages: {
      'pt-BR': '/pt-BR',
    },
  },
  openGraph: {
    images: '/og-image.png',
    title: "Thiago Bastos Dev | MKT",
    description: "Desenvolvedor Front-end & Web Analytics",
    type: 'website',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['my-email', 'my-link'],
    },
  },
  itunes: {
    appId: 'myAppStoreID',
    appArgument: 'myAppArgument',
  },
  appleWebApp: {
    title: 'Apple Web App',
    statusBarStyle: 'black-translucent',
    startupImage: [
      '/assets/startup/apple-touch-startup-image-768x1004.png',
      {
        url: '/assets/startup/apple-touch-startup-image-1536x2008.png',
        media: '(device-width: 768px) and (device-height: 1024px)',
      },
    ],
  },
  category: 'tecnologia',
  icons: {
    icon: [
      { url: '/favicon/thiago.png' },
      new URL('/favicon/thiago.png', 'https://thh-carvalho.github.io/thiago-bastos-dev/'),
      { url: '/icon-dark.png', media: '(prefers-color-scheme: dark)' },
    ],
    shortcut: ['/shortcut-icon.png'],
    apple: [
      { url: '/apple-icon.png' },
      { url: '/apple-icon-x3.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
    ],
  },
};

export default function RootLayout({ children, }: { children: React.ReactNode}) {
  return (
    <html lang="pt-br">
      <Head>
        <title>Thiago Bastos Dev | MKT</title>
        <meta name='description' content={'Desenvolvedor Front-end & Web Analytics'} />        
        <meta name="application-name" content="thiago-bastos-dev" />
        <meta name="site_name" content="Especialista em desenvolver interfaces e CRO" />
        <meta name="author" content="Bastos" />
        <link rel="author" href="https://thh-carvalho.github.io/thiago-bastos-dev/" />
        <meta name="author" content="Thiago" />
        <meta name="generator" content="Next.js" />
        <meta name="keywords" content='Front-end, Desenvolvedor, Desenvolvedor de site, React, JavaScript, Next.js, Angular,WordPress, Strapi, Marketing, Analytics,Teste AB, CRO, Web Analytics, Google' />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta name="creator" content="Thiago Bastos" />
        <meta name="publisher" content="Thiago Bastos" />
        <meta name="robots" content="noindex, follow, nocache" />
        <meta
          name="googlebot"
          content="index, nofollow, noimageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
        />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="google-site-verification" content="google" />
        <meta name="y_key" content="yahoo" />
        <meta name="yandex-verification" content="yandex" />
        <meta name="me" content="my-email" />
        <meta name="me" content="my-link" />
        <meta
          name="apple-itunes-app"
          content="app-id=myAppStoreID, app-argument=myAppArgument"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Apple Web App" />
        <meta name="category" content="technology" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        {/*og*/}
        <meta property='og:title' content={'Thiago Bastos Dev | MKT'} />
        <meta property='og:description' content={'Desenvolvedor Front-end & Web Analytics'}/>
        <meta property='og:url' content={'https://thh-carvalho.github.io/thiago-bastos-dev/'} />
        <meta property='og:type' content='website' />
        <meta property="og:site_name" content="Especialista em desenvolver interfaces e CRO" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://thh-carvalho.github.io/thiago-bastos-dev/og-image.png" />

        <link rel="canonical" href="https://thh-carvalho.github.io/thiago-bastos-dev/" />
        <link rel="alternate" hrefLang="pt-BR" href="https://thh-carvalho.github.io/thiago-bastos-dev/pt-BR" />
        <link rel="shortcut icon" href="/favicon/thiago.png" />
        <link rel="icon" ref="/favicon/thiago.png" />
        <link rel="shortcut icon" href="/favicon/thiago.png" />
        <link rel="icon" href="/favicon/thiago.png" />
        <link rel="icon" href="https://thh-carvalho.github.io/thiago-bastos-dev/favicon/thiago.png" />
        <link rel="icon" href="/icon-dark.png" media="(prefers-color-scheme: dark)" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link
          rel="apple-touch-icon-precomposed"
          href="/apple-touch-icon-precomposed.png"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon-x3.png"
          sizes="180x180"
          type="image/png"
        />
        <link
          href="/assets/startup/apple-touch-startup-image-768x1004.png"
          rel="apple-touch-startup-image"
        />
        <link
          href="/assets/startup/apple-touch-startup-image-1536x2008.png"
          media="(device-width: 768px) and (device-height: 1024px)"
          rel="apple-touch-startup-image"
        />

      </Head>
      <GoogleTagManager gtmId="GTM-K9TZKMXF" />
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