import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import s from "styles/posts.module.scss";

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

const Posts = ({ posts }: postsProps) => {
  return (
    <div className={s.postsGridContainer}>
      {posts.map(({ title, slug, eyecatch }) => (
        <article className={s.post} key={slug}>
          <Link href={`/blog/${slug}`} scroll={false}>
            <figure>
              <Image
                src={eyecatch.url}
                alt={title}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={eyecatch.plaiceholder}
                sizes="(min-width: 1152px) 576px,50vw"
              />
            </figure>
          </Link>
          <div>
            <Link href={`/blog/${slug}`} scroll={false}>
              <h2>{title}</h2>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Posts;
