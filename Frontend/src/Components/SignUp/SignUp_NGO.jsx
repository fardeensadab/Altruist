import React, { useState } from "react";
import "./SignUp_NGO.css";
import { FaRegUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const SignUp_NGO = ({login}) => {

  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const navigate = useNavigate()

  const HandleRegSubmit = async (e) => {
    e.preventDefault();

    if (password != confirmPassword) {
      setResponseMessage("Passwords do not match")
      return;
    }

    const formData = { username, useremail, password, phonenumber };

    try {
      const response = await fetch('http://localhost:4500/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const responseData = await response.json();
        setResponseMessage('Signup successful: ' + JSON.stringify(responseData));
        login(responseData.user);
        navigate("/")
      } else {
        setResponseMessage('Signup failed. Status: ' + response.status);
      }
    } catch (error) {
      setResponseMessage('An error occurred: ' + error.message);
    }

    console.log(responseMessage)
  }

  return (
    <div className="signup-wrapper">
      {
        responseMessage
        &&
        <h1>{responseMessage}</h1>
      }
      <form onSubmit={(e) => HandleRegSubmit(e)}>
        <h1>NGO Sign Up</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required value={username} onInput={(e) => { setUsername(e.target.value) }} />
          <FaRegUser className="icon" />
        </div>
        <div className="input-box email-phone">
          <input type="email" placeholder="Email" required value={useremail} onInput={(e) => { setUseremail(e.target.value) }} />
          <input type="tel" placeholder="Phone Number" required value={phonenumber} onInput={(e) => { setPhoneNumber(e.target.value) }} />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required value={password} onInput={(e) => { setPassword(e.target.value) }} />
          <FaLock className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Confirm Password" required value={confirmPassword} onInput={(e) => { setConfirmPassword(e.target.value) }} />
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
            <button onClick={()=>navigate("/login")} style={{ marginLeft: "5px" }}>
              Login
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};
