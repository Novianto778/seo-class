import NewsCard from "@/components/features/news/NewsCard";
import NewsCardSkeleton from "@/components/features/news/NewsCardSkeleton";
import NewsContent from "@/components/features/news/NewsContent";
import NewsPageFetcher from "@/components/features/news/NewsPageFetcher";
import NewsFilterSidebar from "@/components/features/news/NewsSidebarFilter";
import { NewsParams } from "@/types/news.type";
import { Suspense } from "react";

type Props = {
  searchParams: NewsParams;
};

const News = ({ searchParams }: Props) => {
  const defaultSearchParams: NewsParams = {
    limit: "10",
    page: "1",
  };

  const params = { ...defaultSearchParams, ...searchParams };

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-5 md:col-span-3">
        <NewsFilterSidebar searchParams={params} />
      </div>
      <div className="col-span-7 md:col-span-9">
        <Suspense
          key={JSON.stringify(params)} // re-render when params change
          fallback={<NewsCardSkeleton length={6} />}
        >
          <NewsPageFetcher params={params}>
            <NewsContent params={params} />
          </NewsPageFetcher>
        </Suspense>
      </div>
    </div>
  );
};

export default News;
