/**
 * It takes a locale as an argument and returns a props object with the translations for the given
 * locale
 * @returns an object with a property called props.
 */
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BodyContent from "../../components/property/tabPanelPages";
import FooterOne from "../../layout/footers/FooterOne";
import NavbarFive from "../../layout/headers/NavbarFive";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });

const ThumbnailImage = () => {
  return (
    <>
      <NavbarFive />
      <BodyContent />
      <FooterOne />
    </>
  );
};

export default ThumbnailImage;
