import React, { useState } from "react";
import "./Feedback.css";
import "./Feedback.css";
import Header from "../header/Header";
import Footer from "../footer/footer";
const Feedback = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <Header />
      <div className="feedback-container">
        <h2>Feedback</h2>
        {submitted ? (
          <div className="thank-you-message">Thank you for your feedback!</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Feedback;
