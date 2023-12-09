import { NavLink } from "react-router-dom";
import MenuIcon from "../Assets/MenuIcon.png";
import CrossIcon from "../Assets/CrossIcon.png";
import Logo from "../Assets/logo_big.png";
import SearchBarIcon from "../Assets/search-bar-icon.png";
import { useState } from "react";
import { Link } from "react-scroll";
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
          <NavLink to={"/allproducts"} onClick={() => setIsActive(false)}>
            <li className="navbar-items">Products</li>
          </NavLink>
          <NavLink to={"/product/men"} onClick={() => setIsActive(false)}>
            <li className="navbar-items">Mens</li>
          </NavLink>
          <NavLink to={"/product/women"} onClick={() => setIsActive(false)}>
            <li className="navbar-items">Womens</li>
          </NavLink>
          <NavLink to={"/product/kid"} onClick={() => setIsActive(false)}>
            <li className="navbar-items">Kids</li>
          </NavLink>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => setIsActive(false)}
          >
            <li className="navbar-items">About us</li>
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => setIsActive(false)}
          >
            <li className="navbar-items">Contact</li>
          </Link>
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
              className="crossIcon"
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
