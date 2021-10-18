import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Pages/Home/Header/Header';
import Home from './components/Pages/Home/Home';
import AboutPage from './components/Pages/AboutPage/AboutPage';
import ServicePage from './components/Pages/ServicePage/ServicePage';
import Blog from './components/Pages/Blog/Blog';
import Gallery from './components/Pages/Gallery/Gallery';
import Signup from './components/Pages/Signup/Signup';
import SignIn from './components/Pages/SignIn/SignIn';
import NotFound from './components/Pages/notFound/NotFound';
import Footer from './components/Pages/Home/Footer/Footer';


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
            <AboutPage></AboutPage>
          </Route>
          <Route path='/services'>
            <ServicePage></ServicePage>
          </Route>
          <Route path='/blog'>
            <Blog></Blog>
          </Route>
          <Route path='/gallery'>
            <Gallery></Gallery>
          </Route>
          <Route path='/signup'>
            <Signup></Signup>
          </Route>
          <Route path='/signin'>
            <SignIn></SignIn>
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
