import React, { useState } from "react";
import "../components/styles.css";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "Amazing product!!! That's what I was looking for – excellent quality and fast delivery.",
      author: "John Doe",
    },
    {
      quote:
        "I recently purchased this product and am thrilled with the performance, ease of use, and features.",
      author: "Sam Josh",
    },
    {
      quote:
        "This is the best product I have ever used! It is so easy to use, and it works perfectly.",
      author: "Mary Doe",
    },
    {
      quote:
        "I am a repeat customer of this business, and they never disappoint. The products are always high-quality, and the prices are fair.",
      author: "Jessika",
    },
  ];

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  };

  return (
    <div className="testimonials">
      <h1>Testimonials</h1>
      <div className="testimonials-quote">
        {testimonials[currentIndex].quote}
      </div>
      <div className="testimonials-author">
        - {testimonials[currentIndex].author}
      </div>
      <testimonials className="testimonials-nav">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </testimonials>
    </div>
  );
};

export default Testimonials;
