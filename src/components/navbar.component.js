import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../index.css";

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">ToDoista</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <span class="navbar-text" >
        <Link to="/" className="nav-link">Your ToDo List</Link>
    </span>
        <span class="navbar-text">
        <Link to="/create" className="nav-link">Create ToDo Log</Link>
    </span>
        <span class="navbar-text">
        <Link to="/user" className="nav-link">Create User</Link>
    </span>
        </ul>
        
        </div>
      </nav>
    );
  }
}
