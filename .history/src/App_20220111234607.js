import React, { useEffect, useState} from 'react';
import './App.css';
import mernLogo from './mern-logo.jpeg';


function App() {
  
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");

  useEffect(() => { console.log("It`s " + emotion + " around here!") }, [emotion]);
  useEffect(() => { console.log("It`s " + secondary + " around here!") }, [secondary]);
  return (
    <>
      <h1>Current emotion is {emotion} and { secondary}</h1>
      <button onClick={() => setEmotion("happy")}>Make Happy</button>
      <button onClick={()=>setSecondary("crabby") }>Make Crabby</button>
      <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
      <button onClick={()=>setEmotion("enthusiastic") }>Enthuse</button>
    </>
  );
  
  
}

export default App;



