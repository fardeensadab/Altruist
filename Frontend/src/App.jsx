import React, { useState } from "react";
import { LoginForm } from "./Components/LoginForm/LoginForm";
import { TopBar } from "./Components/TopBar";
import SignUp_NGO from "./Components/SignUp/SignUp_NGO"; 
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [isLogin, setIsLogin] = useState(true); 

  return (
    <>
      <TopBar />
      {isLogin ? (
        <LoginForm onSwitch={() => setIsLogin(false)} />
      ) : (
        <SignUp_NGO onSwitch={() => setIsLogin(true)} />
      )}
    </>
  );
}

export default App;
