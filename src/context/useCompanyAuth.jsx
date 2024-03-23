import { useContext } from "react";
import { companyAuthContext } from "./companyAuthContext";

export const useCompanyAuth = () => {
  return useContext(companyAuthContext);
};
