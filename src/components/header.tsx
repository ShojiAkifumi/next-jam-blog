import React from "react";
import Logo from "./logo";
import Nav from "./nav";
import s from "styles/header.module.scss";
import Container from "./container";

const Header = () => {
  return (
    <header className={s.siteHeader}>
      <Container>
        <div className={s.flexContainer}>
          <Logo boxOn />
          <Nav />
        </div>
      </Container>
    </header>
  );
};

export default Header;
