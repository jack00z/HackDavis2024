import React, { useState } from 'react';
import supabase from "../../../config/supabaseClient";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Update = () => {
  
  const[table, setTable] = useState('');
  const [productId, setProductId] = useState('');
  const [quantityToAdd, setQuantityToAdd] = useState('');

  let navigate = useNavigate();

  const handleTableChange = (e) => {
    setTable(e.target.value);
  };
  
  const handleProductIdChange = (e) => {
    setProductId(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantityToAdd(e.target.value);
  };

  const handleUpdate = async () => {
    try {
      // Fetch the current quantity from Supabase
      const { data, error } = await supabase
        .from(table)
        .select('quantity')
        .eq('id', productId)
        .single();

      if (error) {
        throw error;
      }

      const currentQuantity = data.quantity;

      // Calculate the new quantity by adding the provided quantity
      const newQuantity = currentQuantity + parseInt(quantityToAdd, 10);

      // Update the quantity in the Supabase table
      const { error: updateError } = await supabase
        .from(table)
        .update({ quantity: newQuantity })
        .eq('id', productId);

      if (updateError) {
        throw updateError;
      }

      alert('Quantity updated successfully!');
    } catch (error) {
      console.error('Error updating quantity:', error.message);
      alert('Error updating quantity. Please try again.');
    }
  };

  return (
    <div>
      <h2>Update Quantity</h2>
      <div>
        <label htmlFor="productId">Product ID:</label>
        <input
          type="text"
          id="productId"
          value={productId}
          onChange={handleProductIdChange}
        />
      </div>
      <div>
      <label htmlFor="table">Table:</label>
        <input
          type="text"
          id="table"
          value={table}
          onChange={handleTableChange}
        />
      </div>
      <div>
        <label htmlFor="quantity">Quantity to Add:</label>
        <input
          type="number"
          id="quantity"
          value={quantityToAdd}
          onChange={handleQuantityChange}
        />
      </div>
      <button onClick={handleUpdate}>Update Quantity</button>
    </div>
  );
};

export default Update;