import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "components/layout";
// Font Awesomeの設定
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { usePageView } from "lib/gtag";
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  usePageView();
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
