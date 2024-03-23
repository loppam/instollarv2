import React from "react";
import { FiCheckSquare } from "react-icons/fi";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import MainFooter from "../components/MainFooter";
import Footer from "../components/footer";
const Signupoption = () => {
  return (
    <div className="signupoption">
      {/* <Navbar /> */}
      <div className="margin_content">
        <div className="signupoption_content">
          <Link to="/freelancer-onboarding" className="signupoption_box">
            <img src="/lp/signupop2.png" alt="" />
            <div className="signupoption_text">
              <h4>I am a Green Talent registering for work or training</h4>
              <p>Click Here</p>
            </div>
            <FiCheckSquare className="size" />
          </Link>

          <Link to="/onboarding" className="signupoption_box">
            <img src="/lp/signupop1.png" alt="" />
            <div className="signupoption_text">
              <h4>I am a company hiring for a project</h4>
              <p>Click Here</p>
            </div>
            <FiCheckSquare className="size" />
          </Link>

          <p className="lo">
            Already have an account?{" "}
            <Link className="lo" to="/login">
              Sign In
            </Link>
          </p>
        </div>
      </div>
      <Footer />
      <MainFooter />
    </div>
  );
};

export default Signupoption;
