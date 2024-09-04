"use server";

import { redirect } from "next/navigation";
import satellite from "../satellite";
import { Metadata } from "next";
import { envClient } from "@/lib/env";

export const filterNews = async (formData: FormData) => {
  const from = formData.get("from") as string;
  const to = formData.get("to") as string;
  const q = formData.get("q") as string;

  console.log(to, from, q);

  const params = new URLSearchParams();
  if (from) {
    params.append("from", from);
  }

  if (to) {
    params.append("to", to);
  }

  if (q) {
    params.append("q", q);
  }

  redirect("/news?" + params.toString());
};

export async function getMetadata({
  searchParams,
}: {
  searchParams: { id: string };
}): Promise<Metadata> {
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
