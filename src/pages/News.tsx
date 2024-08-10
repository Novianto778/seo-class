import NewsContent from "@/components/features/news/NewsContent";
import NewsFilterSidebar from "@/components/features/news/NewsSidebarFilter";
import { NewsParams } from "@/types/news.type";

type Props = {
  searchParams: NewsParams;
};

const News = ({ searchParams }: Props) => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-5 md:col-span-3">
        <NewsFilterSidebar searchParams={searchParams} />
      </div>
      <div className="col-span-7 md:col-span-9">
        <NewsContent />
      </div>
    </div>
  );
};

export default News;
