import React from "react";
import { useState } from "react";
import { auth } from "../components/firebase";
import { Link } from "react-router-dom";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { signInWithEmailAndPassword } from "firebase/auth";
import Navbar from "../components/Navbar";
import MainFooter from "../components/MainFooter";
import Footer from "../components/footer";
const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const LoginHandler = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login">
      <Navbar />
      <div className="login-flex">
        <h2>Login to Instollar</h2>
        <div className="header_img">
          <img src="/lp/instollardark.png" alt="" />
        </div>
        <form onSubmit={LoginHandler} className="login_form">
          <div className="log-inputfield">
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="log-inputfield">
            <input
              type="password"
              placeholder="Password"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input type="submit" value="Sign In" />
        </form>
        <p className="log">
          Not a member?{" "}
          <Link className="logg" to="/pre-signup">
            Join Now
          </Link>
        </p>
      </div>
      <Footer />
      <MainFooter />
    </div>
  );
};

export default login;
