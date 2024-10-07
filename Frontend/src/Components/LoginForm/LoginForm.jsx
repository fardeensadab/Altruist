import React, { useState } from "react";
import "./LoginForm.css";
import { FaRegUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

export const LoginForm = ({ onSwitch }) => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaRegUser className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <FaLock className="icon" />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
          <p>
            Don't Have an Account?{" "}
            <div className="button-container">
              <button onClick={onSwitch} style={{ marginRight: "10px" }}>
                NGO Sign up
              </button>
              <button onClick={() => alert("Another action")}>
                Volunteer Sign Up
              </button>
            </div>
          </p>
        </div>
      </form>
    </div>
  );
};
