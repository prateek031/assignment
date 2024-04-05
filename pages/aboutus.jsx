import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import FooterOne from "../layout/footers/FooterOne";
import BodyContent from "../components/pages/otherPages/aboutUs2";
import BreadCrumb from "../layout/Breadcrumb/BreadCrumb2";
import NavbarOne from "../layout/headers/NavbarOne";
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });

const AboutUs2 = () => {
  return (
    <>
      <NavbarOne />
      <BreadCrumb />
      <BodyContent />
      <FooterOne />
    </>
  );
};

export default AboutUs2;
