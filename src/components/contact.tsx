import React from "react";
import Social from "./social";
import s from "styles/contact.module.scss";

const Contact = () => {
  return (
    <div className={s.contactStack}>
      <h3 className={s.heading}>Contact</h3>
      <Social iconSize="24px" />
      <address>kuonnrh48951@outlook.jp</address>
    </div>
  );
};

export default Contact;
