import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Pages/Home/Header/Header';
import Home from './components/Pages/Home/Home';
import AboutPage from './components/Pages/AboutPage/AboutPage';
import ServicePage from './components/Pages/ServicePage/ServicePage';
import Gallery from './components/Pages/Gallery/Gallery';
import NotFound from './components/Pages/notFound/NotFound';
import Footer from './components/Pages/Home/Footer/Footer';
import Blogs from './components/Pages/Blogs/Blogs';
import ServiceDetails from './components/Pages/ServiceDetails/ServiceDetails';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/Pages/SignIn/PrivateRoute/PrivateRoute';
import SignIn from './components/Pages/SignIn/SignIn';


function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <PrivateRoute path='/services'>
              <ServicePage></ServicePage>
            </PrivateRoute>
            <PrivateRoute path='/servicedetails/:serviceKey'>
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path='/blogs'>
              <Blogs></Blogs>
            </Route>
            <Route path='/gallery'>
              <Gallery></Gallery>
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
    </AuthProvider>
    </div>
  );
}

export default App;
