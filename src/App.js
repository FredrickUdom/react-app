import './App.css';
import Navbar from './Navbar'
import Home from './Home'
function App() {
  // const greet = 'Welcome to your first coding in ReactJs framework'
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        {/* <h1>{greet}</h1> */}
        {/* <p>{Math.random() * 10}</p> */}
        <Home />

      </div>
    </div>
  );
}

export default App;
