import React from "react";
import "./SignupForm.css";
import { FaEnvelope, FaRegUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

export const SignupForm = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Sign up</h1>
        <div className="input-box">
          <input type="text" placeholder="username" required></input>
          <FaRegUser className="icon" />
        </div>
        <div className="input-box">
          <input type="email" placeholder="email" required></input>
          <FaEnvelope className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="password" required></input>
          <FaLock className="icon" />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox"></input>I agree to the terms & conditions
          </label>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
          <p>
            Already have an account? <Link to="/"> Sign in</Link>
          </p>
        </div>
      </form>
    </div>
  );
};
