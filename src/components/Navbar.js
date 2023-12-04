import { NavLink } from "react-router-dom";
import MenuIcon from "../Assets/MenuIcon.png";
import CrossIcon from "../Assets/CrossIcon.png";
import Logo from "../Assets/logo_big.png";
import { useState } from "react";
function Navbar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1 className="logo">S A S</h1>
        <img src={Logo} alt="logoIcon" className="logo-img" />
      </div>
      <ul className={`navbar-list ${isActive ? "navbar-active" : ""}`}>
        <NavLink>
          <li className="navbar-items">Men's</li>
        </NavLink>
        <NavLink>
          <li className="navbar-items">Women's</li>
        </NavLink>
        <NavLink>
          <li className="navbar-items">Kid's</li>
        </NavLink>
        <NavLink>
          <li className="navbar-items">About us</li>
        </NavLink>
        <NavLink>
          <li className="navbar-items">Contact</li>
        </NavLink>
      </ul>
      <div className="navbar-icons">
        {!isActive ? (
          <img
            src={MenuIcon}
            alt="burderMenuIcon"
            onClick={() => setIsActive((prev) => !prev)}
          />
        ) : (
          <img
            src={CrossIcon}
            alt="crossIcon"
            onClick={() => setIsActive((prev) => !prev)}
          />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
