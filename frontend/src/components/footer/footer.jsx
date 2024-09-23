import React from "react";
import "./Footer.css";
import { Link, Outlet } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaFacebook, FaTwitter } from "react-icons/fa";
const footer = () => {
  return (
    <div className="footer-container">
      <div>
        <h3>Jagadish and Co</h3>
        <p>2nd Stage BTM Layout Bangalore</p>
        <p>Contact no: 8432476216</p>
      </div>
      <div class="footer">
        <h3>Links</h3>

        <Link to="about" className="a-tag">
          About Us
        </Link>
        <Link to="client" className="a-tag">
          Client
        </Link>
        <Link to="notice" className="a-tag">
          Notice
        </Link>
        <Link to="feedback" className="a-tag">
          Feedback
        </Link>
        <Link to="service" className="a-tag">
          Service
        </Link>
        <Outlet />
      </div>
      <div class="footer1">
        <h3>Follow us</h3>

        <FaInstagram />

        <FaWhatsapp />

        <FaFacebook />

        <FaTwitter />
      </div>
    </div>
  );
};

export default footer;
