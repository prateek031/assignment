/**
 * It fetches data from the API and passes it to the component
 * @returns The data is being returned from the API.
 */
import React, { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BodyContent from "../../components/pages/agency/agencyGrid";
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import FooterOne from "../../layout/footers/FooterOne";
import NavbarThree from "../../layout/headers/NavbarThree";
import { getData } from "../../utils/getData";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });

const AgentGrid = () => {
  const [clientData, setClientData] = useState();

  useEffect(() => {
    getData(`${process.env.API_URL}/client-agent`)
      .then((res) => {
        setClientData(res.data.agentList);
      })
      .catch((error) => console.log("Error", error));
  }, []);
   const gridStyle = { style: "grid-view" };
  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <BodyContent clientData={clientData} {...gridStyle} listSize={2} size={3} />
      <FooterOne />
    </>
  );
};

export default AgentGrid;
