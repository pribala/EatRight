<<<<<<< HEAD
import React from 'react';
import "./Nav.css";
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-clr">
    <Link className="navbar-brand fnt" to="/">
     <i class="fa fa-cutlery" aria-hidden="true"></i> Chef's Book <i class="fa fa-cutlery" aria-hidden="true"></i>
     </Link>
=======
import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
const Nav = () => (
  <nav className="navbar navbar-expand-lg bg-clr">
    <Link className="navbar-brand fnt" to="/">
      Chef's Book
      <i className="fa fa-cutlery" aria-hidden="true" />
    </Link>
>>>>>>> 70740c726ef00b9344b7d7883736a944f8fb4b53
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
