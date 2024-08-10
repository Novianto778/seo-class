import React from "react";
import NewsCard from "./NewsCard";

type Props = {};

const NewsContent = (props: Props) => {
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <NewsCard key={index} />
        ))}
      </div>
    </>
  );
};

export default NewsContent;
