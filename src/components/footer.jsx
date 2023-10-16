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
              This would contain the coporate
              <br />
              addresses of the company
            </p>
            <Link to="">Mailto: </Link>
            <div className="social">
              <img src="/lp/instollar-alt.png" alt="" />
              <AiFillLinkedin />
              <BiLogoFacebook />
            </div>
          </div>
          <div className="top_footer_row_two">
            <div className="row_two">
              <h3>For Companies</h3>
              <ul>
                <li>Sponsorship</li>
                <li>Instollar Business</li>
                <li>Reviews</li>
                <li>Industrial</li>
              </ul>
            </div>
            <div className="row_two">
              <h3>For Talent</h3>
              <ul>
                <li>Training</li>
                <li>Top Talents</li>
                <li>Residential</li>
                <li>Commercial</li>
              </ul>
            </div>
            <div className="row_two">
              <h3>Instollar LLC</h3>
              <ul>
                <li>About Us</li>
                <li>How it works</li>
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
