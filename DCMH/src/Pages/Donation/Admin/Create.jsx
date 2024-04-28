import React, { useEffect, useState } from "react";
import "./DonationAdmin.css";
import supabase from "../../../config/supabaseClient";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [category, setCate] = useState('')
  const [formError, setFormError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!name || !quantity) {
      setFormError('Please fill in all the fields correctly.')
      return
    }

    const { data } = await supabase
      .from(category)
      .insert([{ name, quantity}])

    if (data) {
      console.log(data)
      setFormError(null)
      navigate('/')
    }
  }

  return (
    <div className="page create">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="category">Category:</label>
        <input 
          type="text" 
          id="category"
          value={category}
          onChange={(e) => setCate(e.target.value)}
        />  

        <label htmlFor="quantity">Quantity:</label>
        <textarea 
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <button>Add New Item</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  )
}

export default Create