import Navbar from './Navbar';
import Home from './Home';
import Create from './create';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  // const greet = 'Welcome to your first coding in ReactJs framework'
  return (
    <Router>
        <div className="App">
          <Navbar/>
          <div className="content">
           <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/create">
                <Create />
              </Route>
            </Switch>
          </div>
        </div>
    </Router>
  );
}

export default App;
