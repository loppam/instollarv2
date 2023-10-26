import React from "react";
import Navbar from "../components/Navbar";
import MainFooter from "../components/MainFooter";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

const Business = () => {
  return (
    <div>
      <Navbar />
      <div className="ibusiness">
        <div className="ibusiness_hero">
          <div className="ibusiness_flex">
            <div className="ibusiness_flex-txt">
              <h3>Instollar Business</h3>
              <h2>
                Your business;
                <br />
                Our Priority
              </h2>
              <p>
                Let our experts handle your project while you handle your
                business
              </p>
              <div className="flex_btnn">
                <Link to="tel:+2349134446568" className="talk">
                  Talk to an expert
                </Link>
                <Link to="/company-signup" className="register">
                  Register
                </Link>
              </div>
            </div>
            <img src="/business/img1.png" alt="" />
          </div>
        </div>
        <div className="ibusiness_main">
          <div className="ibusiness_content">
            <h2>How It Works</h2>
            <p>Instollar Business gets the job done for you</p>
            <div className="ibusiness_content_flex">
              <img src="/business/img2.png" alt="" />
              <div className="business_txt">
                <h3>Register With Us</h3>
                <p>Register and share the details of your project with us. </p>
              </div>
            </div>
            <div className="ibusiness_content_flex">
              <img src="/business/img3.png" alt="" />
              <div className="business_txt">
                <h3>We will Reach Out to You</h3>
                <p>
                  Your Key Account Manager would reach out to you and give you
                  live feedback on the Project Progress.
                </p>
              </div>
            </div>
            <div className="ibusiness_content_flex">
              <img src="/business/img4.png" alt="" />
              <div className="business_txt">
                <h3>Get the job done</h3>
                <p>
                  We will supervise and ensure your installation is successfully
                  completed.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ibusiness_hero_alt">
          <div className="ibusiness_flex_alt">
            <img src="/business/img5.png" alt="" />
            <div className="ibusiness_flex-txt">
              <h2>Train Installers to become your Brand Ambassadors.</h2>
              <p>
                Sponsor Product Trainings to equip installers with your Products
                knowledge and installation skills.
              </p>
              <div className="flex_btnn">
                <Link to="tel:+2349134446568" className="talk">
                  Sponsor a Training
                </Link>
                <Link to="/training-sponsorship" className="register">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <MainFooter />
    </div>
  );
};

export default Business;
