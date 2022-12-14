/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || 'https://next-blog-orpin-eight.vercel.app',
  exclude:['/server-sitemap.xml'],
  generateRobotsTxt: true,
  robotsTxtOptions:{
    additionalSitemaps: ['https://next-blog-orpin-eight.vercel.app/server-sitemap.xml']
  }
}

module.exports = config
