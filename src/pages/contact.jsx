import React from "react";
import Navbar from "../components/Navbar";
import MainFooter from "../components/MainFooter";
import Footer from "../components/footer";
import { MdLocationPin, MdEmail, MdLocalPhone } from "react-icons/md";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

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
                  <Link className="tsign" to="/talent-signup">
                    Proceed with Registration
                  </Link>
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
                  <Link className="tsign" to="/company-signup">
                    Proceed with Registration
                  </Link>
                  <Link className="tsign_alt" to="/instollar-business">
                    Instollar Business
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="form">
          <h1>Still need Help?</h1>
          <p>Get in touch with someone to help you find what to do next.</p>
          <div className="form_main">
            <div className="form_content">
              <div className="form_cflex">
                <div className="form_left">
                  <h3>Contact Form</h3>
                  <form className="formleft" action="">
                    <input
                      className="form_control"
                      type="text"
                      placeholder="Name"
                      name=""
                      id=""
                    />
                    <input
                      className="form_control"
                      type="email"
                      placeholder="Email"
                      name=""
                      id=""
                    />
                    <PhoneInput country={"ng"} />
                    <select
                      className="form_control"
                      id="subject"
                      name="subject"
                    >
                      <option label="Inquiry">Inquiry</option>
                      <option label="Instollar Business (Corporate Booking)">
                        Instollar Business (Corporate Booking)
                      </option>
                      <option
                        label="Green Energy Freelancer"
                        selected="selected"
                      >
                        Green Energy Freelancer
                      </option>
                    </select>
                    <textarea
                      className="form_control"
                      id="message"
                      name="message"
                      rows="3"
                      placeholder="Enter Message"
                    ></textarea>
                  </form>
                </div>
                <hr />
                <div className="form_right">
                  <img src="/contact/img3.png" alt="" />
                  <div className="location">
                    <MdLocationPin className="styled" />
                    Instollar LLC - Nigeria AfricaWorks Block D16 Idowu Martins
                    Street VI Lagos Island, Lagos, Nigeria
                  </div>
                  <div className="location">
                    <MdLocationPin className="styled" />
                    Instollar LLC - USA 201 N McDowell St #31064 Charlotte, NC
                    28204, USA
                  </div>
                  <Link to="mailto:info@instollar.com">
                    <MdEmail className="styled" />
                    info@instollar.com
                  </Link>
                  <Link to="tel:+2349134446568">
                    <MdLocalPhone className="styled" />
                    +2349134446568
                  </Link>
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
