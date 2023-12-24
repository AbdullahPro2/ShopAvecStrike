import React from "react";
import { NavLink } from "react-router-dom";
import Cross from "../Assets/CrossIcon.png";

function Alert({ setShowAlert }) {
  return (
    <div className="alert">
      <h3>Please Login or Signup to add the products to your cart</h3>
      <img
        src={Cross}
        alt="Cross"
        onClick={() => setShowAlert(false)}
        className="cross-in-alert"
      />
      <NavLink to="/login">
        <h2 className="alert-link">Login or signup</h2>
      </NavLink>
    </div>
  );
}

export default Alert;
