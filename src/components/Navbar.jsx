import React, { useState, useContext, useEffect } from "react";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import { FaTimes } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { useAuth } from "../context/UserAuthContext";
import { useCompanyAuth } from "../context/companyAuthcontext";
import { getDoc, doc } from "firebase/firestore";
import { db, auth } from "../components/firebase";
import { useNavigate } from "react-router";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const { currentuser: personalUser } = useAuth();
  const { currentuser: companyUser } = useCompanyAuth();
  const history = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      let currentuser = personalUser || companyUser;
      if (currentuser) {
        try {
          // Check if the current user exists in the company collection
          const companyDocRef = doc(db, "company", currentuser.uid);
          const companyDocSnapshot = await getDoc(companyDocRef);

          if (companyDocSnapshot.exists()) {
            // User is a company
            const companyData = companyDocSnapshot.data();
            setUserDetails(companyData);
          } else {
            // User is not a company, fetch from users collection
            const userDocRef = doc(db, "users", currentuser.uid);
            const userDocSnapshot = await getDoc(userDocRef);

            if (userDocSnapshot.exists()) {
              const userData = userDocSnapshot.data();
              setUserDetails(userData);
            } else {
              console.log("User document not found");
            }
          }
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      }
    };

    fetchUserDetails();
  }, [personalUser, companyUser]);
  const handleClick = () => {
    signOut(auth).then(() => {
      console.log("Signed out successfully");
      history("/");
      window.location.reload();
    });
  };
  return (
    <nav>
      <div className="nav_content">
        <Link to="/">
          <img src="/lp/instollar.png" alt="" className="mobile" />
        </Link>
        <div
          className={Mobile ? "mobile-link" : "omo"}
          onClick={() => setMobile(false)}
        >
          <div className="nav_content_left">
            <Link to="/about" className="sty">
              About us
            </Link>
            <div className="dropdown">
              <button className="dropbtn">Freelancers</button>
              <div className="dropdown-content">
                <Link to="/freelancer-onboarding">
                  <img src="/lp/material-symbols_model-training.png" alt="" />
                  Become a Green Energy Talent
                </Link>

                <Link to="/training-and-certification">
                  <img src="/lp/healthicons_i-training-class.png" alt="" />
                  Training & Certification
                </Link>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">Solar Companies</button>
              <div className="dropdown-content">
                <Link to="/training-and-sponsorship">
                  <img src="/lp/material-symbols_model-training.png" alt="" />
                  Training Sponsorship
                </Link>
                <Link to="/instollar-business">
                  <img src="/lp/navector.png" alt="" />
                  Instollar Business
                </Link>
              </div>
            </div>
          </div>
          <div className="log_siginbtn">
            {userDetails ? (
              <div className="profile">
                <Avatar
                  alt={"image"}
                  className="avatar"
                  src={userDetails.Picture}
                  sx={{ width: 40, height: 40 }}
                />
                <div className="dropdown">
                  <button className="dropbtn">
                    Hi! {userDetails.BusinessName} {userDetails.UserName}
                  </button>
                  <div className="dropdown-content">
                    <Link to="/profile" className="profile_btn">
                      <CgProfile />
                      Profile
                    </Link>
                    <Link onClick={handleClick}>
                      <AiOutlineLogout />
                      Logout
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <Link to="/login" className="login_btn">
                  Login
                </Link>
                <Link to="/pre-signup" className="signup_btn">
                  Join
                </Link>
              </>
            )}
          </div>
        </div>
        <button className="mobilev" onClick={() => setMobile(!Mobile)}>
          {Mobile ? <FaTimes /> : <RxHamburgerMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
