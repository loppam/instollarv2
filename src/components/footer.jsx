import React from "react";
import { Link } from "react-router-dom";
import { AiFillLinkedin } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
const footer = () => {
  return (
    <footer>
      <div className="top_footer">
        <div className="top_footer_flex">
          <div className="top_footer_row_one">
            <p>
              AfricaWorks Block D 16 Idowu Martins Street, VI Lagos Island,
              Lagos Nigeria <br /> <br />
              Instollar LLC - USA 201 N McDowell St #31064 Charlotte, NC 28204
              USA
            </p>
            <Link to="mailto:info@instollar.com">info@instollar.com</Link>
            <div className="social">
              <img src="/lp/instollar-alt.png" alt="" />
              <AiFillLinkedin />
              <BiLogoFacebook />
            </div>
          </div>
          <div className="top_footer_row_two">
            <div className="row_two">
              <h4>For Companies</h4>
              <ul>
                <li>Training Sponsorship</li>
                <li>Instollar Business</li>
              </ul>
            </div>
            <div className="row_two">
              <h4>For Talent</h4>
              <ul>
                <li>Training & Certification</li>
                <li>Top Talents</li>
              </ul>
            </div>
            <div className="row_two">
              <h4>Instollar LLC</h4>
              <ul>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
