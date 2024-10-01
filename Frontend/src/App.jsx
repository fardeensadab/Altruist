import { LoginForm } from "./Components/LoginForm/LoginForm";
import { SignupForm } from "./Components/SignupForm/SignupForm";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
