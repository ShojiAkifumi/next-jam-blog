import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "components/layout";
// Font Awesomeの設定
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { usePageView, GoogleAnalytics } from "lib/gtag";
import { AnimatePresence } from "framer-motion";
import Router from "next/router";
config.autoAddCss = false;

function MyApp({ Component, pageProps, router }: AppProps) {

  usePageView();
  return (
    <>
      <GoogleAnalytics />
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
      </Layout>
    </>
  );
}

const routeChange = () => {
  // Temporary fix to avoid flash of unstyled content
  // during route transitions. Keep an eye on this
  // issue and remove this code when resolved:
  // https://github.com/vercel/next.js/issues/17464

  const tempFix = () => {
    const allStyleElems = document.querySelectorAll('style[media="x"]');
    allStyleElems.forEach((elem) => {
      elem.removeAttribute("media");
    });
  };
  tempFix();
};

Router.events.on("routeChangeComplete", routeChange);
Router.events.on("routeChangeStart", routeChange);

export default MyApp;
