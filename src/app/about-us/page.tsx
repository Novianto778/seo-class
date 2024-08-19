import MainLayout from "@/components/layouts/MainLayout";
import AboutUs from "@/main-page/AboutUs";
import { Metadata } from "next";
import React from "react";

type Props = {};

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about our company and our achievements.",
};

const AboutUsPage = (props: Props) => {
  return (
    <MainLayout>
      <AboutUs />
    </MainLayout>
  );
};

export default AboutUsPage;
