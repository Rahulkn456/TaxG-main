import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/footer";
import "./About.css";

const About = () => {
  return (
    <div>
      <Header />
      <div className="about-container">
        <h2>About Us</h2>
        <p>
          Welcome to Jagadish and Co Consultancy we specialize in providing
          comprehensive tax consultancy services tailored to meet the unique
          needs of individuals and businesses. With a team of seasoned
          professionals, we are committed to delivering accurate, timely, and
          strategic tax advice.
        </p>

        <h2>Our Mission </h2>

        <p>
          Our mission is to simplify the complexities of taxation and empower
          our clients with the knowledge and tools they need to optimize their
          tax positions. We strive to build long-lasting relationships based on
          trust, integrity, and exceptional service.
        </p>

        <h2>Our Team</h2>

        <p>
          Our team comprises certified tax professionals with extensive
          experience in tax planning, compliance, and advisory services. We stay
          updated on the latest tax laws and regulations to ensure that our
          clients receive the best possible guidance.
        </p>

        <h2>Our Services</h2>

        <p>We offer a wide range of tax consultancy services, including:</p>

        <ul>
          <li>Individual Tax Planning</li>
          <li>Business Tax Advisory</li>
          <li>Estate and Trust Planning</li>
          <li>International Tax Consulting</li>
          <li>Tax Compliance and Filing</li>
        </ul>

        <h2>Why Choose Us?</h2>

        <span>Expertise:</span>
        <p>
          Our team is equipped with in-depth knowledge and experience in various
          tax matters. Personalized Service: We understand that each client’s
          needs are unique, and we tailor our services accordingly. Transparent
          Communication: We prioritize clear and open communication to ensure
          you understand your tax situation.
        </p>

        <h2>Get in Touch</h2>

        <p>
          Whether you're an individual looking for personal tax advice or a
          business seeking to navigate complex tax issues, we’re here to help.
          Contact us today to schedule a consultation and discover how we can
          support you in achieving your financial goals.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
