import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  //1st element that is passed to RreactDOM is what to create?
  React.createElement("h1", null, "Hey Everyone!"),
  //2nd element that is passed to RreactDOM is where to create?
  document.getElementById('root')
);


