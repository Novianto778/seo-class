import MainLayout from "@/components/layouts/MainLayout";
import News from "@/pages/News";
import { NewsParams } from "@/types/news.type";
import React from "react";

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
