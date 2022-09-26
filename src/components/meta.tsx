import Head from "next/head";
import React from "react";
import siteMeta from "lib/contents";
import { useRouter } from "next/router";
import siteImg from "../../public/ogp.jpg";
import type { StaticImageData } from "next/image";

type imageTypes = {
  url: string;
  width: string | number;
  height: string | number;
};

type Props = {
  pageTitle?: string;
  pageDesc?: string;
  pageImg?: StaticImageData | imageTypes;
};

const getImageMeta = (pageImg: Props["pageImg"]) => {
  if (pageImg && "url" in pageImg) {
    return [pageImg.url, pageImg.width, pageImg.height];
  } else {
    const siteImgUrl = siteImg.src.startsWith("https")
      ? siteImg.src
      : `${siteMeta.siteUrl}${siteImg.src}`;
    return [siteImgUrl, siteImg.width, siteImg.height];
  }
};

const HeadMeta = ({ pageTitle, pageDesc, pageImg }: Props) => {
  const title = pageTitle ? `${pageTitle} | ${siteMeta.title}` : siteMeta.title;
  const desc = pageDesc ?? siteMeta.desc;
  const router = useRouter();
  const url = `${siteMeta.siteUrl}${router.asPath}`;
  const [imgUrl, imgW, imgH] = getImageMeta(pageImg);

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content={desc} />
      <meta property="og:description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />
      <link rel="icon" href={siteMeta.icon} />
      <link rel="apple-touch-icon" href={siteMeta.icon} />
      <meta property="og:image" content={imgUrl.toString()} />
      <meta property="og:image:width" content={imgW.toString()} />
      <meta property="og:image:height" content={imgH.toString()} />
      <meta property="og:image:card" content="summary_large_image" />
    </Head>
  );
};

export default HeadMeta;
