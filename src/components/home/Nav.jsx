import React from "react";
import "./nav.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavLink = (path) => {
    if (location.pathname === "/") {
      scrollToSection(path);
    } else {
      navigate(path);
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navContainer">
      <div onClick={() => navigate("/")} className="logo">
        <h3>Logo here</h3>
      </div>

      <div className="menuContent">
        <a href="#about" onClick={() => handleNavLink("/")}>
          About Us
        </a>
        <Link to="/contact">Contact</Link>
        <a href="#pricing" onClick={() => handleNavLink("/")}>
          Pricing
        </a>
      </div>
      <div className="buttonDiv">
        <button className="login" onClick={() => navigate("/signin")}>
          Log in
        </button>
        <button className="signup" onClick={() => navigate("/signup")}>
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Nav;
