import Container from "components/container";
import Hero from "components/hero";
import HeadMeta from "components/meta";
import React from "react";

type Props = {};

const Blog = (props: Props) => {
  return (
    <Container>
      <HeadMeta pageTitle="ブログ" pageDesc="ブログの記事一覧" />
      <Hero title="Blog" subtitle="Recent Posts" />
    </Container>
  );
};

export default Blog;
