import React from "react";
// import "./Footer.css";
import { Link, Outlet } from "react-router-dom";
import {FaInstagram,FaFacebook,FaWhatsapp,FaTwitter} from 'react-icons/fa';


const SocialMedia = () => {
  return (
    <div className="social-media">
    <a href="https://www.instagram.com" target="_blank" className="a-tag"><FaInstagram/></a>
    <a href="https://www.facebook.com/login" target="_blank" className="a-tag"><FaFacebook/></a>
    <a href="https://web.whatsapp.com" target="_blank" className="a-tag"><FaWhatsapp/></a>
    <a href="https://www.instagram.com/" target="_blank" className="a-tag"><FaTwitter/></a>
    </div>
    
  )
};
export default SocialMedia;