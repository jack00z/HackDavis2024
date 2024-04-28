//Imports
import React, { useEffect, useState } from "react";
import "./DonationAdmin.css";
import supabase from "../../../config/supabaseClient";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//Components
import CleaningCard from "../../../Components/CleaningCard";
import FoodCard from "../../../Components/FoodCard";
import HygieneCard from "../../../Components/HygieneCard";
import MedicineCard from "../../../Components/MedicineCard";

const DonationAdmin = () => {

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
            <button onClick={() => setOrder('quantity')}>Quantity</button>
            <button onClick={() => setOrder('name')}>Name</button>
            <button onClick={() => handleClick("/create")}>Add a new item</button>
            <button onClick={() => handleClick("/update")}>Update inventory</button>
      </div>

      {/* Database Elements Listed */}

      {cleaning && (
        <div className="cleaning">
            {cleaning.map((item) => (
              <CleaningCard key={item.id} cleaning={item} />
            ))}
      </div>
      
      )} 

      {food && (
        <div className="food">
            {food.map((item) => (
              <FoodCard key={item.id} food={item} />
            ))}
      </div>
      
      )} 

      {hygiene && (
        <div className="hygiene">
            {hygiene.map((item) => (
              <HygieneCard key={item.id} hygiene={item} />
            ))}
      </div>
      
      )} 

      {medicine && (
        <div className="medicine">
            {medicine.map((item) => (
              <MedicineCard key={item.id} medicine={item} />
            ))}
      </div>
      
      )} 
    </div>
  );
};

export default DonationAdmin;

