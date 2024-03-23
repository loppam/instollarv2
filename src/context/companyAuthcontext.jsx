import React from "react";
import { useContext, createContext, useEffect, useState } from "react";
import {
  AuthErrorCodes,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "../components/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const companyContext = createContext();
export const useCompanyAuth = () => {
  return useContext(companyContext);
};

const CompanyAuthcontext = ({ children }) => {
  const [error, setError] = useState("");
  const [currentuser, setCurrentUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // console.log(user);
      if (user) {
        navigate("/profile");
        setCurrentUser(user);
      } else {
        // alert("You are logged out");
      }
    });
  }, [currentuser]);

  const SignUp = async (
    email,
    password,
    BusinessName,
    PhoneNumber,
    Offaddress,
    CACNO,
    yrsio,
    expertise
  ) => {
    setError("");
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (result) => {
        console.log(result);
        try {
          const ref = doc(db, "company", result.user.uid);
          const docRef = await setDoc(ref, {
            email,
            PhoneNumber,
            BusinessName,
            Offaddress,
            CACNO,
            yrsio,
            expertise,
            userID: `${result.user.uid}`,
          });

          alert("Welcome! New Company Created");
          console.log("Document written with ID:", docRef.id);
        } catch (e) {
          console.error("Error adding document:", e);
        }
      })
      .catch((err) => {
        if (err.code === "auth/email-already-in-use") {
          setError("Email already in use. Please try another.");
        } else if (err.code === AuthErrorCodes.WEAK_PASSWORD) {
          setError("Password must be at least 6 characters.");
        } else {
          setError(err.message);
        }
      });
  };

  const value = {
    SignUp,
    error,
    currentuser,
  };

  return (
    <companyContext.Provider value={value}>{children}</companyContext.Provider>
  );
};

export default CompanyAuthcontext;
