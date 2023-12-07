import React, { useRef } from "react";
import delivery from "../Assets/delivery.png";
import securePayment from "../Assets/securePayment.png";
import returnFree from "../Assets/return.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Services() {
  const targetRef = useRef(null);

  AOS.init();
  AOS.refresh();
  return (
    <div
      className={`services-container `}
      data-aos="fade-up"
      data-aos-duration="1000"
      ref={targetRef}
    >
      <div className="service">
        <img src={delivery} alt="Icons of services" />
        <div>
          <h3>FREE SHIPPING</h3>
          <p>Free shipping on all order above 100$</p>
        </div>
      </div>
      <div className="service">
        <img src={returnFree} alt="Icons of services" />
        <div>
          <h3>30 DAYS RETURN </h3>
          <p>Simply return it within 30 days for an exchange</p>
        </div>
      </div>
      <div className="service">
        <img src={securePayment} alt="Icons of services" />
        <div>
          <h3>100% PAYMENT SECURE</h3>
          <p>Centralized Secure payment method</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
