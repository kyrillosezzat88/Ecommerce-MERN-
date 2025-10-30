import { BreadCrumb, Footer, Header } from "@components/common";
import { TBreadCrumb } from "@types";
import { Outlet } from "react-router-dom";

const BreadCrumbLayout = ({ title, links }: TBreadCrumb) => {
  return (
    <div>
      <Header />
      <BreadCrumb title={title} links={links} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default BreadCrumbLayout;
