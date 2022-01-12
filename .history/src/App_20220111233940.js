import React, { useReducer} from 'react';
import './App.css';
import mernLogo from './mern-logo.jpeg';


function App({ authorized }) {
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

