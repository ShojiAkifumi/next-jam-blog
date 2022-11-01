import React from "react";
import s from "styles/post-body.module.scss";
type Props = {
  children: React.ReactNode;
};

const PostBody = ({ children }: Props) => {
  return <div className={s.postBodyStack}>{children}</div>;
};

export default PostBody;
