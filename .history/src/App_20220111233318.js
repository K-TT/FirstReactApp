import React, { useState, useEffect} from 'react';
import './App.css';
import mernLogo from './mern-logo.jpeg';


function App({ authorized }) {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <input type="checkbox"
        value={checked}
        onChange={()=>setChecked((checked)=>!checked) } />
    </>
  );
  
}

export default App;


/*
function SecretComponent(props) { 
  return (
    
      <h1>Secret information for authorized users only</h1>
  
  );
}

function RegularComponent(props) { 
  return (
    
      <h1>Info for everyone</h1>
  
  );
}*/

/*
function Header(props) { 
  return (
    <header>
      <h1>My first React App. {props.name}</h1>
    </header>
  );
}

function Main(props) { 
  return (
    <section>
      <p>Now I got a {props.adjective} skill for the stack</p>
      <img src={mernLogo} height={200} alt="MERN Stack: MongoDB, ExpressJS, ReactJS, NodeJS"/>
      <ul style={{textAlign:"left"} }>
        {props.skills.map((skill) => (
          <li key={skill.id}>{skill.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) { 
  return (
    <footer>
      <p>Copyright { props.year}</p>
    </footer>
  );
}

const skills = [
  "MongoDB",
  "ExpressJS",
  "NodeJS"
];

const skillObjects = skills.map((skill, i) => ({ id: i, title: skill }));
*/
//console.log(skillObjects)

//skills.map((skill) => console.log(skill));


/*  
  return (
    <div className="App">



      <Header name = "Kateryna"/> 
      <Main adjective="missing" skills={ skillObjects}/> 
      <Footer year={ new Date().getFullYear()}/> 
    </div>
  );*/


  /*return (
    <>
      {authorized ?<SecretComponent /> : <RegularComponent />}
    </>
    ) ;*/


    /* const [emotion, setEmotion] = useState("happy");
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
  );*/