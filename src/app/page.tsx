import MainLayout from "@/components/layouts/MainLayout";
import { envClient } from "@/lib/env";
import Home from "@/main-page/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: envClient.SITE_URL,
  },
};

export const dynamic = "force-dynamic";
// export const revalidate = 10;

export default function HomePage() {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
}
