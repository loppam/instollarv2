import React from "react";
import Navbar from "../components/Navbar";
import MainFooter from "../components/MainFooter";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

const contact = () => {
  return (
    <div>
      <Navbar />
      <div className="contact">
        <header>
          <h2>Contact Us</h2>
        </header>
        <div className="guide">
          <h2>Instollar Guide</h2>
          <h3>Lets tell you the next step to take</h3>
          <p>Our website is designed for two category of professionals</p>
          <p>
            Solar Engineers looking to join our pool of Engineers. <br />
            Companies looking to hire engineers to get that installation job
            done
          </p>
          <p>
            The first part addresses the Solar Engineers, so feel free to skip
            along if you are representing a company.
          </p>
        </div>
        <div className="end">
          <div className="end_content">
            <div className="get">
              <div className="get_content">
                <h2>Green Energy Talent</h2>
                <img src="/contact/img2.png" alt="" />
                <p>
                  Green Energy Talents can register on our website to be open to
                  the opportunity of getting hired for a solar installation job.
                </p>
                <div className="flex_btnn">
                  <Link className="tsign" to="/talent-signup">Proceed with Registration</Link>
                  <Link className="tsign_alt" to="/training-and-certification">
                    Training & Certification
                  </Link>
                </div>
              </div>
            </div>
            <div className="sc">
              <div className="sc_content">
                <h2>Solar Companies</h2>
                <img src="/contact/img1.png" alt="" />
                <p>
                  Solar Companies can register on our website and get their
                  projects completed in two ways. You can hire a green talent
                  directly from our website, or use our Instollar Business
                  service and we will go through the whole hiring and
                  supervision of the freelancer on your behalf.
                </p>
                <div className="flex_btnn">
                  <Link className="tsign" to="/company-signup">Proceed with Registration</Link>
                  <Link className="tsign_alt" to="/instollar-business">Instollar Business</Link>
                </div>
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

export default contact;
