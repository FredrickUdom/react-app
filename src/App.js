import './App.css';

function App() {
  const greet = 'Welcome to your first coding in ReactJs framework'
  return (
    <div className="App">
      <div className="content">
        <h1>{greet}</h1>
        <p>{Math.random() * 10}</p>
      </div>
    </div>
  );
}

export default App;