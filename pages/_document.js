import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/assets/icon/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/assets/icon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/assets/icon/favicon-16x16.png"/>
          <link rel="manifest" href="/assets/icon/site.webmanifest"/>
          <link rel="icon" href="/assets/icon/favicon.svg"/>
      </Head>
      <body className="body">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
