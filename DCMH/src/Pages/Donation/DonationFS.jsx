//Imports
import React, { useEffect, useState } from "react";
import "./Donation.css";
import supabase from "../../config/supabaseClient";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//Components
import CleaningCard from "../../Components/CleaningCard";
import FoodCard from "../../Components/FoodCard";
import HygieneCard from "../../Components/HygieneCard";
import MedicineCard from "../../Components/MedicineCard";

const DonationFS = () => {

  let navigate = useNavigate();

  //Different Tables
  const [cleaning, setCleaning] = useState([]);
  const [food, setFood] = useState([]);
  const [hygiene, setHygiene] = useState([]);
  const [medicine, setMedicine] = useState([]);

  //Sorting order
  const[order, setOrder] = useState('name')

  const handleClick = (route) => {
    navigate(route);
  }

  //Grab all the databases
  useEffect(() => {
    const getCleaning = async () => {
      const { data } = await supabase
        .from('cleaning')
        .select()
        .order(order)

        setCleaning(data);
    }
    getCleaning();

    const getFood = async () => {
      const { data } = await supabase
        .from('food')
        .select()
        .order(order)

        setFood(data);
    }
    getFood();

    const getHygiene = async () => {
      const { data } = await supabase
        .from('hygiene')
        .select()
        .order(order)

        setHygiene(data);
    }
    getHygiene();

    const getMedicine = async () => {
      const { data } = await supabase
        .from('medicine')
        .select()
        .order(order)

        setMedicine(data);
    }
    getMedicine();
  }, [order]);

  return (
    <div>
      <h2>Donation Page</h2>

      {/* Buttons */}
      <div className="order">
            {/* Probably sets a flag, and then set if statements on the database elements listed */}
            <button onClick={() => handleClick("/donation")}>All</button>
            <button onClick={() => handleClick("/donationcs")}>Cleaning & Sanitation</button>
            <button onClick={() => handleClick("/donationfs")}>Food & Supplies</button>
            <button onClick={() => handleClick("/donationh")}>Hygiene</button>
            <button onClick={() => handleClick("/donationm")}>Medicine</button>
            <button onClick={() => setOrder('quantity')}>Quantity</button>
            <button onClick={() => setOrder('name')}>Name</button>
      </div>

      {/* Database Elements Listed */}

      {food && (
        <div className="food">
            {food.map((item) => (
              <FoodCard key={item.id} food={item} />
            ))}
      </div>
      
      )} 
    </div>
  );
};

export default DonationFS;

