import React, { useEffect, useState } from "react";
import { useCompanyAuth } from "../context/CompanyAuthContext";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import MainFooter from "../components/MainFooter";
import Footer from "../components/footer";

const companysignup = () => {
  const { error, SignUp, currentuser } = useCompanyAuth();
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
    confirmPassword: "",
    password: "",
  });
  useEffect(() => {
    // console.log("I am in");
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
    } = company;
    if (
      password == "" ||
      confirmPassword == "" ||
      email == "" ||
      Offaddress == "" ||
      PhoneNumber == "" ||
      BusinessName == "" ||
      CACNO == "" ||
      yrsio == "" ||
      expertise == ""
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
        expertise
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
          });
      }
    }
  };
  return (
    <div className="companysignup">
      {/* <Navbar /> */}
      <div className="margin_content">
        <div className="companysignup_content">
          <h2>Register Your Business With Instollar</h2>
          <div className="talentparr">
            <p className="talentpar">(*) Required Information</p>
          </div>
          <div className="header_img">
            <img src="/lp/instollardark.png" alt="" />
          </div>
          {err
            ? err && <p className="error">{err}</p>
            : backError && <p className="error">{backError}</p>}
          <form onSubmit={SubmitHandler} className="companysignup_form">
            <div className="inputfield">
              <label htmlFor="email">Email Address (*)</label>
              <input
                type="email"
                placeholder="Enter email address"
                value={company.email}
                name="email"
                onChange={UserHandler}
              />
            </div>
            <div className="inputfield">
              <label htmlFor="PhoneNumber">Phone Number (*)</label>
              <input
                type="tel"
                placeholder="Enter phone number"
                value={company.PhoneNumber}
                name="PhoneNumber"
                onChange={UserHandler}
              />
            </div>
            <div className="inputfield">
              <label htmlFor="BusinessName">Business Name (*)</label>
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
              <label htmlFor="yrsio">Years in Operation (*)</label>
              <select
                name="yrsio"
                value={company.yrsio}
                onChange={UserHandler}
                id="yrsio"
              >
                <option value=">1">Less Than 1</option>
                <option value="1-5">1-5</option>
                <option value="6-10">6-10</option>
                <option value="10+">10+</option>
              </select>
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
            <div className="confirmationfield">
              <div className="confirmationfield_col">
                <input type="checkbox" name="tandc" />
                <p>
                  Website Terms & Conditions{" "}
                  <Link target="_blank" to="/terms-and-conditions">
                    READ HERE
                  </Link>{" "}
                  (*)
                </p>
              </div>

              <div className="confirmationfield_col">
                <input type="checkbox" name="canda" />
                <p>
                  Contract & Agreement{" "}
                  <Link target="_blank" to="/contract-and-agreement">
                    READ HERE
                  </Link>{" "}
                  (*)
                </p>
              </div>
              <div className="confirmationfield_col">
                <input type="checkbox" name="training sponsorship" />
                <p>
                  I am interested in Training Sponsorships{" "}
                  <Link target="_blank" to="/training-and-sponsorship">
                    READ HERE
                  </Link>
                </p>
              </div>
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
              <input type="submit" className="sub" value="Register" />
            </div>
          </form>
          <div className="talentparr">
            <p className="log">
              Already a member?{" "}
              <Link className="logg" to="/login">
                Sign In Now
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <MainFooter />
    </div>
  );
};

export default companysignup;
