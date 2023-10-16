import React, { useEffect, useState } from "react";
import { useAuth } from "../context/companyAuthcontext";
import { Link } from "react-router-dom";
import { BsLinkedin, BsFacebook } from "react-icons/bs";

const companysignup = () => {
  const { error, SignUp, currentuser } = useAuth();
  const [err, setError] = useState("");
  const [backError, setBackError] = useState("");
  const [company, setCompany] = useState({
    email: "",
    PhoneNumber: "",
    BusinessName: "",
    Offaddress: "",
    CACNO: "",
    yrsio: "",
    expertise: "",
    note: "",
    confirmPassword: "",
    password: "",
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
    setCompany((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  const SubmitHandler = async (e) => {
    e.preventDefault();
    const {
      email,
      password,
      confirmPassword,
      PhoneNumber,
      BusinessName,
      Offaddress,
      CACNO,
      yrsio,
      expertise,
      note,
    } = company;
    if (
      password == "" ||
      confirmPassword == "" ||
      email == "" ||
    //   Offaddress == "" ||
      PhoneNumber == "" ||
      BusinessName == "" ||
    //   CACNO == "" ||
      yrsio == "" ||
      expertise == "" ||
      note == ""
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
      SignUp(
        email,
        password,
        BusinessName,
        PhoneNumber,
        Offaddress,
        CACNO,
        yrsio,
        expertise,
        note
      );
      {
        currentuser &&
          setCompany({
            email: "",
            PhoneNumber: "",
            BusinessName: "",
            Offaddress: "",
            confirmPassword: "",
            password: "",
            CACNO: "",
            yrsio: "",
            expertise: "",
            note: "",
          });
      }
    }
  };
  return (
    <div className="companysignup">
      <div className="margin_content">
        <header className="logo2">
          <img src="/lp/instollar.png" alt="" />
        </header>
        <div className="companysignup_content">
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
          <form onSubmit={SubmitHandler} className="companysignup_form">
            <div className="inputfield">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                placeholder="Enter email address"
                value={company.email}
                name="email"
                onChange={UserHandler}
              />
            </div>
            <div className="inputfield">
              <label htmlFor="PhoneNumber">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter phone number"
                value={company.PhoneNumber}
                name="PhoneNumber"
                onChange={UserHandler}
              />
            </div>
            <div className="inputfield">
              <label htmlFor="BusinessName">Business Name</label>
              <input
                type="text"
                placeholder="Enter Business Name"
                value={company.BusinessName}
                name="BusinessName"
                onChange={UserHandler}
              />
            </div>
            <div className="inputfield">
              <label htmlFor="OffAddress">Office Address</label>
              <input
                type="text"
                placeholder="Enter your full address"
                value={company.Offaddress}
                name="Offaddress"
                onChange={UserHandler}
              />
            </div>

            <div className="inputfield">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                value={company.password}
                name="password"
                onChange={UserHandler}
              />
            </div>
            <div className="inputfield">
              <label htmlFor="ConfirmPassword">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                value={company.confirmPassword}
                name="confirmPassword"
                onChange={UserHandler}
              />
            </div>
            <div className="inputfield">
              <label htmlFor="cacno">CAC Reg Number</label>
              <input
                type="text"
                onChange={UserHandler}
                value={company.CACNO}
                name="CACNO"
                placeholder="Enter your cac registration number"
              />
            </div>

            <div className="inputfield">
              <label htmlFor="yrsio">Years in Operation</label>
              <input
                type="text"
                placeholder="Enter Number of years"
                value={company.yrsio}
                name="yrsio"
                onChange={UserHandler}
              />
            </div>
            <div className="inputfield">
              <label htmlFor="expertise">Project Expertise</label>
              <input
                type="text"
                placeholder="Enter Your Expertise"
                value={company.expertise}
                name="expertise"
                onChange={UserHandler}
              />
            </div>
            <div className="inputfield">
              <label htmlFor="note">Note</label>
              <input
                type="text"
                placeholder="Anything else you want to communicate to Instollar"
                value={company.note}
                name="note"
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
              <input type="submit" className="sub" value="Register" />
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

export default companysignup;
