import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/footer";
import Hero from "../../components/hero/Hero";
import Mission from "../../components/Mission/Mission";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Mission />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
