import React from "react";
import "./Testimonial.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { testimonials } from "../../data";
const Testimonial = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <Swiper
              modules={[Pagination, Autoplay]}
              loop={true}
              speed={600}
              autoplay={{ delay: 5000 }}
              slidesPerView="auto"
              pagination={{
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true,
              }}
            >
              <div className="swiper-wrapper">
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.name} className="swiper-slide">
                    <div className="testimonial-item">
                      <div className="d-flex">
                        <img
                          src={testimonial.src}
                          alt=""
                          className="testimonial-img flex-shrink-0"
                        />
                        <div>
                          <h3>{testimonial.name}</h3>
                          <h4>{testimonial.job}</h4>
                          <div className="stars">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                        </div>
                      </div>
                      <p>
                        <i className="bi bi-quote right-icon"></i>
                        <span>{testimonial.comment}</span>
                        <i className="bi bi-quote left-icon"></i>
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
              <div className="swiper-pagination">
                <span className="swiper-pagination-bullet"></span>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
