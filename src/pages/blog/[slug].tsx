import React from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { getPostBySlug, getAllSlugs } from "lib/api";
import Container from "components/container";
import PostHeader from "components/postHeader";
import Image from "next/legacy/image";
import TwoColumn from "components/twoColumn";
import PostBody from "components/postBody";
import ConvertBody from "components/convertBody";
import SidebarContent from "components/sidebarContent";
import { extractText } from "lib/extractText";
import HeadMeta from "components/meta";
import { eyecatchLocal } from "lib/contents";
import { getPlaiceholder } from "plaiceholder";
import { prevNextPost } from "lib/prev-next-post";
import Pagination from "components/pagination";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

type slugProp = {
  slug: string;
};

type eyecatchTypes = {
  url: string;
  width: number;
  height: number;
  plaiceholder: string;
};

type slugTypes = {
  title: string;
  slug: string;
};

type Props = {
  title: string;
  publish: string;
  content: string;
  eyecatch: eyecatchTypes;
  categories: { name: string; slug: string }[];
  description: string;
  prevPost: slugTypes;
  nextPost: slugTypes;
};

const Post = ({
  title,
  publish,
  content,
  eyecatch,
  categories,
  description,
  prevPost,
  nextPost,
}: Props) => {
  return (
    <Container isMain>
      <HeadMeta pageTitle={title} pageDesc={description} pageImg={eyecatch} />
      <article>
        <TwoColumn>
          <TwoColumn.main>
            <figure>
              <Image
                key={eyecatch.url}
                src={eyecatch.url}
                alt={title}
                layout="responsive"
                width={eyecatch.width}
                height={eyecatch.height}
                sizes="(min-width: 1152px) 1152px, 100vw"
                priority
                placeholder="blur"
                blurDataURL={eyecatch.plaiceholder}
              />
            </figure>
            <PostHeader title={title} publish={publish} />
            <PostBody>
              <ConvertBody contentHTML={content} />
            </PostBody>
          </TwoColumn.main>
          <TwoColumn.sidebar>
            <SidebarContent heading="カテゴリー" categories={categories} />
          </TwoColumn.sidebar>
        </TwoColumn>
        <Pagination
          prevText={prevPost.title}
          prevUrl={`/blog/${prevPost.slug}`}
          nextText={nextPost.title}
          nextUrl={`/blog/${nextPost.slug}`}
        />
      </article>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allSlugs = await getAllSlugs(5);
  return {
    paths: allSlugs.map(({ slug }: slugProp) => `/blog/${slug}`),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const post = await getPostBySlug(slug);
  if (!post) {
    return { notFound: true };
  } else {
    const description = extractText(post.content);
    const eyecatch = post.eyecatch ?? eyecatchLocal;
    const { base64 } = await getPlaiceholder(eyecatch.url);
    eyecatch.plaiceholder = base64;

    const allSlugs = await getAllSlugs();
    const [prevPost, nextPost] = prevNextPost(allSlugs, slug);
    return {
      props: {
        title: post.title,
        publish: post.publishDate,
        content: post.content,
        eyecatch,
        categories: post.categories,
        description,
        prevPost,
        nextPost,
      },
    };
  }
};

export default Post;
