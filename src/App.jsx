import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landingpage from "./pages/Landingpage";
import Login from "./pages/login";
import TalentSignup from "./pages/Talentsignup";
import Signupoption from "./pages/Signupoption";
import UserAuthContext from "./context/UserAuthContext";
import CompanyAuthcontext from "./context/companyAuthcontext";
import Companysignup from "./pages/companysignup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pre-signup" element={<Signupoption />} />
        <Route
          path="/talent-signup"
          element={
            <UserAuthContext>
              <TalentSignup />
            </UserAuthContext>
          }
        />
        <Route
          path="/company-signup"
          element={
            <CompanyAuthcontext>
              <Companysignup />
            </CompanyAuthcontext>
          }
        />
      </Routes>
    </>
  );
}

export default App;
