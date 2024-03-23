import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landingpage from "./pages/Landingpage";
import Login from "./pages/login";
import TalentSignup from "./pages/Talentsignup";
import Signupoption from "./pages/Signupoption";
import UserAuthContext from "./context/UserAuthContext";
import Companysignup from "./pages/companysignup";
import About from "./pages/About";
import TandC from "./pages/TandC";
import Business from "./pages/Business";
import TandS from "./pages/TandS";
import Contact from "./pages/contact";
import Terms from "./pages/Terms";
import Error from "./pages/Error";
import TopTalents from "./pages/TopTalents";
import TopTalentsDetails from "./pages/TopTalentsDetails";
import Onboarding from "./pages/Onboarding";
import Contract from "./pages/Contract";
import Profile from "./pages/Profile";
// import CompanyProfile from "./pages/CompanyProfile";
// import Navbar from "./components/Navbar";
import FreelancerOnboarding from "./pages/FreelancerOnboarding";
import NavbarWrapper from "./components/NavbarWrapper";
import CompanyAuthcontext from "./context/companyAuthcontext";
function App() {
  return (
    <>
      <NavbarWrapper />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pre-signup" element={<Signupoption />} />
        <Route path="/about" element={<About />} />
        <Route path="/training-and-certification" element={<TandC />} />
        <Route path="/training-and-sponsorship" element={<TandS />} />
        <Route path="/instollar-business" element={<Business />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/*" element={<Error />} />
        <Route path="/top-talents" element={<TopTalents />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route
          path="/freelancer-onboarding"
          element={<FreelancerOnboarding />}
        />
        <Route path="/contract-and-agreement" element={<Contract />} />
        <Route
          path="/profile"
          element={
            <UserAuthContext>
              <CompanyAuthcontext>
                <Profile />
              </CompanyAuthcontext>
            </UserAuthContext>
          }
        />

        {/* <Route
          path="/companyprofile"
          element={
            <CompanyAuthcontext>
              <CompanyProfile />
            </CompanyAuthcontext>
          }
        /> */}
        <Route path="/user/:uuid" element={<TopTalentsDetails />} />
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
