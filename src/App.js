import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/'>
            <Home></Home>
          </Route>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
