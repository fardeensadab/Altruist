import React, { useState } from "react";
import "./LoginForm.css";
import { FaRegUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="username" required></input>
          <FaRegUser className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="password" required></input>
          <FaLock className="icon" />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox"></input>Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
          <p>
            Don't have an account?
            <Link to="/signup"> Sign up</Link>
          </p>
        </div>
      </form>
    </div>
  );
};
