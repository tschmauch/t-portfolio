import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/theoLisa';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top border-bottom-0">
      <Link to='/' className="navbar-brand" >        
        <img id='navLogo' src={logo} alt="" />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to='/video' className="nav-link" >Video<span className="sr-only"></span></Link>
          </li>
          <li className="nav-item">
            <Link to='/about' className="nav-link" >About</Link>
          </li>
          <li className="nav-item">
            <Link to='/photo' className="nav-link" >Photo</Link>
          </li>
          <li className="nav-item">
            <Link to='/contact' className="nav-link" >Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;