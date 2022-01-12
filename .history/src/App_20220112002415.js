import React, { useState, useEffect} from 'react';
import './App.css';
import mernLogo from './mern-logo.jpeg';

//https://api.github.com/users/K-TT

function App({ login }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState( null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData);
  }, []);

  if (data) { 
    return (
      <div>
        <h1>Hi, {data.name}</h1>
        <p>{data.location}</p>
        <img alt={data.login} src={ data.avatar_url}/>
      </div>);
  }
  return <div>No user available</div>;
  
}

export default App;
