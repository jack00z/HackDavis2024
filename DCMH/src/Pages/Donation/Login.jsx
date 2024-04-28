import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState('');
  
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the password is correct
    if (password === '2222') {
      // Redirect to another page
      navigate('/DonationAdmin');
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  return (
    <div>
      <h2>Enter Password</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
