import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import FooterOne from "../../layout/footers/FooterOne";
import NavbarThree from "../../layout/headers/NavbarThree";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import BodyContent from "../../components/modules/brand";

const button = () => {
  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <BodyContent />
      <FooterOne />
    </>
  );
};

export default button;
