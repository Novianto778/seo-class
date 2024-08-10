import MainLayout from "@/components/layouts/MainLayout";
import AboutUs from "@/pages/AboutUs";
import React from "react";

type Props = {};

const AboutUsPage = (props: Props) => {
  return (
    <MainLayout>
      <AboutUs />
    </MainLayout>
  );
};

export default AboutUsPage;
