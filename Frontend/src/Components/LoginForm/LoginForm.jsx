import React, { useState } from "react";
import "./LoginForm.css";
import { FaRegUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const LoginForm = ({login}) => {
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const HandleSubmit = async (e) => {
    e.preventDefault();

    const formData = { useremail, password };

    try {
      const response = await fetch('http://localhost:4500/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const responseData = await response.json();
        setResponseMessage('Login successful: ' + JSON.stringify(responseData));
        login(responseData.user, rememberMe);
        navigate("/")
      } else {
        setResponseMessage('Login failed. Status: ' + response.status);
      }
    } catch (error) {
      setResponseMessage('An error occurred: ' + error.message);
    }
  }


  return (

    <div className="login-wrapper">
      {
        responseMessage
        &&
        <h1>{responseMessage}</h1>
      }
      <form onSubmit={(e) => { HandleSubmit(e) }}>
        <h1>Login</h1>
        <div className="input-box">
          <input type="email" placeholder="email@example.com" required value={useremail} onInput={(e) => setUseremail(e.target.value)} />
          <FaRegUser className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required value={password} onInput={(e) => setPassword(e.target.value)} />
          <FaLock className="icon" />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" checked={rememberMe} onChange={()=>setRememberMe(!rememberMe)}/> Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
          <div>
            Don't Have an Account?{" "}
            <div className="button-container">
              <button onClick={()=>navigate("/register")} style={{ marginRight: "10px" }}>
                NGO Sign up
              </button>
              <button onClick={() => alert("Another action")}>
                Volunteer Sign Up
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
