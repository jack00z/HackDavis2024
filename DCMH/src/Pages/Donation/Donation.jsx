import React, { useEffect, useState } from "react";
import "./Donation.css";
import supabase from "../../config/supabaseClient";

import CleaningCard from "../../Components/CleaningCard";

const Donation = () => {

  const [cleaning, setCleaning] = useState([]);
  const[order, setOrder] = useState('name')

  useEffect(() => {
    const getCleaning = async () => {
      const { data } = await supabase
        .from('cleaning')
        .select()
        .order(order)

        setCleaning(data);
    }

    getCleaning();

  }, [order]);

  return (
    <div>
      <h2>Donation Page</h2>
      {cleaning && (
        <div className="cleaning">
          <div className="order">
            <p>Sort by:</p>
            <button onClick={() => setOrder('quantity')}>Quantity</button>
            <button onClick={() => setOrder('name')}>Name</button>
            {cleaning.map((item) => (
              <CleaningCard key={item.id} cleaning={item} />
            ))}
      </div>
      </div>
      )}
    </div>
  );
};

export default Donation;

