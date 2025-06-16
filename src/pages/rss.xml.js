import rss from "@astrojs/rss";
import { SITE_DESCRIPTION, SITE_TITLE } from "../consts";
import fetchApi from "../lib/strapi"; // asumsi kamu sudah punya ini

export async function GET(context) {
  const services = await fetchApi({
    endpoint: "highlights?sort=date:desc&populate=*",
  });

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: services.map((service) => ({
      title: service.title,
      pubDate: new Date(service.date),
      description: service.description || "",
      link: `/services/${service.slug}/`,
    })),
  });
}
