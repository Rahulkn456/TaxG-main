import React from "react";
import Client from "../../pages/client/Client";
import Contact from "../../pages/contact/Contact";
import Clock from "../Clock/Clock";
import { Link, Outlet } from "react-router-dom";
import "./Header.css";
import Reference from "../../pages/reference/reference";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-img">
        <h1 className="logo">TaxG Jagadish and Co</h1>
        <img
          src="/images/user.png"
          alt="User-Profile.jpg"
          className="user-image"
        ></img>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="17"
          viewBox="0 0 24 17"
          fill="none"
          className="arrow"
        >
          <path
            d="M11.5807 16.1582L0.00462967 0.271015L23.5272 0.547625L11.5807 16.1582Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      <nav className="navbar">
        <div className="navdiv">
          <Clock />
          
          <Link to="home" className="nav-link-tag">
            Home
          </Link>
          <Link to="client" className="nav-link-tag">
            Client
          </Link>
          <Link to="about" className="nav-link-tag">
            About
          </Link>
          <Link to="contact" className="nav-link-tag">
            Contact
          </Link>
          <Link to="resources" className="nav-link-tag">
            Resources
          </Link>
          <Link to="login" className="nav-link-tag">
            Login
          </Link>
          <Link to="signUp" className="nav-link-tag">
            SignUp
          </Link>

          <Outlet />
        </div>
      </nav>
    </div>
  );
};
export default Header;
