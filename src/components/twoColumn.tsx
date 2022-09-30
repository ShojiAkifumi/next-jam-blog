import React from "react";
import styles from "styles/two-column.module.scss";

type Props = {
  children: React.ReactNode;
};

const TwoColumn = ({ children }: Props) => {
  return <div className={styles.flexContainer}>{children}</div>;
};

TwoColumn.main = ({ children }: Props) => {
  return <div className={styles.main}>{children}</div>;
};

TwoColumn.sidebar = ({ children }: Props) => {
  return <div className={styles.sidebar}>{children}</div>;
};

export default TwoColumn;
