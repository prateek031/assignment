import React from "react";
import { Col } from "reactstrap";

const FooterMap = ({ isActive, setIsActive }) => {
  return (
    <Col xl='3' md='6' className='order-xl'>
      <div className='footer-links'>
        <h5
          className='footer-title'
          onClick={(e) => {
            e.preventDefault();
            setIsActive("OurLocation");
            isActive === "OurLocation" && setIsActive();
          }}>
          Our Location
          <span className='according-menu'>
            <i className='fas fa-chevron-down'></i>
          </span>
        </h5>
        <div className={`footer-content ${isActive === "OurLocation" ? "d-block" : "d-none d-md-block"}`}>
          <div className='footer-map'>
            <iframe
              title='GRG office location'
              src='htt'
              allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default FooterMap;
