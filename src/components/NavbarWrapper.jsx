import React from "react";
// import { userContext } from "../context/UserAuthContext";
// import { useCompanyAuth } from "../context/companyAuthContext";
import UserAuthContext from "../context/UserAuthContext";
import CompanyAuthcontext from "../context/CompanyAuthContext";
import Navbar from "./Navbar";

const NavbarWrapper = () => {
  return (
    <UserAuthContext>
      <CompanyAuthcontext>
        <Navbar />
      </CompanyAuthcontext>
    </UserAuthContext>
  );
};

export default NavbarWrapper;
