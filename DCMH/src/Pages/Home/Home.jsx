import React from "react";
import "./Home.css";

//Navigate
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <div className="parent">
      <div className="tparent-container">
        <div className="title-container">
          <div className="title">Davis Community Meals and Housing</div>
        </div>
      </div>
      <div className="text-container">
        <div className="text">
          Davis Community Meals and Housing is a non-profit organization
          dedicated to providing low-income and unhoused individuals and
          families with housing, food, and human services to help them rebuild
          their lives. Join us in our mission to change lives and make
          everlasting impacts.
        </div>
        <div className="dono-container">
          <button
            className="donation-button"
            onClick={() => handleClick("/donation")}
          >
            Donate
          </button>
        </div>
      </div>
      <div className="stats-container">
        <div className="stats-pic"></div>
        <div className="stats-num">
          <span>30,000</span>
          <span>70</span>
          <span>9,000</span>
          <span>500</span>
        </div>
        <div className="stats-words">
          <div className="meals">Meals Provided</div>
          <div className="volunteers">Volunteers</div>
          <div className="dollars">Dollars Raised</div>
          <div className="housing">Housing Provided</div>
        </div>
      </div>
      <div className="resource-container">
        Our Resources
        <div className="resouces"></div>
      </div>
    </div>
  );
};

export default Home;
