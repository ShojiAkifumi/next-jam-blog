import Container from "components/container";
import type { GetStaticProps } from "next";
import HeadMeta from "components/meta";
import Posts from "components/posts";
import { getAllPosts } from "lib/api";
import React from "react";
import { eyecatchLocal } from "lib/contents";
import { getPlaiceholder } from "plaiceholder";
import TwoColumn from "components/twoColumn";
import PostCategories from "components/postCategories";
import { getAllCategories } from "lib/api";

type eyecatchTypes = {
  url: string;
  width: string;
  height: string;
  plaiceholder: string;
};

type catTypes = {
  name: string;
  id: string;
  slug: string;
}[];

type postsProps = {
  posts: {
    title: string;
    slug: string;
    eyecatch: eyecatchTypes;
  }[];
  categories: catTypes;
};

const Blog = ({ posts, categories }: postsProps) => {
  return (
    <Container isMain>
      <HeadMeta pageTitle="ブログ" pageDesc="ブログの記事一覧" />
      <TwoColumn>
        <TwoColumn.main>
          <Posts posts={posts} />
        </TwoColumn.main>
        <TwoColumn.sidebar>
          <PostCategories categories={categories} />
        </TwoColumn.sidebar>
      </TwoColumn>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts(10);
  const categories: catTypes = await getAllCategories();
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
      categories,
    },
  };
};
export default Blog;
