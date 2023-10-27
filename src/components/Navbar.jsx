import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  return (
    <nav>
      <div className="nav_content">
        <Link to="/">
          <img src="/lp/instollar.png" alt="" className="mobile" />
        </Link>
        <div
          className={Mobile ? "mobile-link" : "omo"}
          onClick={() => setMobile(false)}
        >
          <div className="nav_content_left">
            <Link to="/about" className="sty">
              About us
            </Link>
            <div className="dropdown">
              <button className="dropbtn">Freelancers</button>
              <div className="dropdown-content">
                <Link to="/">
                  <img src="/lp/material-symbols_model-training.png" alt="" />
                  Become a Green Energy Talent
                </Link>

                <Link to="/training-and-certification">
                  <img src="/lp/healthicons_i-training-class.png" alt="" />
                  Training & Certification
                </Link>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">Solar Companies</button>
              <div className="dropdown-content">
                <Link to="/training-and-sponsorship">
                  <img src="/lp/material-symbols_model-training.png" alt="" />
                  Training Sponsorship
                </Link>
                <Link to="/instollar-business">
                  <img src="/lp/navector.png" alt="" />
                  Instollar Business
                </Link>
              </div>
            </div>
          </div>
          <div className="log_siginbtn">
            <Link to="/login" className="login_btn">
              Login
            </Link>
            <Link to="/pre-signup" className="signup_btn">
              Join
            </Link>
          </div>
        </div>
        <button className="mobilev" onClick={() => setMobile(!Mobile)}>
          {Mobile ? <FaTimes /> : <RxHamburgerMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
