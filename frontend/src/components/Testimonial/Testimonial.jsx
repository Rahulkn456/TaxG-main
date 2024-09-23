import React from "react";

const Testimonial = ({ testimonial }) => {
  return (
    <div className="testimonial">
      {/* <img
        src={testimonial.image}
        alt={testimonial.name}
        className="testimonial-image"
      /> */}
      <h3>{testimonial.name}</h3>
      <p>{testimonial.message}</p>
    </div>
  );
};

export default Testimonial;
