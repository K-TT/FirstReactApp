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
      <p>Today I have learned something new. I am {props.emotion}</p>
    </section>
  );
}

function Footer() { 
  return (
    <footer>
      <p>It opens new perspectives</p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header name = "Kateryna"/> 
      <Main emotion = "glad"/> 
      <Footer /> 
    </div>
  );
}

export default App;
