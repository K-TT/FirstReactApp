import React, { useState, useEffect} from 'react';
import './App.css';
import mernLogo from './mern-logo.jpeg';

//https://api.github.com/users/K-TT

function App({ login }) {
  const [data, setData] = useState( null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData);
  }, []);

  if (data) { 
    return <div>{JSON.stringify(data)}</div>
  }
  return <div>No user available</div>;
  
}

export default App;
