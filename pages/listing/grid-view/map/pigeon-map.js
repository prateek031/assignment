/**
 * @returns The PigeonMap component is being returned.
 */
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NavbarThree from "../../../../layout/headers/NavbarThree";
import Breadcrumb from "../../../../layout/Breadcrumb/Breadcrumb";
import FooterOne from "../../../../layout/footers/FooterOne";
import MapView from "../../../../components/listing/gridView/map/MapView";
import Pigeon from "../../../../components/listing/gridView/map/PigeonMap";
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });

const PigeonMap = () => {
  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <MapView gridType={"grid-view"} side={"right"}>
        <Pigeon />
      </MapView>
      <FooterOne />
    </>
  );
};

export default PigeonMap;
