import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang='pt-br'>
      <Head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/layout/favicon/apple-touch-icon.png'
        />
        <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href="/static/thiago.png" />
        <meta
          name='msapplication-config'
          content='/layout/favicon/browserconfig.xml'
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}