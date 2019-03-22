import React, { Component } from 'react';
// import { Route, Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div className='about wrapper'>
        <section className='parallaxSection parallax bg1'>
        <h1>Hello, there!</h1>
        </section>
        <p className='parallaxSection static aboutMe'>
          My name is Tyler Schmauch.  I'm new to web development as I'm trying to pivot away from my current career path.  For the past 5 years, I have worked in the automotive
          and insurance industries.  I have spent time in account management, business development, operations management and strategic planning capacities.
          I'm capable of and want to do a series of non-routine tasks that require social intelligence, complex critical thinking and creative problem solving.
         <br />
          <br />
          I was born in Park City, Utah.  Through my youth I was fascinated with math and science, computers and skiing.
          Before graduating from high school, I had completed two years of college coursework,  competed on a national stage in both music and academics, and won a "Best in State"
            award in mathematics.
         <br />
          <br />
          After high school I attended the University of Utah where I received a B.S. in Physics with a Spanish minor.  During my time at the U I helped to start a
          new fraternity (Phi Delta Theta) and served on the University's Interfraternal Council (IFC), the governing body over campus Greek life.  I was recognized as the "IFC Member
          of the Year" for my efforts to improve Greek life and the relationship between the Greek community, the surrounding community and the University.
         <br />
          <br />
          I now spend the majority of my free time rock climbing, expanding my web development skillset or hanging out with my dog, Theo.
        </p>
        <section className='parallaxSection parallax bg2'>
        </section>
      </div>
    );
  }
}

export default About;