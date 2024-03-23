import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { useAuth } from "../context/UserAuthContext";
import CompanyAuthcontext, { useCompanyAuth } from "../context/CompanyAuthContext";
import { db, auth } from "../components/firebase";
import { useNavigate } from "react-router";
import { getDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";

const Profile = () => {
  const { currentuser: personalUser } = useAuth();
  const { currentuser: companyUser } = useCompanyAuth();
  // const { currentuser } = useAuth();
  const [userDetails, setUserDetails] = useState(null);
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
    });
  };

  return (

    <div className="profile_content">
      <div className="margin_content">
        <div className="profile_flex">
          <h2>Your Info</h2>
          <div className="profile_flex_content">
            <Link>View Messages</Link>
            <Link>Change Password</Link>
            <Link>Edit Profile</Link>
          </div>
        </div>

        {userDetails !== null ? (
          <div className="box">
            {personalUser && <p>Username: {userDetails.UserName}</p>}
            {companyUser && <p>Business Name: {userDetails.BusinessName}</p>}
            <p>Email: {userDetails.email}</p>
          </div>
        ) : (
          <p>Loading user details...</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
