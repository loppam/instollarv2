import React, { useEffect, useState } from "react";
import { useAuth } from "../context/UserAuthContext";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { storage } from "../components/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Talentsignup = () => {
  const { error, SignUp, currentuser } = useAuth();
  const [err, setError] = useState("");
  const [backError, setBackError] = useState("");
  const [user, setUser] = useState({
    UserName: "",
    email: "",
    password: "",
    Picture: "",
    gender: "",
    FirstName: "",
    LastName: "",
    address: "",
    CityofRes: "",
    LGAofRes: "",
    stateOfResidence: "",
    country: "",
    PhoneNumber: "",
    stateOfOrigin: "",
    dateofbirth: "",
    language: "",
    ProofAddress: "",
    id: "",
    education: "",
    YearsofExp: "",
    ResExp: "",
    CommercialExp: "",
    MiniGridExp: "",
    solar: "",
    CV: "",
    link: "",
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
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const storage = getStorage();
    const storageRef = ref(storage, `/Document/${file.name}`);

    try {
      // Upload the file to Firebase Storage
      await uploadBytes(storageRef, file);

      // Get the download URL of the uploaded file
      const fileURL = await getDownloadURL(storageRef);

      // Update the component state with the file URL
      setUser((prev) => ({
        ...prev,
        [e.target.name]: fileURL,
      }));
    } catch (error) {
      console.error("Error uploading file to Firebase Storage:", error);

      // Handle the error, e.g., show a message to the user
      setError("Error uploading file. Please try again later.");
    }
  };
  const SubmitHandler = async (e) => {
    e.preventDefault();
    const {
      UserName,
      email,
      password,
      Picture,
      gender,
      FirstName,
      LastName,
      address,
      CityofRes,
      LGAofRes,
      stateOfResidence,
      country,
      PhoneNumber,
      stateOfOrigin,
      dateofbirth,
      language,
      ProofAddress,
      id,
      education,
      YearsofExp,
      ResExp,
      CommercialExp,
      MiniGridExp,
      solar,
      CV,
      link,
    } = user;
    if (
      UserName == "" ||
      email == "" ||
      password == "" ||
      Picture == "" ||
      gender == "" ||
      FirstName == "" ||
      LastName == "" ||
      address == "" ||
      CityofRes == "" ||
      LGAofRes == "" ||
      stateOfResidence == "" ||
      country == "" ||
      PhoneNumber == "" ||
      stateOfOrigin == "" ||
      dateofbirth == "" ||
      language == "" ||
      ProofAddress == "" ||
      id == "" ||
      education == "" ||
      YearsofExp == "" ||
      ResExp == "" ||
      CommercialExp == "" ||
      MiniGridExp == "" ||
      solar == "" ||
      CV == "" ||
      link == ""
    ) {
      setInterval(() => {
        setError("");
      }, 100000);
      return setError("Please fill all field");
    } else {
      SignUp(
        UserName,
        email,
        password,
        Picture,
        gender,
        FirstName,
        LastName,
        address,
        CityofRes,
        LGAofRes,
        stateOfResidence,
        country,
        PhoneNumber,
        stateOfOrigin,
        dateofbirth,
        language,
        ProofAddress,
        id,
        education,
        YearsofExp,
        ResExp,
        CommercialExp,
        MiniGridExp,
        solar,
        CV,
        link
      );
      {
        currentuser &&
          setUser({
            UserName: "",
            email: "",
            password: "",
            Picture: "",
            gender: "",
            FirstName: "",
            LastName: "",
            address: "",
            CityofRes: "",
            LGAofRes: "",
            stateOfResidence: "",
            country: "",
            PhoneNumber: "",
            stateOfOrigin: "",
            dateofbirth: "",
            language: "",
            ProofAddress: "",
            id: "",
            education: "",
            YearsofExp: "",
            ResExp: "",
            CommercialExp: "",
            MiniGridExp: "",
            solar: "",
            CV: "",
            link: "",
          });
      }
    }
  };
  return (
    <div className="talentsignup">
      {/* <Navbar /> */}
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
                <select
                  name="gender"
                  value={user.gender}
                  onChange={UserHandler}
                  required
                >
                  <option disabled value=""></option>
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
                  name="address"
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
                  onChange={UserHandler}
                  id="stateOfResidence"
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
                <select
                  name="country"
                  value={user.country}
                  onChange={UserHandler}
                  id="country"
                >
                  <option disabled value="">Niger</option>
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
                <label htmlFor="StateofOrigin">State of Origin (*)</label>
                <select
                  name="stateOfOrigin"
                  value={user.stateOfOrigin}
                  onChange={UserHandler}
                  id="stateOfOrigin"
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
                <label htmlFor="dateofbirth">Date of Birth (*)</label>
                <input
                  type="date"
                  name="dateofbirth"
                  id="dateofbirth"
                  onChange={UserHandler}
                  value={user.dateofbirth}
                />
              </div>
              <div className="inputfield">
                <label htmlFor="Language">Languages (*)</label>
                <select
                  name="language"
                  onChange={UserHandler}
                  value={user.language}
                  id="language"
                >
                  <option disabled value="">Select a language</option>
                  <option value="English">English</option>
                  <option value="Yoruba">Yoruba</option>
                  <option value="Igbo">Igbo</option>
                </select>
              </div>

              <div className="inputfield">
                <label htmlFor="Address">Proof of Address (*)</label>
                <input
                  accept="image/*"
                  type="file"
                  name="ProofAddress"
                  placeholder="Upload Picture"
                  onChange={handleFileChange}
                  required
                />
              </div>
              <div className="inputfield">
                <label htmlFor="Id">Proof of ID (*)</label>
                <input
                  accept="image/*"
                  type="file"
                  name="id"
                  placeholder="Upload Picture"
                  onChange={handleFileChange}
                  required
                />
              </div>
            </div>

            <div className="qualifications">
              <h1>Qualifications</h1>
              <div className="inputfield">
                <label htmlFor="education">Education (*)</label>
                <select
                  name="education"
                  value={user.education}
                  id="education"
                  onChange={UserHandler}
                >
                  <option disabled value="">Select Education</option>
                  <option label="SSCE" value="SSCE">
                    SSCE
                  </option>
                  <option
                    label="Technical College/Institution"
                    value="Technical College/Institution"
                  >
                    Technical College/Institution
                  </option>
                  <option label="ND/OND" value="ND/OND">
                    ND/OND
                  </option>
                  <option label="HND/BSc" value="HND/BSc">
                    HND/BSc
                  </option>
                  <option label="Other" value="Other">
                    Other
                  </option>
                  <option label="BEng" value="BEng">
                    BEng
                  </option>
                  <option label="MEng" value="MEng">
                    MEng
                  </option>
                  <option label="MSc" value="MSc">
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
                <select
                  name="solar"
                  id="solar"
                  value={user.solar}
                  onChange={UserHandler}
                >
                  <option disabled value="">Select an option</option>
                  <option value="PV Modules - Canadian Solar">
                    PV Modules - Canadian Solar
                  </option>
                  <option value="PV Modules - First Solar">
                    PV Modules - First Solar
                  </option>
                </select>
              </div>
              <div className="inputfield">
                <label htmlFor="">CV (*)</label>
                <input
                  accept="image/*"
                  type="file"
                  name="CV"
                  placeholder="Upload Picture"
                  onChange={handleFileChange}
                  required
                />
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
