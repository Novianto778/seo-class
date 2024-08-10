import Image from "next/image";
import Link from "next/link";
import React from "react";
import NewsCard from "./NewsCard";
import { ChevronRight } from "lucide-react";

type Props = {};

const NewsSection = (props: Props) => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mb-10">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
          Latest News
        </h2>
        <p className="mt-1 text-gray-600">
          Stay up to date with the latest news from Preline.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {new Array(4).fill(0).map((_, index) => (
          <NewsCard key={index} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link
          className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
          href="/news"
        >
          Read more
          <ChevronRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default NewsSection;
