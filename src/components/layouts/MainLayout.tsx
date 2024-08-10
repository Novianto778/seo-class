import React from "react";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
