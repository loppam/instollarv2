import React, { useEffect, useState } from "react";
import { useAuth } from "../context/UserAuthContext";
import { Link } from "react-router-dom";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import Navbar from "../components/Navbar";

const Talentsignup = () => {
  const { error, SignUp, currentuser } = useAuth();
  const [err, setError] = useState("");
  const [backError, setBackError] = useState("");
  const [user, setUser] = useState({
    UserName: "",
    email: "",
    address: "",
    PhoneNumber: "",
    password: "",
    FirstName: "",
    LastName: "",
    CityofRes: "",
    LGAofRes: "",
    id: "",
    YearsofExp: "",
    ResExp: "",
    CommercialExp: "",
    MiniGridExp: "",
    link: "",
    ProofAddress: "",
    stateOfResidence: "",
    language: "",
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
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUser((prev) => ({
        ...prev,
        [e.target.name]: reader.result,
      }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const SubmitHandler = async (e) => {
    e.preventDefault();
    const {
      UserName,
      email,
      address,
      PhoneNumber,
      password,
      FirstName,
      LastName,
      CityofRes,
      LGAofRes,
      id,
      YearsofExp,
      ResExp,
      CommercialExp,
      MiniGridExp,
      link,
      ProofAddress,
      stateOfResidence,
      language,
    } = user;
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
      return setError("Passwords don't match");
    } else if (!password.length >= 6 || !confirmPassword.length >= 6) {
      setInterval(() => {
        setError("");
      }, 10000);
      return setError("Passwords should be more than 6");
    } else {
      SignUp(
        UserName,
        email,
        address,
        PhoneNumber,
        password,
        FirstName,
        LastName,
        CityofRes,
        LGAofRes,
        id,
        YearsofExp,
        ResExp,
        CommercialExp,
        MiniGridExp,
        link,
        ProofAddress,
        stateOfResidence,
        language
      );
      {
        currentuser &&
          setUser({
            UserName: "",
            email: "",
            address: "",
            PhoneNumber: "",
            password: "",
            FirstName: "",
            LastName: "",
            CityofRes: "",
            LGAofRes: "",
            id: "",
            YearsofExp: "",
            ResExp: "",
            CommercialExp: "",
            MiniGridExp: "",
            link: "",
            ProofAddress: "",
            stateOfResidence: "",
            language: "",
          });
      }
    }
  };
  return (
    <div className="talentsignup">
      <Navbar />
      <div className="margin_content">
        <div className="talentsignup_content">
          <div className="header_img">
            <img src="/lp/instollardark.png" alt="" />
          </div>
          <h2>Freelancer Registration - Join Our Network</h2>
          <div className="talentparr">
            <p className="talentpar">(*) Required Information</p>
          </div>
          {err
            ? err && <p className="error">{err}</p>
            : backError && <p className="error">{backError}</p>}
          <form onSubmit={SubmitHandler} className="talentsignup_form">
            <div className="login_info">
              <h1>Login Information</h1>
              <div className="inputfield">
                <label htmlFor="UserName">Unique Username (*)</label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  value={user.UserName}
                  name="UserName"
                  onChange={UserHandler}
                />
              </div>
              <div className="inputfield">
                <label htmlFor="email">Email Address (*)</label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  value={user.email}
                  name="email"
                  onChange={UserHandler}
                />
              </div>

              <div className="inputfield">
                <label htmlFor="password">Password (*)</label>
                <input
                  type="password"
                  placeholder="Password"
                  value={user.password}
                  name="password"
                  onChange={UserHandler}
                />
              </div>
            </div>
            <div className="contact_details">
              <h1>Contact Details</h1>
              <div className="inputfield">
                <label htmlFor="Picture">
                  Profile Picture (300x300px recommended) (*)
                </label>
                <input
                  accept="image/*"
                  type="file"
                  name="Picture"
                  placeholder="Upload Picture"
                  onChange={handleFileChange}
                  required
                />
              </div>
              <div className="inputfield">
                <label htmlFor="gender">Gender (*)</label>
                <select name="gender" id="" onChange={UserHandler} required>
                  <option value=""></option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="inputfield">
                <label htmlFor="FirstName">First Name (*)</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  value={user.FirstName}
                  name="FirstName"
                  onChange={UserHandler}
                />
              </div>
              <div className="inputfield">
                <label htmlFor="LastName">Last Name (*)</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  value={user.LastName}
                  name="LastName"
                  onChange={UserHandler}
                />
              </div>
              <div className="inputfield">
                <label htmlFor="Address">Address (*)</label>
                <input
                  type="text"
                  placeholder="Enter Address"
                  value={user.address}
                  name="Address"
                  onChange={UserHandler}
                />
              </div>
              <div className="inputfield">
                <label htmlFor="CityofResidence">City of Residence (*)</label>
                <input
                  type="text"
                  placeholder="City of Residence"
                  value={user.CityofRes}
                  name="CityofRes"
                  onChange={UserHandler}
                />
              </div>
              <div className="inputfield">
                <label htmlFor="LGAofResidence">LGA of Residence (*)</label>
                <input
                  type="text"
                  placeholder="LGA of Residence"
                  value={user.LGAofRes}
                  name="LGAofRes"
                  onChange={UserHandler}
                />
              </div>
              <div className="inputfield">
                <label htmlFor="StateofResidence">State of Residence (*)</label>
                <select
                  name="stateOfResidence"
                  value={user.stateOfResidence}
                  id=""
                >
                  <option disabled value="">
                    Select your state?
                  </option>
                  <option value="ABUJA FCT">ABUJA FCT</option>
                  <option value="ABIA">ABIA</option>
                  <option value="ADAMAWA">ADAMAWA</option>
                  <option value="AKWA IBOM">AKWA IBOM</option>
                  <option value="ANAMBRA">ANAMBRA</option>
                  <option value="BAUCHI">BAUCHI</option>
                  <option value="BAYELSA">BAYELSA</option>
                  <option value="BENUE">BENUE</option>
                  <option value="BORNO">BORNO</option>
                  <option value="CROSS RIVER">CROSS RIVER</option>
                  <option value="DELTA">DELTA</option>
                  <option value="EBONYI">EBONYI</option>
                  <option value="EDO">EDO</option>
                  <option value="EKITI">EKITI</option>
                  <option value="ENUGU">ENUGU</option>
                  <option value="GOMBE">GOMBE</option>
                  <option value="IMO">IMO</option>
                  <option value="JIGAWA">JIGAWA</option>
                  <option value="KADUNA">KADUNA</option>
                  <option value="KANO">KANO</option>
                  <option value="KATSINA">KATSINA</option>
                  <option value="KEBBI">KEBBI</option>
                  <option value="KOGI">KOGI</option>
                  <option value="KWARA">KWARA</option>
                  <option value="LAGOS">LAGOS</option>
                  <option value="NASSARAWA">NASSARAWA</option>
                  <option value="NIGER">NIGER</option>
                  <option value="OGUN">OGUN</option>
                  <option value="ONDO">ONDO</option>
                  <option value="OSUN">OSUN</option>
                  <option value="OYO">OYO</option>
                  <option value="PLATEAU">PLATEAU</option>
                  <option value="RIVERS">RIVERS</option>
                  <option value="SOKOTO">SOKOTO</option>
                  <option value="TARABA">TARABA</option>
                  <option value="YOBE">YOBE</option>
                  <option value="ZAMFARA">ZAMFARA</option>
                </select>
              </div>
              <div className="inputfield">
                <label htmlFor="Country">Country (*)</label>
                <select name="country" id="country">
                  <option value="Nigeria">Nigeria</option>
                </select>
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
                <label htmlFor="StateofResidence">State of Residence (*)</label>
                <select name="states" id="states">
                  <option disabled value="">
                    Select your state?
                  </option>
                  <option value="ABUJA FCT">ABUJA FCT</option>
                  <option value="ABIA">ABIA</option>
                  <option value="ADAMAWA">ADAMAWA</option>
                  <option value="AKWA IBOM">AKWA IBOM</option>
                  <option value="ANAMBRA">ANAMBRA</option>
                  <option value="BAUCHI">BAUCHI</option>
                  <option value="BAYELSA">BAYELSA</option>
                  <option value="BENUE">BENUE</option>
                  <option value="BORNO">BORNO</option>
                  <option value="CROSS RIVER">CROSS RIVER</option>
                  <option value="DELTA">DELTA</option>
                  <option value="EBONYI">EBONYI</option>
                  <option value="EDO">EDO</option>
                  <option value="EKITI">EKITI</option>
                  <option value="ENUGU">ENUGU</option>
                  <option value="GOMBE">GOMBE</option>
                  <option value="IMO">IMO</option>
                  <option value="JIGAWA">JIGAWA</option>
                  <option value="KADUNA">KADUNA</option>
                  <option value="KANO">KANO</option>
                  <option value="KATSINA">KATSINA</option>
                  <option value="KEBBI">KEBBI</option>
                  <option value="KOGI">KOGI</option>
                  <option value="KWARA">KWARA</option>
                  <option value="LAGOS">LAGOS</option>
                  <option value="NASSARAWA">NASSARAWA</option>
                  <option value="NIGER">NIGER</option>
                  <option value="OGUN">OGUN</option>
                  <option value="ONDO">ONDO</option>
                  <option value="OSUN">OSUN</option>
                  <option value="OYO">OYO</option>
                  <option value="PLATEAU">PLATEAU</option>
                  <option value="RIVERS">RIVERS</option>
                  <option value="SOKOTO">SOKOTO</option>
                  <option value="TARABA">TARABA</option>
                  <option value="YOBE">YOBE</option>
                  <option value="ZAMFARA">ZAMFARA</option>
                </select>
              </div>
              <div className="inputfield">
                <label htmlFor="dateofbirth">Date of Birth (*)</label>
                <input type="date" name="" id="" />
              </div>
              <div className="inputfield">
                <label htmlFor="Language">Languages (*)</label>
                <select
                  name="language"
                  onChange={UserHandler}
                  value={user.language}
                  id="language"
                >
                  <option value="englsih">English</option>
                  <option value="yoruba">Yoruba</option>
                  <option value="igbo">Igbo</option>
                </select>
              </div>
              <div className="inputfield">
                <label htmlFor="Address">Proof of Address (*)</label>
                <input
                  type="file"
                  value={user.ProofAddress}
                  name="address"
                  onChange={handleFileChange}
                />
              </div>
              <div className="inputfield">
                <label htmlFor="Id">Proof of ID (*)</label>
                <input
                  type="file"
                  value={user.id}
                  name="ID"
                  onChange={handleFileChange}
                />
              </div>
            </div>

            <div className="qualifications">
              <h1>Qualifications</h1>
              <div className="inputfield">
                <label htmlFor="education">Education (*)</label>
                <select name="education" id="education" onChange={UserHandler} >
                  <option value="?"></option>
                  <option label="SSCE" value="string:SSCE">
                    SSCE
                  </option>
                  <option
                    label="Technical College/Institution"
                    value="string:Technical College/Institution"
                  >
                    Technical College/Institution
                  </option>
                  <option label="ND/OND" value="string:ND/OND">
                    ND/OND
                  </option>
                  <option label="HND/BSc" value="string:HND/BSc">
                    HND/BSc
                  </option>
                  <option label="Other" value="string:Other">
                    Other
                  </option>
                  <option label="BEng" value="string:BEng">
                    BEng
                  </option>
                  <option label="MEng" value="string:MEng">
                    MEng
                  </option>
                  <option label="MSc" value="string:MSc">
                    MSc
                  </option>
                </select>
              </div>
              <div className="inputfield">
                <label htmlFor="years of experience">
                  Overall Years of Experience (*)
                </label>
                <input
                  type="text"
                  placeholder="Overall Years of Experience"
                  value={user.YearsofExp}
                  name="YearsofExp"
                  onChange={UserHandler}
                />
              </div>
              <div className="inputfield">
                <label htmlFor="residential experience">
                  Residential Experience (*)
                </label>
                <input
                  type="text"
                  placeholder="years of Residential Experience"
                  value={user.ResExp}
                  name="ResExp"
                  onChange={UserHandler}
                />
              </div>
              <div className="inputfield">
                <label htmlFor="years of commercial experience">
                  Commercial Experience (*)
                </label>
                <input
                  type="text"
                  placeholder="Years Commercial Experience"
                  value={user.CommercialExp}
                  name="CommercialExp"
                  onChange={UserHandler}
                />
              </div>
              <div className="inputfield">
                <label htmlFor="Mini-Grid years of experience">
                  Mini-Grid Experience (*)
                </label>
                <input
                  type="text"
                  placeholder="Years of Mini-Grid Experience"
                  value={user.MiniGridExp}
                  name="MiniGridExp"
                  onChange={UserHandler}
                />
              </div>
              <div className="inputfield">
                <label htmlFor="">
                  Solar Panel / Inverter Brands Expertise (*)
                </label>
                <select name="solar" id="solar" onChange={UserHandler}>
                  <option value="Select an option">Select an option</option>
                </select>
              </div>
              <div className="inputfield">
                <label htmlFor="">CV (*)</label>
                <input type="file" onChange={handleFileChange} required />
              </div>
              <div className="inputfield">
                <label htmlFor="link to portfolio">
                  Link to Portfolio (Website, Dropbox, Google Drive, etc)
                </label>
                <input
                  type="text"
                  placeholder="Any Link Showcasing your work"
                  value={user.link}
                  name="link"
                  onChange={UserHandler}
                />
              </div>
            </div>
            <div className="inputfield">
              <input type="submit" value="Register" />
            </div>
          </form>
          <div className="talentparr">
            <p className="log">
              Already a member?{" "}
              <Link className="log" to="/login">
                Sign In Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Talentsignup;
