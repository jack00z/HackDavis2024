import React, { useEffect, useState } from "react";
import "./Donation.css";
import supabase from "../../config/supabaseClient";

const Donation = () => {

  const [cleaning, setCleaning] = useState([]);

  useEffect(() => {
    const getCleaning = async () => {
      const { data } = await supabase
        .from('cleaning')
        .select();

        setCleaning(data);
    }

    getCleaning();

  }, []);

  return (
    <div>
      <h2>Donation Page</h2>
      {cleaning && (
        <div className="items">
          {cleaning.map(item => (
            <p>{item.name}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Donation;
