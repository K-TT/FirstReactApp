import './App.css';

function Header() { 
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

function App() {
  return (
    <div className="App">
      <Header /> 
      <Main /> 
    </div>
  );
}

export default App;
