import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../components/firebase";
const changePassword = () => {
  const [email, setEmail] = useState("");
  const [resetSent, setResetSent] = useState(false);
  const [error, setError] = useState(null);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setResetSent(true);
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };
  return (
    <div className="changepassword">
      <div className="margin_content">
        <div className="login-flex">
          <h2>Reset Password</h2>
          <div className="header_img">
            <img src="/lp/instollardark.png" alt="" />
          </div>
          <form onSubmit={handleResetPassword} className="login_form">
            <div className="log-inputfield">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
              />
            </div>

            <input type="submit" value="Reset Password" />
          </form>
          {resetSent && (
            <p className="error">
              Password reset email sent. Check your inbox.
            </p>
          )}
          {error && <p className="error">Error: {error}</p>}
        </div>
      </div>
    </div>
  );
};

export default changePassword;
