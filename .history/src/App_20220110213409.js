import './App.css';

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
      <ul style={{textAlign:"left"} }>
        {props.skills.map((skill) => <li>{skill}</li>) }
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

//skills.map((skill) => console.log(skill));

function App() {
  return (
    <div className="App">
      <Header name = "Kateryna"/> 
      <Main adjective="missing" skills={ skills}/> 
      <Footer year={ new Date().getFullYear()}/> 
    </div>
  );
}

export default App;
