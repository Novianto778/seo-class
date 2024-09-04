import NewsDetailFetcher from "@/components/features/news/NewsDetailFetcher";
import NewsDetailSkeleton from "@/components/features/news/NewsDetailSkeleton";
import ClientMetadata from "@/components/shared/ClientMetadata";
import NewsDetail from "@/main-page/NewsDetail";
import { getMetadata } from "@/services/news/actions";
import { Suspense } from "react";

type Props = {
  searchParams: {
    id: string;
  };
};

// export const dynamic = "force-dynamic";

const NewsDetailPage = ({ searchParams }: Props) => {
  return (
    <div>
      <ClientMetadata
        func={async () => {
          "use server";
          return getMetadata({ searchParams });
        }}
      />
      <Suspense
        key={searchParams.id} // re-render when id change
        fallback={<NewsDetailSkeleton />}
      >
        <NewsDetailFetcher id={searchParams.id}>
          <NewsDetail id={searchParams.id} />
        </NewsDetailFetcher>
      </Suspense>
    </div>
  );
};

export default NewsDetailPage;
