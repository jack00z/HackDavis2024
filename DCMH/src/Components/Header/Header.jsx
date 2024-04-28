import React from "react";
import "./Header.css";
//Navigate
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <div className="h-container">
      <div className="nav-container">
        <div className="home-button">Home</div>
        <uli>About Us</uli>
        <uli>Programs</uli>
        <uli>Events</uli>
        <uli>Volunteer</uli>
        <uli>Contact Us</uli>
        <uli className="donate-button" onClick={() => handleClick("/donation")}>
          Donate
        </uli>
      </div>
    </div>
  );
};

export default Header;
