import React from "react";
import Navbar from "../components/Navbar";
import MainFooter from "../components/MainFooter";
import Footer from "../components/footer";
import { FaUser } from "react-icons/fa6";
import { CiSearch, CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
const FreelancerOnboarding = () => {
  return (
    <div className="onboarding">
      {/* <Navbar /> */}
      <div className="margin_content">
        <div className="onboarding_flex">
          <div className="onboarding_left">
            <h2>Hey Freelancer. Ready for your next green opportunity?</h2>
            <div className="onboarding_details">
              <div className="details_col">
                <FaUser />
                <p>Answer a few questions about yourself</p>
              </div>
              <div className="details_col">
                <CiSearch />
                <p>Wait to be connected with a client</p>
              </div>
              <div className="details_col">
                <CiMail />
                <p>Get the job done & get paid</p>
              </div>
            </div>
            <Link to="/talent-signup" className="onboard">
              Get Started
            </Link>
            <p className="onboard_txt">
              It only takes 5-10 minutes and you can edit it later. We’ll save
              as you go.
            </p>
          </div>
          <div className="onboarding_right">
            <img src="/onboarding.png" alt="onboard" />
          </div>
        </div>
      </div>
      <Footer />
      <MainFooter />
    </div>
  );
};

export default FreelancerOnboarding;
