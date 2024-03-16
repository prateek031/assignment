/**
 * It takes a locale and an array of namespaces, and returns an object with the translations for those
 * namespaces
 * @returns The return value of the function is the props object.
 */
import React, { useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NavbarFour from "../../layout/headers/NavbarFour";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
import FooterFour from "../../layout/footers/FooterFour";
import BodyContent from "../../components/home/map-with-search";
import { ConfigDB } from "../../config/themeCustomizerConfig";

const MapWithVSearch = () => {
  useEffect(() => {
    setTimeout(() => {
      !ConfigDB.PrimaryColor && document.documentElement.style.setProperty("--theme-default", " #6432b8");
      !ConfigDB.SecondaryColor && document.documentElement.style.setProperty("--theme-default2", " #9516d7");
    }, 0.1);
  }, []);
  return (
    <>
      <NavbarFour />
      <BodyContent map={"VSearch"} />
      <FooterFour />
    </>
  );
};

export default MapWithVSearch;
