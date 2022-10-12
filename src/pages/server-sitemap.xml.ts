import { getServerSideSitemap } from "next-sitemap";
import { GetServerSidePropsContext } from 'next';
import {getAllSlugs, getAllCategories} from "lib/api"
import siteMeta from "lib/contents"

export default function Sitemap(){}

export async function getServerSideProps(context: GetServerSidePropsContext){
  const posts = await getAllSlugs()
  const postFields = posts.map((post: any)=>{
    return {
      loc: `${siteMeta.siteUrl}/${post.slug}`,
      lastmod: post.revisedAt,
      changefreq: 'daily',
    }
  })

  const cats = await getAllCategories()
  const catFields = cats.map((cat: any)=>{
    return{
      loc: `${siteMeta.siteUrl}/blog/category/${cat.slug}`,
    }
  })

  const allFields = [...postFields, ...catFields];
  return await getServerSideSitemap(context, allFields);
}
