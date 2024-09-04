import { envClient } from "@/lib/env";
import { escapeHtml } from "@/lib/utils";
import { getNews } from "@/services/news/api";
import { News } from "@/types/news.type";

import { ISitemapField } from "next-sitemap";

export const getNewsData = async (page = 1, limit = 10) => {
  try {
    const result = await getNews({ page, limit });

    if (result.data) {
      const data = result.data;
      const total = result.pagination.total;
      return { data, total };
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export default async function getNewsSitemap(
  page: number
): Promise<ISitemapField[]> {
  const result = await getNewsData(page);
  const data = result?.data;

  const sitemapLinks = data?.map((res: News) => {
    const postedDate = new Intl.DateTimeFormat("id-ID", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date(res.created_at));

    const loc = `${envClient.SITE_URL}/news/detail?id=${res.id}&title=${res.title}`;

    return {
      loc: escapeHtml(loc),
      lastmod: postedDate,
    };
  });

  return sitemapLinks as ISitemapField[];
}
