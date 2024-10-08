import React from "react";
import Home from "./pages/home/Home";
import Contact from "./components/contact/contact";
import Reference from "./pages/reference/reference";
import Client from "./pages/client/Client";
import Login from "../src/pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import About from "./pages/about/about";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notice from "./pages/notice/Notice";
import "./App.css";
import NotFound from "./pages/notFound/NotFound";
import Feedback from "./components/Feedback/Feedback";
import Service from "./components/Service/Service";
import GstCalculator from "./components/GstCalculater/GstCalculator";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about" element={<About />} />
          <Route path="/client" element={<Client />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reference" element={<Reference />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/service" element={<Service />} />
          <Route path="/gstCalculator" element={<GstCalculator />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
