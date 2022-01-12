import React, { useReducer, useState, useEffect} from 'react';
import './App.css';
import mernLogo from './mern-logo.jpeg';

//https://api.github.com/users/K-TT

function App(login) {
  const [data, setData] = useState( null);

  useEffect(() => { fetch(`https://api.github.com/users/${login}`)})

  return (
    <div>
      </div>
  );
  
  
  
}

export default App;
