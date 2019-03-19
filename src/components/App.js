import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home.js'
import Video from './Video.js'
import About from './About.js'
import Photo from './Photo.js'
import Contact from './Contact.js'
import Footer from './Footer.js'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/video' component={Video} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/photo' component={Photo} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;