import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Pages/Home/Header/Header';
import Home from './components/Pages/Home/Home';
import AboutPage from './components/Pages/AboutPage/AboutPage';
import ServicePage from './components/Pages/ServicePage/ServicePage';
import Gallery from './components/Pages/Gallery/Gallery';
import Signup from './components/Pages/Signup/Signup';
import SignIn from './components/Pages/SignIn/SignIn';
import NotFound from './components/Pages/notFound/NotFound';
import Footer from './components/Pages/Home/Footer/Footer';
import Blogs from './components/Pages/Blogs/Blogs';
import ServiceDetails from './components/Pages/ServiceDetails/ServiceDetails';


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
          <Route path='/servicedetails/:serviceKey'>
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route path='/blogs'>
            <Blogs></Blogs>
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
          <Route  path='*'>
           <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
     </Router>
    </div>
  );
}

export default App;
