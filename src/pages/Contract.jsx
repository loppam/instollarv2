import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import MainFooter from "../components/MainFooter";
import { Link } from "react-router-dom";

const Contract = () => {
  return (
    <div className="contract">
      {/* <Navbar /> */}
      <div className="margin_content">
        <h3>SCOPE OF AGREEMENT</h3>
        <p>
          The Subject of this Agreement is delivering of Instollar workforce on
          a freelancing services as detailed in the Terms of Service for a
          certain fee. In this context, the scope of the services rendered by
          Instollar shall only be expanded or narrowed within the written mutual
          consent of the parties
        </p>
        <h3>FINANCIAL PROVISIONS</h3>
        <p>
          The total service fee to be paid under this agreement is stated in the
          Prices and Payments page and will be collected as stated therein,
          varying by the type of service you request from our Freelancers.
        </p>
        <h3>OWNERSHIP</h3>
        <p>
          The parties acknowledge that the Solar Company (Client) shall hold all
          rights proprietary in any work product resulting from the services
          rendered by Freelancers hired on Instollar.
        </p>
        <p>
          Instollar agrees not to claim any such ownership in any solar project
          by Freelancers hired on this platform before, during, or upon
          completion of the project inasmuch as the Solar Company (Client) has
          fulfilled all the validation, pricing and payment terms required by
          Instollar.
        </p>
        <p>
          Instollar LLC serving as a connection between the both parties will
          only be eligible to a fee subject to the total amount being paid to
          the freelancer.
        </p>

        <p>
          Review our <Link to="/terms-and-conditions" >Terms of Service</Link>
        </p>
        <h3>CONFIDENTIALITY</h3>
        <p>
          Instollar undertakes for itself and guarantees to keep confidential
          any information relating to or that was disclosed in preparation of or
          as required during registration, or under any Agreement signed on the
          platform and to prevent the passing on of such information to third
          parties other than mandatory notification responsibilities under Law.
        </p>
      </div>
      <Footer />
      <MainFooter />
    </div>
  );
};

export default Contract;
