import React from "react";
import Navbar from "../components/Navbar";
import MainFooter from "../components/MainFooter";
import Footer from "../components/footer";

const TandC = () => {
  return (
    <div>
      <Navbar />
      <div className="tandc">
        <div className="tandc_hero">
          <div className="tandc_hero_content">
            <div className="tandc_hero_content-txt">
              <h3>Certification, Expert Training & Accreditation </h3>
              <hr />
              <p>
                Welcome to the Instollar Green Talent Training section. A huge
                emphasis is placed on our training and retraining of our
                freelancers to ensure quality assurance & control, technical
                competence, seamless & effective project delivery and guarantee
                of system and personnel safety.
              </p>
            </div>
            <img src="/tandc/img1.png" alt="" />
          </div>
        </div>
        <div className="tandc_main">
          <video
            src="https://cdn.storehippo.com/s/632301d4abfad7001a260a94/ms.files/assets/0504(1).mp4"
            width="100%"
            height="100%"
            autoplay
            loop
            controls
          ></video>
          <img src="/tandc/img2.png" alt="" />
        </div>
      </div>
      <div className="become">
        <div className="become_content">
          <h4>BECOME AN INSTOLLAR</h4>
          <div className="become_content_flex">
            <img src="/tandc/img3.png" alt="" />
            <div className="become_txt">
              <p className="step">Step 1</p>
              <p className="desc">
                Green collar talent registration to become an Instollar
                Freelancer.
              </p>
            </div>
          </div>
          <div className="become_content_flex">
            <div className="become_txt">
              <p className="step">Step 2</p>
              <p className="desc">
                Complete the mandatory evaluation according to your skill
                category. You will receive email verification confirming your
                status as a Freelancer.
              </p>
            </div>
            <img src="/tandc/img4.png" alt="" />
          </div>
          <div className="become_content_flex">
            <img src="/tandc/img5.png" alt="" />
            <div className="become_txt">
              <p className="step">Step 3</p>
              <p className="desc">Go through Instollar mandatory induction.</p>
            </div>
          </div>
          <div className="become_content_flex">
            <div className="become_txt">
              <p className="step">Step 4</p>
              <p className="desc">
                Once you complete the induction you will receive your qualified
                pool status with your personal dashboard.
              </p>
            </div>
            <img src="/tandc/img6.png" alt="" />
          </div>
        </div>
      </div>
        <div className="ionboarding">
              <h3>INSTOLLAR ONBOARDING COURSE OUTLINE</h3>
              <img src="/tandc/img7.png" alt="" />
        </div>
      <Footer />
      <MainFooter />
    </div>
  );
};

export default TandC;
