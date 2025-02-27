import MainLayout from "@/components/layouts/MainLayout";
import { envClient } from "@/lib/env";
import News from "@/main-page/News";
import { NewsParams } from "@/types/news.type";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "News - Circle",
  description: "Discover the latest news and updates at Circle.",
  keywords: ["news", "updates", "circle"],
  alternates: {
    canonical: envClient.SITE_URL + "/news",
  },
};

type Props = {
  searchParams: NewsParams;
};

const NewsPage = ({ searchParams }: Props) => {
  return (
    <MainLayout>
      <div className="py-4">
        <News searchParams={searchParams} />
      </div>
    </MainLayout>
  );
};

export default NewsPage;
