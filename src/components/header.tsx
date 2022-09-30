import React from "react";
import Logo from "./logo";
import Nav from "./nav";
import styles from "styles/header.module.scss";
import Container from "./container";

const Header = () => {
  return (
    <header>
      <Container large>
        <div className={styles.flexContainer}>
          <Logo boxOn />
          <Nav />
        </div>
      </Container>
    </header>
  );
};

export default Header;
