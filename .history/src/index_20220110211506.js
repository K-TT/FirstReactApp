import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  //1st element that is passed to RreactDOM is what to create?
  //React.createElement("h1", { style: { color: "blue"}}, "Hey Everyone!"),
  <App />,
  //2nd element that is passed to RreactDOM is where to create?
  document.getElementById('root')
);


