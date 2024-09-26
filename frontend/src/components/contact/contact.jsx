import React from "react";
import Header from "../header/Header";
import Footer from "../footer/footer";
import "./contact.css"

const Contact = () => {
  return (
    <div>
      <Header/>
      <div class="profile-card">
      <h3>Jagadish and Co</h3>
        <p>2nd Stage BTM Layout Bangalore</p>
        <p>Contact no: 8432476216</p>
        <p>Jagadish@gmail.com</p>
      </div>  
        <Footer/>
    </div>
  );
};

export default Contact;
