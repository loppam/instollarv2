import React from "react";
import { useState } from "react";
import { auth } from "../components/firebase";
import { Link } from "react-router-dom";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
const login = () => {
  const LoginHandler = async (e) => {
    e.preventDefault();
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
                  // value={user.email}
                  name="email"
                  // onChange={UserHandler}
                />
              </div>
              <div className="log-inputfield">
                <input
                  type="password"
                  placeholder="Password"
                  // value={user.password}
                  name="password"
                  // onChange={UserHandler}
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
            <h3>Where <span className="coll">Green</span> Thrives</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
