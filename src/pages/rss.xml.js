import rss from "@astrojs/rss";
import fetchApi from "../lib/strapi.js"; // pastikan file ini juga .js

export async function GET(context) {
  // Ambil site title dan description dari CMS
  const global = await fetchApi({
    endpoint: "global",
    wrappedByKey: "data",
  });

  // Ambil highlight items (misalnya blog post atau project)
  const highlights = await fetchApi({
    endpoint: "highlights?sort=date:desc&populate=*",
    wrappedByKey: "data",
  });

  return rss({
    title: global.siteName,
    description: global.siteDescription,
    site: context.site,
    items: highlights.map((item) => ({
      title: item.title,
      pubDate: new Date(item.date),
      description: item.title || "",
      link: `/services/${item.slug}/`,
    })),
  });
}

