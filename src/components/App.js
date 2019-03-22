import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home.js'
import Portfolio from './Portfolio.js'
import About from './About.js'
import Connect from './Connect.js'
import Footer from './Footer.js'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/about' component={About} />
          <Route exact path='/connect' component={Connect} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;