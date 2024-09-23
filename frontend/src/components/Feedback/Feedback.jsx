import React from "react";
import Header from "../header/Header";
import Footer from "../footer/footer";

const Feedback = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Header />
      <h2>Leave your Feedback</h2>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label>Title of your review</label>
          <input htmlFor="text" id="text" />
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Feedback;
