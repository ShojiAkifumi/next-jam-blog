import Container from "components/container";
import type { GetStaticProps } from "next";
import Hero from "components/hero";
import HeadMeta from "components/meta";
import Posts from "components/posts";
import { getAllPosts } from "lib/api";
import React from "react";
import { eyecatchLocal } from "lib/contents";
import { getPlaiceholder } from "plaiceholder";

type eyecatchTypes = {
  url: string;
  width: string;
  height: string;
  plaiceholder: string;
};

type postsProps = {
  posts: {
    title: string;
    slug: string;
    eyecatch: eyecatchTypes;
  }[];
};

const Blog = ({ posts }: postsProps) => {
  return (
    <Container>
      <HeadMeta pageTitle="ブログ" pageDesc="ブログの記事一覧" />
      <Hero title="Blog" subtitle="Recent Posts" />
      <Posts posts={posts} />
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url);
    post.eyecatch.plaiceholder = base64;
  }
  return {
    props: {
      posts,
    },
  };
};

export default Blog;
