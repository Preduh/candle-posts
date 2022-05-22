import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="pt-BR" className="dark">
      <Head>
        <link rel="shortcut icon" href="/candle.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
