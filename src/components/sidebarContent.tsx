import React from "react";
import s from "styles/sidebar-content.module.scss";
import Link from "next/link";

type Props = {
  heading: string;
  categories: { name: string; slug: string }[];
};

const SidebarContent = ({ heading, categories }: Props) => {
  return (
    <div className={s.container}>
      <h3 className={s.heading}>{heading}</h3>
      <ul className={s.list}>
        {categories.map(({ name, slug }) => (
          <li key={slug}>
            <Link href={`/blog/category/${slug}`} scroll={false}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarContent;
