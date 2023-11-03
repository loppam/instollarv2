import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import MainFooter from "../components/MainFooter";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <Navbar />
      <div className="e404">
        <h1>404</h1>
      </div>
      <div className="content_box">
        <h2>Looks Like you're lost</h2>
        <p>The page you are looking for is not available!</p>
        <Link to="/">Go To Home</Link>
      </div>
      <Footer />
      <MainFooter />
    </div>
  );
};

export default Error;
