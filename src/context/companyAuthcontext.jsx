import React from "react";
import { useContext, createContext, useEffect, useState } from "react";
import {
  AuthErrorCodes,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "../components/firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

const userContext = createContext();
export const useAuth = () => {
  return useContext(userContext);
};

const CompanyAuthcontext = ({ children }) => {
  const [error, setError] = useState("");
  const [currentuser, setuser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setuser(user);
        console.log("you are logged in");
      } else {
        alert("You are logged out");
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
    expertise,
    note
  ) => {
    setError("");
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (result) => {
        console.log(result);
        try {
          const docRef = await addDoc(collection(db, "company"), {
            email,
            PhoneNumber,
            BusinessName,
            Offaddress,
            CACNO,
            yrsio,
            expertise,
            note,
            userID: `${result.user.uid}`,
          });

          alert("welcome New Company Created");
          console.log("doc written with id", docRef.id);
        } catch (e) {
          console.error("Error adding document", e);
        }
      })
      .catch((err) => {
        if (err.code === "auth/email-already-in-use") {
          setInterval(() => {
            setError("");
          }, 5000);
          setError("Email already in use try another");
        } else if (err.code === AuthErrorCodes.WEAK_PASSWORD) {
          setInterval(() => {
            setError("");
          }, 5000);
          setError("Password must be 6 characters");
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
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export default CompanyAuthcontext;
