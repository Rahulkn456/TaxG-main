import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/footer";
import "./Client.css";

const Client = () => {
  return (
    <div>
      <Header/>
    <div className="table-style">
      
      <h2>Client deatils Table</h2>
      
<table>
  <tr>
    <th>Clinet Name</th>
    <th>Email id</th>
    <th>Address</th>
    <th>Phone Number</th>
  </tr>
  <tr>
    <td>Jagdamba Traders</td>
    <td>jagdamba@gmail.com</td>
    <td>Jagat puri delhi</td>
    <td>1234567891</td>
  </tr>
  <tr>
    <td>Durga Traders</td>
    <td>durga@gmail.com</td>
    <td>Silk road Bangaluru</td>
    <td>1234567891</td>
  </tr>
  <tr>
    <td>Valiance Solution Pvt Ltd</td>
    <td>valiance@gmail.com</td>
    <td>sector 37 Noida </td>
    <td>1234567891</td>
  </tr>
  <tr>
    <td>Beyondsoft Consulting Inc</td>
    <td>Beyondsoft@gmail.com</td>
    <td>DLF cybercity Gurugram</td>
    <td>1234567891</td>
  </tr>
</table>
    </div>
    <Footer/>
    </div>
  );
};

export default Client;