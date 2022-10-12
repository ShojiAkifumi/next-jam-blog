import type { GetStaticProps } from "next";
import Container from "components/container";
import Hero from "components/hero";
import HeadMeta from "components/meta";
import { getAllPosts } from "lib/api";
import { eyecatchLocal } from "lib/contents";
import { getPlaiceholder } from "plaiceholder";
import Posts from "components/posts";
import Pagination from "components/pagination";

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

const Home = ({ posts }: postsProps) => {
  return (
    <Container isMain>
      <HeadMeta />
      <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />
      <Posts posts={posts} />
      <Pagination nextUrl="/blog" nextText="もっと見る" />
    </Container>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts(4);

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
export default Home;
