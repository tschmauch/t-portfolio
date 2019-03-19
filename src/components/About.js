import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

class About extends Component {
    render() {
      return (
        <div className='about row mainRow'>
         <p id='aboutUs'>Angelos Media was founded in Salt Lake City, Utah.  Colby Angelos founded the company after graduating with a film production degree from the University of Utah.  Angelos Media welcomes all projects with open arms, and an open mind to deliver the product of a lifetime. 
         <br/>
         <br/>
         Stazia Tippetts leads Angelos Media's creative team. With a background in art instillation, creative producing, and huge media backround, Stazia brings a whole new producer's outlook to the game. </p>
        </div>
      );
    }
  }

export default About;