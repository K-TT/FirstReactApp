import React, { useReducer} from 'react';
import './App.css';
import mernLogo from './mern-logo.jpeg';

function SecretComponent(props) { 
  return (
    
      <h1>Secret information for authorized users only</h1>
  
  );
}

function RegularComponent(props) { 
  return (
    
      <h1>Info for everyone</h1>
  
  );
}


function App({ authorized }) {
  
    return (
      <>
        {authorized ?<SecretComponent /> : <RegularComponent />}
      </>
      ) ;
  
  
  
}

export default App;

