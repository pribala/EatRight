import React from 'react';
import "./Nav.css";
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-clr">
    <Link className="navbar-brand fnt" to="/">
     <i class="fa fa-cutlery" aria-hidden="true"></i> Chef's Book <i class="fa fa-cutlery" aria-hidden="true"></i>
     </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Recipes
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/saved">
            Saved
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
