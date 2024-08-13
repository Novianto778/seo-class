import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const NewsCard = (props: Props) => {
  return (
    <Link
      className="group rounded-xl focus:outline-none flex flex-col min-h-72 border shadow-sm"
      href="/news/detail?id=1"
    >
      <div>
        <div className="aspect-[16/9]">
          <Image
            className="w-full h-full object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
            alt="Blog Image"
            width={560}
            height={315}
          />
        </div>
      </div>
      <div className="p-2">
        <h3 className="mt-2 font-medium text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600">
          Unity’s inside sales team drives 80% of its revenue with Preline.
        </h3>
        <p className="mt-2 text-sm text-gray-600">September 12, 2022</p>
      </div>
    </Link>
  );
};

export default NewsCard;
