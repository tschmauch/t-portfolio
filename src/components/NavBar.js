import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/BisoNT.png';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top border-bottom-0">
      <Link to='/' className="navbar-brand" >        
        <img id='navLogo' src={logo} alt="" />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to='/portfolio' className="nav-link" >Portfolio<span className="sr-only"></span></Link>
          </li>
          <li className="nav-item">
            <Link to='/about' className="nav-link" >About</Link>
          </li>
          <li className="nav-item">
            <Link to='/connect' className="nav-link" >Connect</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;