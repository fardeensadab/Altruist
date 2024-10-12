import React, { useState } from "react";
import { TopBar } from "./Components/TopBar";
import LoginAndRegForms from "./Components/LoginAndRegForms";
import EmailVerifier from "./Components/EmailVerifier";

import AboutUs from "./Components/Miscellaneous/AboutUs";
import FAQ from "./Components/Miscellaneous/FAQ";

import "./index.css";
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Link } from "react-router-dom";

function App() {

  const Home = () => {
    return <div class="container">
      <h1> The following Routes are available currently:</h1>
      <ol>
        <li>
          <Link to="/login"> Login </Link>
        </li>
        <li>
          <Link to="/verify-registration"> Email-verification </Link>
        </li>
        <li>
          <Link to="/about"> About Us </Link>
        </li>
        <li>
          <Link to="/faq"> FAQ </Link>
        </li>
      </ol>
    </div>
  }

  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginAndRegForms />} />
        <Route path="/verify-registration" element={<EmailVerifier />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
