import React from "react";
import { useState } from "react";
import { auth } from "../components/firebase";
import { Link } from "react-router-dom";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { signInWithEmailAndPassword } from "firebase/auth";
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
      <div className="login-flex">
        <div className="login-left">
          <header className="logo">
            <img src="/lp/instollardark.png" alt="" />
          </header>
          <div className="login-left_content">
            <h2>Sign In</h2>
            <div className="loginextention">
              <Link>
                <BsLinkedin /> Sign in with LinkedIn
              </Link>
              <Link>
                <BsFacebook /> Sign in with Facebook
              </Link>
            </div>
            <div className="or">
              <hr />
              or
              <hr />
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
            <div className="login-extra">
              <div className="check">
                <input type="checkbox" name="" id="" />
                Remember me
              </div>
              <Link>Forgot Password</Link>
            </div>
            <hr className="loginhr" />
            <p className="log">
              Not a member?{" "}
              <Link className="logg" to="/pre-signup">
                Join Now
              </Link>
            </p>
          </div>
        </div>
        <div className="login-right">
          <div className="login-right_flex">
            <img src="/lp/team.png" alt="" />
            <h3>
              Where <span className="coll">Green</span> Thrives
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
