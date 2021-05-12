import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Services from './components/pages/Services';
import Volunteer from './components/pages/Volunteer';
import Contact from './components/pages/Contact';
import Donate from './components/pages/Donate';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about-us' exact component={AboutUs} />
          <Route path='/services' exact component={Services} />
          <Route path='/volunteer' exact component={Volunteer} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/donate' exact component={Donate} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
