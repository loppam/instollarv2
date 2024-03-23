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

export const userContext = createContext();
export const useAuth = () => {
  return useContext(userContext);
};

const UserAuthContext = ({ children }) => {
  const [error, setError] = useState("");
  const [currentuser, setuser] = useState();
  const history = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // console.log(user);

      if (user) {
        history("/profile");
        setuser(user);
      } else {
        // alert("You are logged out");
      }
    });
  }, [currentuser]);
  const SignUp = async (
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
  ) => {
    setError("");
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (result) => {
        console.log(result);
        try {
          const ref = doc(db, "users", result.user.uid);
          const docRef = await setDoc(ref, {
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
            userID: `${result.user.uid}`,
          });

          alert("welcome New user Created");
          console.log("doc written with id", docRef.id);
        } catch (e) {
          console.error("Error adding document", e);
        }
      })
      .catch((err) => {
        if (err.code === "auth/email-already-in-use") {
          setTimeout(() => {
            setError("");
          }, 5000);
          setError("Email already in use, try another");
        } else if (err.code === AuthErrorCodes.WEAK_PASSWORD) {
          setTimeout(() => {
            setError("");
          }, 5000);
          setError("Password must be at least 6 characters");
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

export default UserAuthContext;
