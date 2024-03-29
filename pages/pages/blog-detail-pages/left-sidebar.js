import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BodyContent from "../../../components/pages/blogDetailPages";
import Breadcrumb from "../../../layout/Breadcrumb/Breadcrumb";
import FooterOne from "../../../layout/footers/FooterOne";
import NavbarThree from "../../../layout/headers/NavbarThree";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
import Img from "../../../utils/BackgroundImageRatio";

const LeftSidebar = () => {
  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <BodyContent side={"left"}>
        <div className='blog-detail-image'>
          <Img src='/assets/images/parallax/4.jpg' className='bg-img img-fluid' alt='' />
        </div>
      </BodyContent>
      <FooterOne />
    </>
  );
};
export default LeftSidebar;
