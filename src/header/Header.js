import React, { Component } from 'react'
import { Link } from 'react-router'

const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><a href="#">Home</a></li>
      <li><Link to="/">Link 1</Link></li>
      <li><Link to="/">Link 1</Link></li>
      <li><Link to="/">Link 1</Link></li>
    </ul>
  </div>
</nav>
    )
}

export default Header;