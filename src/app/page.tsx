import MainLayout from "@/components/layouts/MainLayout";
import { envClient } from "@/lib/env";
import Home from "@/pages/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: envClient.SITE_URL,
  },
};

export default function HomePage() {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
}
