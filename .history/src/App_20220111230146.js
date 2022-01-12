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

function App(props) {
  if (props.authorized) {
    return <SecretComponent />;
  }
  else { 
    return <RegularComponent />;
  }
  /*  
  return (
    <div className="App">



      <Header name = "Kateryna"/> 
      <Main adjective="missing" skills={ skillObjects}/> 
      <Footer year={ new Date().getFullYear()}/> 
    </div>
  );*/
}

export default App;
