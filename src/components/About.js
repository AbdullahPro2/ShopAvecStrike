import React, { useRef } from "react";
import aboutImage from "../Assets/aboutImage.webp";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
AOS.refresh();
function About() {
  const contactRef = useRef(null);
  return (
    <>
      <h1 className="collection-heading" id="about" ref={contactRef}>
        About Us
      </h1>
      <div className="about-container">
        <img src={aboutImage} alt="about Us" className="about-image" />{" "}
        <div
          className="about-details"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h3>What we do</h3>
          <p>
            At shop avec strike, we're more than a fashion destination; we're a
            family. Established with a passion for style and inclusivity, our
            curated collection brings trendy and affordable clothing to men,
            women, and kids. Embrace fashion that unites the whole family, where
            quality meets affordability. Join us in creating memorable moments
            through stylish ensembles for every chapter of your family's story.
            Welcome to a fashion experience designed with love for your entire
            family.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
