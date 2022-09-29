import { Html, Head, Main, NextScript } from "next/document";
import { GoogleAnalytics } from "lib/gtag";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <GoogleAnalytics />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
