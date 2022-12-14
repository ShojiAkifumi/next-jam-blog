import React from "react";
import Logo from "./logo";
import Container from "./container";
import Social from "./social";
import s from "styles/footer.module.scss";

const Footer = () => {
  return (
    <footer className={s.footerWrapper}>
      <Container>
        <div className={s.flexContainer}>
          <Logo />
          <Social iconSize="30px" />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
