import Container from "components/container";
import HeadMeta from "components/meta";
import SidebarContent from "components/sidebarContent";
import PostHeader from "components/postHeader";
import Posts from "components/posts";
import TwoColumn from "components/twoColumn";
import { getAllCategories, getAllPostsByCategory } from "lib/api";
import { eyecatchLocal } from "lib/contents";
import { GetStaticPaths, GetStaticProps } from "next";
import { getPlaiceholder } from "plaiceholder";
import React from "react";

type eyecatchTypes = {
  url: string;
  width: string;
  height: string;
  plaiceholder: string;
};

type Props = {
  name: string;
  posts: {
    title: string;
    slug: string;
    eyecatch: eyecatchTypes;
  }[];
  categories: { name: string; slug: string }[];
};

type catTypes = {
  name: string;
  id: string;
  slug: string;
}[];

const Category = ({ name, posts, categories }: Props) => {
  return (
    <Container isMain>
      <HeadMeta pageTitle={name} pageDesc={`${name}に関する記事`} />
      <PostHeader title={name} />
      <TwoColumn>
        <TwoColumn.main>
          <Posts posts={posts} />
        </TwoColumn.main>
        <TwoColumn.sidebar>
          <SidebarContent heading="カテゴリー" categories={categories} />
        </TwoColumn.sidebar>
      </TwoColumn>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allCats: catTypes = await getAllCategories();
  return {
    paths: allCats.map(({ slug }) => `/blog/category/${slug}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const catSlug = context.params?.slug;
  const categories: catTypes = await getAllCategories();
  const cat = categories.find(({ slug }) => slug === catSlug);
  if (cat) {
    const posts = await getAllPostsByCategory(cat.id);
    for (const post of posts) {
      if (!post.hasOwnProperty("eyecatch")) {
        post.eyecatch = eyecatchLocal;
      }
      const { base64 } = await getPlaiceholder(post.eyecatch.url);
      post.eyecatch.plaiceholder = base64;
    }
    return {
      props: {
        name: cat.name,
        posts,
        categories,
      },
    };
  } else {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }
};
export default Category;
