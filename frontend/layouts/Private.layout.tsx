import React from "react";
import Navbar from "../components/Navbar/Navbar.component";
import Footer from "../components/Footer/Footer.component";
import { privateRoutes } from "../lib/constants";

type LayoutPropType = {
  children: React.ReactNode;
};

const PrivateLayout = (props: LayoutPropType) => {
  return (
    <main className="bg-white text-black px-8 py-4">
      <Navbar routes={privateRoutes} />

      <section>{props.children}</section>

      <Footer />
    </main>
  );
};

const withPrivateLayout = (WrappedComponent: React.ComponentType) => {
  return class WithPrivateLayout extends React.Component {
    render() {
      return (
        <PrivateLayout>
          <WrappedComponent {...this.props} />
        </PrivateLayout>
      );
    }
  };
};

export default withPrivateLayout;
