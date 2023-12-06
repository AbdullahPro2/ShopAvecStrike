import { NavLink } from "react-router-dom";
import MenuIcon from "../Assets/MenuIcon.png";
import CrossIcon from "../Assets/CrossIcon.png";
import Logo from "../Assets/logo_big.png";
import SearchBarIcon from "../Assets/search-bar-icon.png";
import { useState } from "react";
function Navbar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <nav className="navbar">
        <NavLink to={"/"} onClick={() => setIsActive(false)}>
          <div className="navbar-logo">
            <h1 className="logo">SAS</h1>
            <img src={Logo} alt="logoIcon" className="logo-img" />
          </div>
        </NavLink>
        <ul className={`navbar-list ${isActive ? "navbar-active" : ""}`}>
          <NavLink to={"/product/men"} onClick={() => setIsActive(false)}>
            <li className="navbar-items">Men's</li>
          </NavLink>
          <NavLink to={"/product/women"} onClick={() => setIsActive(false)}>
            <li className="navbar-items">Women's</li>
          </NavLink>
          <NavLink to={"/product/kid"} onClick={() => setIsActive(false)}>
            <li className="navbar-items">Kid's</li>
          </NavLink>
          <NavLink onClick={() => setIsActive(false)}>
            <li className="navbar-items">About us</li>
          </NavLink>
          <NavLink onClick={() => setIsActive(false)}>
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
      <form className="search-bar">
        <input placeholder="search..." className="search" />
        <img
          src={SearchBarIcon}
          alt={"Search Bar Icon"}
          className="search-bar-img"
        />
      </form>
    </>
  );
}

export default Navbar;
