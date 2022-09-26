import React from "react";
import styles from "styles/post-body.module.css";
type Props = {
  children: React.ReactNode;
};

const PostBody = ({ children }: Props) => {
  return <div className={styles.stack}>{children}</div>;
};

export default PostBody;
