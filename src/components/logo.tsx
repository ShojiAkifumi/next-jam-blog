import Link from "next/link";
import React from "react";
import styles from "styles/logo.module.scss";

type logoProps = {
  boxOn?: boolean;
};

const Logo = ({ boxOn }: logoProps) => {
  return (
    <Link href="/" scroll={false} className={boxOn ? styles.box : styles.basic}>
      CUBE
    </Link>
  );
};

export default Logo;
