import React, { useState } from "react";
import "./Notice.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/footer";

const Notice = () => {
  const [clientName, setClient] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <Header/>
      <div className="notice-container">
        <h2>Notice</h2>
        {submitted ? (
          <div className="thank-you-message">Thanks for providing notice!</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="client-name">Client Name:</label>
              <input
                type="text"
                id="client-name"
                value={clientName}
                onChange={(e) => setClient(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
            <button type="submit">Send to notice</button>
          </form>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default Notice;
