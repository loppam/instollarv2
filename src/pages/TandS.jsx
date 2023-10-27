import React from "react";
import Navbar from "../components/Navbar";
import MainFooter from "../components/MainFooter";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

const TandS = () => {
  return (
    <div>
      <Navbar />
      <div className="sponsorship">
        <div className="sponsorship_head">
          <div className="sponsorship_head_content">
            <h2>Training Sponsorship</h2>
            <p>Collaborate, Train, Influence</p>
            <Link to="tel:+2349134446568">Sponsor a Training</Link>
          </div>
        </div>
        <div className="sponsorship_main">
          <div className="sponsorship_main_content">
            <p>
              A huge emphasis is placed on training and retraining the workforce
              to ensure quality assurance & control, technical competence,
              seamless & effective project delivery, and guarantee of system and
              personnel safety.
            </p>
            <div className="img_flex">
              <img src="/spons/img1.png" alt="" />
              <div className="inner_img_flex">
                <img src="/spons/img2.png" alt="" />
                <img src="/spons/img3.png" alt="" />
              </div>
            </div>
            <div className="badge">
              <div className="badge_txt">
                <h2>EARN A BADGE CONCEPT</h2>
                <p>
                  With customized training for individual products and brands,
                  the technicians and engineers on our platform earn badges
                  (dedicated to the brand) which is a symbol of their competence
                  and specialization on such products. Hence, they are easily
                  deployed to work on specific brand/product-based renewable
                  energy project.
                </p>
              </div>
              <div className="badge_img">
                <img src="/spons/img4.png" alt="" />
                <img src="/spons/img5.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="main_alt">
          <h2>THE NEED FOR INDUSTRY PARTNERSHIPS</h2>
          <h3>
            Partnerships with Original Equipment Manufacturers (OEM) to partner
            with Instollar LLC to Train and Equip the African workforce.
          </h3>
          <p>
            Eliminate quackery with our premium process and hands-on technical
            training Gain Pan African brand visibility Gain influencers in
            product patronage A pool of trained personnel in every location with
            your product knowledge Significant cost reduction on technical
            training CSR contribution to SDG
          </p>
        </div>
      </div>

      <Footer />
      <MainFooter />
    </div>
  );
};

export default TandS;
