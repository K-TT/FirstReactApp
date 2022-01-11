import './App.css';

function Header(props) { 
  return (
    <header>
      <h1>My first React App</h1>
    </header>
  );
}

function Main() { 
  return (
    <section>
      <p>Today I have learned something new.</p>
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
      <Header /> 
      <Main /> 
      <Footer /> 
    </div>
  );
}

export default App;
