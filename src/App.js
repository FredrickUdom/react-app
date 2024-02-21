import './App.css';
import Navbar from './Navbar'
function App() {
  const greet = 'Welcome to your first coding in ReactJs framework'
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <h1>{greet}</h1>
        <p>{Math.random() * 10}</p>
      </div>
    </div>
  );
}

export default App;
