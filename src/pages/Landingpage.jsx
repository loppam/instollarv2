import React from "react";
import Swiper from "../components/swiper";
import { AiOutlineArrowRight } from "react-icons/ai";
import Footer from "../components/footer";
import Feedback from "../components/feedback";
import Navbar from "../components/Navbar";

import MainFooter from "../components/MainFooter";
import { Link } from "react-router-dom";
const Landingpage = () => {
  return (
    <div className="landingpage">
      {/* <Navbar /> */}

      <div className="hero">
        <div className="content">
          <div className="hero_flex">
            {/* <img src="/lp/hero-img.png" className="absolute" alt="" /> */}

            <h1>
              Find top <span className="coll">Green Energy Talents</span> near
              you
            </h1>
            <div className="hero_search">
              <div className="search_box">
                <div className="search_flex">
                  <select className="dropdown" name="job" id="worker">
                    <option value="">Green Energy Talent Category</option>
                    <option value="mini-grid installer">
                      Mini-Grid Installer
                    </option>
                    <option value="residential installer">
                      Residential Installer
                    </option>
                    <option value="commercial installer">
                      Commercial Installer
                    </option>
                    <option value="private installer">Private Installer</option>
                  </select>
                  <div className="marker">
                    <select
                      className="dropdown location"
                      name="location"
                      id="location"
                    >
                      <option value="">State</option>
                      <option value="lagos">Lagos</option>
                      <option value="kwara">Kwara</option>
                      <option value="oyo">Oyo</option>
                    </select>
                  </div>
                </div>
                <input className="submit" type="submit" value="Search" />
              </div>
            </div>
          </div>
        </div>
        <div className="trust">
          <div className="content">
            <div className="trust_flex">
              <p>Trusted by:</p>
              <div className="product">
                <img src="/lp/comp.png" alt="" />
                <img src="/lp/comp1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="top">
        <div className="content">
          <h2>Top Green Energy Talents</h2>
          <Swiper />
        </div>
      </div>
      <div className="business">
        <div className="business_content">
          <div className="bus_text">
            <div className="text_content">
              <h3>
                <img src="/lp/instollar.png" alt="" /> Business
              </h3>
              <h2>Multiple Installations? We can assist you!</h2>
              <p>
                Our team can help you find the right talents for your solar
                installation projects.
              </p>
              <Link to="/instollar-business">Discover Instollar Business</Link>
            </div>
          </div>
          <img className="bus" src="/lp/business.png" alt="" />
        </div>
      </div>
      <div className="browse">
        <div className="content">
          <h3>Browse our network by category</h3>
          <h4>
            What type of project are you working on. We have talents to match
            your specific need!
          </h4>
          <div className="browse_flex">
            <div className="row">
              <img src="/lp/vector.png" alt="" />
              <p>Residential Installation</p>
            </div>
            <div className="row">
              <img src="/lp/vector-1.png" alt="" />
              <p>Mini/Micro - Grid Installation</p>
            </div>
            <div className="row">
              <img src="/lp/vector-2.png" alt="" />
              <p>Commercial Installation</p>
            </div>
          </div>
        </div>
      </div>
      <div className="join">
        <div className="join_content">
          <div className="join_text">
            <div className="text_content">
              <h2>Join Africa’s No. 1 Green Job Marketplace</h2>
              <p>
                Become a part of our community today. We connect professionals
                and companies in the green energy industry.
              </p>
              <Link to="/pre-signup">Take The First Step</Link>
            </div>
          </div>
          <img src="/lp/firststep.png" alt="" className="firststep" />
        </div>
      </div>
      <div className="client">
        <Feedback />
      </div>
      <div className="end">
        <div className="end_content">
          <div className="learn">
            <div className="learn_content">
              <h2>Learn</h2>
              <p>
                Upgrade your skills, improve your visibility, and boost your
                career with our training and certification program.
              </p>
              <button>
                <h3>Training & Certification</h3>
                <Link to="/training-and-certification" className="flex_btn">
                  <p>
                    Learn more about our certifications, trainings &
                    accreditation.
                  </p>
                  <AiOutlineArrowRight className="p" />
                </Link>
              </button>
            </div>
          </div>
          <div className="impact">
            <div className="impact_content">
              <h2>Impact</h2>
              <p>
                Support us in training and spreading the knowledge of solar
                installation amongst solar engineers.
              </p>
              <button>
                <h3>Training Sponsorship</h3>
                <Link to='/training-and-sponsorship' className="flex_btn">
                  <p>
                    Work with us to spread the knowledge of solar installation
                  </p>
                  <AiOutlineArrowRight className="p" />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <MainFooter />
    </div>
  );
};

export default Landingpage;
