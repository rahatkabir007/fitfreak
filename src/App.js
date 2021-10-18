import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Header from './components/Pages/Home/Header/Header';
import Footer from './components/Pages/Home/Footer/Footer';
import NotFound from './components/Pages/notFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <Home></Home>
          </Route>
          <Route path='/services'>
            <Home></Home>
          </Route>
          <Route path='/blog'>
            <Home></Home>
          </Route>
          <Route path='/gallery'>
            <Home></Home>
          </Route>
          <Route path='/signup'>
            <Home></Home>
          </Route>
          <Route path='/signin'>
            <Home></Home>
          </Route>
          <Route path='*'>
           <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
     </Router>
    </div>
  );
}

export default App;
