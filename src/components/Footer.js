import React, { useRef } from "react";
import "../styles/footer.css";
import instagram from "../Assets/instagram.png";
import pinterest from "../Assets/pinterest.png";
import github from "../Assets/github.png";
import linkedin from "../Assets/linkedin.png";
import logo from "../Assets/logoSmall.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function Footer() {
  AOS.init();
  AOS.refresh();
  const contactRef = useRef(null);
  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <footer className="footer-distributed">
        <div className="footer-left">
          <div className="left-logo">
            <img src={logo} alt="logo Icon" />
            <h3>
              <span>S A S</span>
            </h3>
          </div>
          <p className="footer-links">
            <a href="/" className="link-1">
              Home
            </a>
            <Link to={"/allproducts"}>Products</Link>
            <Link to={"/product/men"}>Men's</Link>
            <Link to={"/product/women"}>Women's</Link>
            <Link to={"/product/kid"}>Kid's</Link>
          </p>
          <p className="footer-company-name">Shop_Avec_Strike © 2023</p>
        </div>

        <div className="footer-center" id="contact" ref={contactRef}>
          <h4 className="footer-center-heading">Contact Us</h4>
          <div>
            <i className="fa fa-map-marker"></i>
            <p>9 Rue de Moulin 68100 Mulhouse, GrandEst, France</p>
          </div>
          <div>
            <i className="fa fa-phone"></i>
            <p>+33 98 66 33 31</p>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">support@company.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span> Explore trendy clothing for men,
            women, and kids. Quality fashion for every family member, available
            at our online store.
          </p>
          <div className="footer-icons">
            <a href="/">
              <img src={instagram} alt="instagram icon" />
            </a>
            <a href="/">
              <img src={pinterest} alt="pintester icon" />
            </a>
            <a
              href="https://github.com/AbdullahPro2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github icon" />
            </a>
            <a
              href="https://linkedin.com/in/abdulllahnezami"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="linkedin icon" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
