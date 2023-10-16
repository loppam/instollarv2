import React, { useEffect, useState } from "react";
import { useAuth } from "../context/UserAuthContext";
import { Link } from "react-router-dom";
import { BsLinkedin, BsFacebook } from "react-icons/bs";

const Talentsignup = () => {
  const { error, SignUp, currentuser } = useAuth();
  const [err, setError] = useState("");
  const [backError, setBackError] = useState("");
  const [user, setUser] = useState({
    FullName: "",
    email: "",
    address: "",
    PhoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  useEffect(() => {
    console.log("I am in");
    if (error) {
      setInterval(() => {
        setBackError("");
      }, 5000);
      setBackError(error);
    }
  }, [error, currentuser]);
  const UserHandler = (e) => {
    const { name, value } = e.target;
    setUser((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  const SubmitHandler = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword, FullName, address, PhoneNumber } =
      user;
    if (
      password == "" ||
      confirmPassword == "" ||
      email == "" ||
      address == "" ||
      PhoneNumber == "" ||
      FullName == ""
    ) {
      setInterval(() => {
        setError("");
      }, 10000);
      return setError("Please fill all field");
    } else if (password !== confirmPassword) {
      setInterval(() => {
        setError("");
      }, 10000);
      return setError("Passwords dont match");
    } else if (!password.length >= 6 || !confirmPassword.length >= 6) {
      setInterval(() => {
        setError("");
      }, 10000);
      return setError("Passwords should be more than 6");
    } else {
      SignUp(email, password, FullName, PhoneNumber, address);
      {
        currentuser &&
          setUser({
            FullName: "",
            email: "",
            password: "",
            confirmPassword: "",
            PhoneNumber: "",
            address: "",
          });
      }
    }
  };
  return (
    <div className="talentsignup">
      <div className="margin_content">
        <header className="logo2">
          <img src="/lp/instollar.png" alt="" />
        </header>
        <div className="talentsignup_content">
          <h2>Sign Up</h2>
          <div className="signupextention">
            <Link>
              <BsLinkedin /> Sign up with LinkedIn
            </Link>
            <Link>
              <BsFacebook /> Sign up with Facebook
            </Link>
          </div>
          {err
            ? err && <p className="error">{err}</p>
            : backError && <p className="error">{backError}</p>}
          <form onSubmit={SubmitHandler} className="talentsignup_form">
            <div className="inputfield">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                placeholder="Enter email address"
                value={user.email}
                name="email"
                onChange={UserHandler}
              />
            </div>
            <div className="inputfield">
              <label htmlFor="FullName">Full Name</label>
              <input
                type="text"
                placeholder="Enter Surname First"
                value={user.FullName}
                name="FullName"
                onChange={UserHandler}
              />
            </div>

            <div className="inputfield">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                value={user.password}
                name="password"
                onChange={UserHandler}
              />
            </div>
            <div className="inputfield">
              <label htmlFor="ConfirmPassword">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                value={user.confirmPassword}
                name="confirmPassword"
                onChange={UserHandler}
              />
            </div>
            <div className="inputfield">
              <label htmlFor="PhoneNumber">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter phone number"
                value={user.PhoneNumber}
                name="PhoneNumber"
                onChange={UserHandler}
              />
            </div>
            <div className="inputfield">
              <label htmlFor="Address">Address</label>
              <input
                type="text"
                placeholder="Enter your full address"
                value={user.address}
                name="address"
                onChange={UserHandler}
              />
            </div>

            <hr />

            <div className="policy">
              <p>
                Yes, I understand and agree to the Instollar Terms of Service,
                including the User Agreement and Privacy Policy.
              </p>
              <input type="checkbox" required name="" id="" />
            </div>

            <div className="inputfield">
              <input type="submit" value="Register" />
            </div>
          </form>
          <p className="log">
            Already a member?{" "}
            <Link className="log" to="/login">
              Sign In Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Talentsignup;
