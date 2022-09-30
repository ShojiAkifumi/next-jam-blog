import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "components/layout";
// Font Awesomeの設定
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { usePageView, GoogleAnalytics } from "lib/gtag";
import { AnimatePresence } from "framer-motion";
config.autoAddCss = false;

function MyApp({ Component, pageProps, router }: AppProps) {
  usePageView();
  return (
    <>
      <GoogleAnalytics />
      <Layout>
        <AnimatePresence
          exitBeforeEnter
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
