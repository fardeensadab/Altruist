import React, { useState } from "react";
import { LoginForm } from "./Components/LoginForm/LoginForm";
import { TopBar } from "./Components/TopBar";
import SignUp_NGO from "./Components/SignUp/SignUp_NGO";

import AboutUs from "./Components/Miscellaneous/AboutUs";
import FAQ from "./Components/Miscellaneous/FAQ";

import "./index.css";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const Forms = () => {
    return <>

      {isLogin ? (
        <LoginForm onSwitch={() => setIsLogin(false)} />
      ) : (
        <SignUp_NGO onSwitch={() => setIsLogin(true)} />
      )}
    </>
  }

  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/login" element={<Forms />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
