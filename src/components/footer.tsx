import React from "react";
import Logo from "./logo";
import Container from "./container";
import Social from "./social";

const Footer = () => {
  return (
    <footer className="footerWrapper">
      <Container>
        <div className="flexContainer">
          <Logo />
          <Social iconSize="30px" />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
