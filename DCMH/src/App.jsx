// importing libraries
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { lazy, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

// importing components
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

// importing pages
import Home from "./Pages/Home/Home";
import Donation from "./Pages/Donation/Donation"; 
import DonationCS from "./Pages/Donation/DonationCS";
import DonationFS from "./Pages/Donation/DonationFS";
import DonationH from "./Pages/Donation/DonationH";
import DonationM from "./Pages/Donation/DonationM";

// importing styles
import "./App.css";

function App() {
  // Adding unique session id for each user
  useEffect(() => {
    if (localStorage.getItem("sessionID") != null) {
      console.log("Welcome Back");
    } else {
      localStorage.setItem("sessionID", uuid());
    }
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/donationcs" element={<DonationCS />} />
          <Route path="/donationfs" element={<DonationFS />} />
          <Route path="/donationh" element={<DonationH />} />
          <Route path="/donationm" element={<DonationM />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
