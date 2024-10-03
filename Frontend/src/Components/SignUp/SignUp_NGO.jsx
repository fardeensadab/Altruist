import React from "react";
import "./SignUp_NGO.css"; 
import { FaRegUser, FaLock, FaEnvelope } from "react-icons/fa";

const SignUp_NGO = ({ onSwitch }) => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>NGO Sign Up</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaRegUser className="icon" />
        </div>
        <div className="input-box email-phone">
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone Number" required />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <FaLock className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Confirm Password" required />
          <FaLock className="icon" />
        </div>
        
        <div className="transaction-methods">
          <h2>Transaction Method</h2>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" /> Mobile Payment
            </label>
            <label>
              <input type="checkbox" /> Bank Transfer
            </label>
            <label>
              <input type="checkbox" /> Card Payment
            </label>
          </div>
        </div>

        <button type="submit">Sign Up</button>
        <div className="register-link">
          <p>
            Already have an account?{" "}
            <button onClick={onSwitch} style={{ marginLeft: "5px" }}>
              Login
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp_NGO;
