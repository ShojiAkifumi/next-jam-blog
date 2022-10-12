import React from "react";
import styles from "styles/posts.module.scss";
import Link from "next/link";
import Image from "next/image";

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
    <div className={styles.gridContainer}>
      {posts.map(({ title, slug, eyecatch }) => (
        <article className={styles.post} key={slug}>
          <Link href={`/blog/${slug}`} scroll={false}>
            <a>
              {/* <figure>
                <Image
                  src={eyecatch.url}
                  alt={title}
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={eyecatch.plaiceholder}
                  sizes="(min-width: 1152px) 576px,50vw"
                />
              </figure> */}
              <h2>{title}</h2>
            </a>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default Posts;
