import React from "react";
import { Link } from "react-router-dom";
const MainFooter = () => {
  return (
    <div className="footer">
      <div className="footerr">
        <div className="footer_content">
          <div className="copyright">
            Copyright © 2023 Instollar LLC, All Right Reserved
          </div>
          <div className="links">
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
