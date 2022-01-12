import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const [mostImportantItem] = ["boots", "tent", "headlamp"];
console.log(mostImportantItem);

ReactDOM.render(
  //1st element that is passed to RreactDOM is what to create?
  //React.createElement("h1", { style: { color: "blue"}}, "Hey Everyone!"),
  <App authorized={ false}/>,
  //2nd element that is passed to RreactDOM is where to create?
  document.getElementById('root')
);


