import React from "react";
/*import Client from "../../pages/client/Client";
import Contact from "../../pages/contact/Contact";
import Resources from "../../pages/resources/resources";*/
import Clock from "../Clock/Clock";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <h1 className="logo">TaxG Jagadish and Co</h1>
      <Clock />
      <ul className="nav-list">
        <li>Home</li>
        <li>Notice</li>
        <li>Client</li>
        <li>Resources</li>
      </ul>
      <img className="img-profile" src=" " alt="profile.jpg"></img>
      <span>down arrow</span>
    </div>
  );
};
export default Header;
