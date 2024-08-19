import { envClient } from "@/lib/env";
import NewsDetail from "@/main-page/NewsDetail";
import satellite from "@/services/satellite";
import { NewsParams } from "@/types/news.type";
import { Metadata } from "next";
import React from "react";

type Props = {
  searchParams: {
    id: string;
  };
};
export async function generateMetadata({ searchParams }: Props) {
  const id = searchParams.id;

  const { data } = await satellite.get(`/news/${id}`);
  const news = data.data;

  const metadata: Metadata = {
    title: `${news.title}`,
    description: news.content,
    alternates: {
      canonical: envClient.SITE_URL + `/news/${id}`,
    },
  };

  return metadata;
}

const NewsDetailPage = ({ searchParams }: Props) => {
  return (
    <div>
      <NewsDetail />
    </div>
  );
};

export default NewsDetailPage;
