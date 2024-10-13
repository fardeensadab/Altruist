import React from "react"
import { Link } from "react-router-dom"

export default function Home ({user}) {
    console.log(".../", user)
    return <div className="container">
      {user && <h1>Welcome, {user}</h1>}
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
        <li>
          <Link to="/home"> Home Page </Link>
        </li>
      </ol>
    </div>
  }