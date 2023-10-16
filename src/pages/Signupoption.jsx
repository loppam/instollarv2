import React from "react";
import { FiCheckSquare } from "react-icons/fi";
import { Link } from "react-router-dom";
const Signupoption = () => {
  return (
    <div className="signupoption">
      <header className="logo">
        <img src="/lp/instollarlogo.png" alt="" />
      </header>
      <div className="signupoption_content">
        <Link to="/talent-signup" className="signupoption_box">
          <img src="/lp/signupop2.png" alt="" />
          <div className="signupoption_text">
            <h4>I am a Green Talent registering for work or training</h4>
            <p>Click Here</p>
          </div>
          <FiCheckSquare className="size" />
        </Link>

        <Link to="/company-signup" className="signupoption_box">
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
  );
};

export default Signupoption;
