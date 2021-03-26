import React from 'react'
import './App.css';
import Navbar from './components/Navbar.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home.js'
import Projects from './components/pages/Project.js'
import AboutMe from './components/pages/AboutMe.js'
import Contact from './components/pages/Contact.js'
import Info from './components/pages/Info.js'
function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/projects' component={Projects} />
          <Route path='/about-me' component={AboutMe} />
          <Route path='/contact-info' component={Info} />
          <Route path='/sign-in' component={Contact} />
        </Switch>
    </Router>
    </>
  );
}

export default App;
