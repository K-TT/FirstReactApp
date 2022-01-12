import React, { useState, useEffect} from 'react';
import './App.css';
import mernLogo from './mern-logo.jpeg';

//https://api.github.com/users/K-TT

function App({ login }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState( null);

  useEffect(() => {
    if (!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return null;

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