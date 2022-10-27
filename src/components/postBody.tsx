import React from "react";
type Props = {
  children: React.ReactNode;
};

const PostBody = ({ children }: Props) => {
  return <div className="postBodyStack">{children}</div>;
};

export default PostBody;
