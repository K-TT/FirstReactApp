import './App.css';

function Header() { 
  return (
    <header>
      <h1>My first React App</h1>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Header /> 
    </div>
  );
}

export default App;
