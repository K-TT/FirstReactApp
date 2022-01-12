import React, { useReducer, useState, useEffect} from 'react';
import './App.css';
import mernLogo from './mern-logo.jpeg';

//https://api.github.com/users/K-TT

function App() {
  const [checked, toggle] = useReducer(
    (checked) => !checked,
    false);
  return (
    <>
      <input type="checkbox"
        value={checked}
        onChange={toggle} />
      
      <p>It is { checked ? "checked":"not checked"}</p>
    </>
  );
  
  
  
}

export default App;
