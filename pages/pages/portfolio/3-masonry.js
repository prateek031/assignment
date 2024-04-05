/* A code snippet. */
import React from "react";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NavbarThree from "../../../layout/headers/NavbarThree";
import FooterOne from "../../../layout/footers/FooterOne";
import Breadcrumb from "../../../layout/Breadcrumb/Breadcrumb";
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });

const DynamicBodyContent = dynamic(() => import("../../../components/pages/portfolio/Masonry/index"), {
  ssr: false,
});
const Masonry3 = () => {
  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <DynamicBodyContent masonryGrid={3} />
      <FooterOne />
    </>
  );
};

export default Masonry3;
