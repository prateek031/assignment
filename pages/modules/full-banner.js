import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import FooterOne from "../../layout/footers/FooterOne";
import NavbarThree from "../../layout/headers/NavbarThree";
import BodyContent from "../../components/modules/fullBanner";
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });

const FullBanner = () => {
  return (
    <>
      <NavbarThree />
      <BodyContent />
      <FooterOne />
    </>
  );
};

export default FullBanner;
