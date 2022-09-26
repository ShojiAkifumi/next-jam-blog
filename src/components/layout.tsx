import React from "react";
import Footer from "components/footer";
import Header from "components/header";
import styles from "../styles/Home.module.css";
type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
