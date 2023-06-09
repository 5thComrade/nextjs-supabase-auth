import React from "react";
import Navbar from "../components/Navbar/Navbar.component";
import Footer from "../components/Footer/Footer.component";
import { publicRoutes } from "../lib/constants";

type LayoutPropType = {
  children: React.ReactNode;
};

const PublicLayout = (props: LayoutPropType) => {
  return (
    <main className="bg-white text-black px-8 py-4">
      <Navbar routes={publicRoutes} privateNav={false} />

      <section>{props.children}</section>

      <Footer />
    </main>
  );
};

export default PublicLayout;
