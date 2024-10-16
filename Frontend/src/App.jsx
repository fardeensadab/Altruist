import React, { useState } from "react";
import { TopBar } from "./Components/TopBar";
import {LoginForm} from "./Components/LoginForm/LoginForm"
import {SignUp_NGO} from "./Components/SignUp/SignUp_NGO"
import EmailVerifier from "./Components/EmailVerifier/EmailVerifier";
import Home from "./Components/Home";

import DonationRequests from "./Components/HomePage/HomePage";
import AboutUs from "./Components/Miscellaneous/AboutUs";
import FAQ from "./Components/Miscellaneous/FAQ";

import "./index.css";
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import { getValueFromCache, clearCache, setValueInCache } from "./controls.js/ClientStorageController";

function App() {

  const [user, setUser] = useState(getValueFromCache("user"));
  
  const logout =()=>{
    clearCache();
    setUser("");
  }

  const login =(username, remember=false)=>{
    logout();
    setValueInCache("user", username, remember);
    setUser(username);
  }

  return (
    <BrowserRouter>
      <TopBar user={user} logout={logout}/>
      <Routes>
        <Route path="/" element={<DonationRequests user={user}/>} />
        <Route path="/login" element={<LoginForm login={login}/>} />
        <Route path="/register" element={<SignUp_NGO />} />
        <Route path="/verify-registration" element={<EmailVerifier login={login}/>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/default" element={<Home user={user} />} />

        <Route path="*" element={<Navigate to="/default" />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
