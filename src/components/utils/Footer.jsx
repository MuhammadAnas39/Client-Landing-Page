import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  const footer2 = ["About Us", "Pricing", "FAQ"];
  const footer3 = ["Contact Us", "Privacy Policy", "Terms & Condition"];
  const footer4 = [
    <FaFacebook color="white" size={25} />,
    <FaInstagram color="white" size={25} />,
    <FaLinkedin color="white" size={25} />,
  ];
  return (
    <div>
      <div className="horizontalLine"></div>

      <div className="footer">
        <div className="firstCol">
          <h4 style={{ fontWeight: "bold" }}>Logo here</h4>
          <p className="footerFirstColPara">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            expedita aliquid atque quaerat a porro ipsa necessitatibus id, in
            quis.
          </p>
        </div>
        <div>
          <h4>Quick Links</h4>

          {footer2?.map((i, index) => (
            <div key={index} className="footerRow">
              <div></div>
              <p>{i}</p>
            </div>
          ))}
        </div>

        <div>
          <h4>Support</h4>

          {footer3?.map((i, index) => (
            <div key={index} className="footerRow">
              <div></div>
              <p>{i}</p>
            </div>
          ))}
        </div>
        <div>
          <h4>Follow on Social</h4>
          <div className="socialLinksRow">
            {footer4?.map((i, index) => (
              <div key={index}>{i}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="horizontalLine2"></div>
      <p className="lastFooter">© 2024 All rights reserved.</p>
    </div>
  );
};

export default Footer;
