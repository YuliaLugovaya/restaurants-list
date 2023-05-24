import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header>
        <nav className='nav-container'>
          <div className="nav-wrapper">
            <Link to={`/`}>
              <h1 className='title'>Restaurants</h1>
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/restaurants">Restaurants</Link></li>
              <li><Link to="/add_restaurants">Add a new restaurant</Link></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;