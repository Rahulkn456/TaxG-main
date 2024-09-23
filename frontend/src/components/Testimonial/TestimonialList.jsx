import React from "react";
import Testimonial from "./Testimonial";

const testimonialData = [
  {
    name: "John Doe",
    message: "This is an amazing service! Highly recommend",
    // image:
    //   "https://media.istockphoto.com/id/1503232125/photo/happy-smile-and-portrait-of-business-man-in-city-for-professional-corporate-and-pride.jpg?s=612x612&w=0&k=20&c=uPu3GKHW507ruenLY8xwsB3OgOSwLSWjE3fBpy20Hac=",
  },
  {
    name: "Ellen Maze",
    message: "I had a great experience. Will use again",
    // image:
    //   "https://media.istockphoto.com/id/1466995518/photo/business-woman-and-worker-portrait-at-office-desk-as-administration-executive-company-manager.jpg?s=612x612&w=0&k=20&c=NvKeG6Fh0_VVfH_N0Ka-5j8284XJhL2VTJfe6IwDkWQ=",
  },
  {
    name: "Anna Smith",
    message: "Fantastic quality and customer support",
    // image:
    //   "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww",
  },
];

const TestimonialList = () => {
  return (
    <div className="testimonials">
      <h2>Our Customer Reviews</h2>
      {testimonialData.map((testimonial, index) => (
        <Testimonial key={index} testimonial={testimonial} />
      ))}
    </div>
  );
};

export default TestimonialList;
