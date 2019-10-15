import React, { Component } from 'react'

export default class NavbarPage extends Component {
  render() {
    return (
<React.Fragment>
<nav className="mb-1 navbar navbar-expand-lg navbar-dark default-color">
  <a className="nav-item logo" href="/"><span className="orange">[</span>Beertastic<span className="orange">]</span></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
    aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a href="/">Home
          <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item">
        <a href="/beers">Beers</a>
      </li>
      <li className="nav-item">
        <a  href="/breweries">Breweries</a>
      </li>
      <li className="nav-item">
        <a href="/spin">Spin</a>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto nav-flex-icons">
      <li className="nav-item">
        <a className="waves-effect waves-light" href="https://twitter.com/">
          <i className="fab fa-twitter"></i>
        </a>
      </li>
      <li className="nav-item">
        <a className="waves-effect waves-light" href="https://accounts.google.com/signin/v2/sl/pwd?service=CPanel&p&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
          <i className="fab fa-google-plus-g"></i>
        </a>
      </li>
      <li className="nav-item dropdown">
        <div className="dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="fas fa-user"></i>
        </div>
        <div className="dropdown-menu dropdown-menu-right dropdown-default"
          aria-labelledby="navbarDropdownMenuLink-333">
          <a className="dropdown-item" href="/signup">Sign up</a>
          <a className="dropdown-item" href="/login">Log in</a>
          <a className="dropdown-item" href="/profile">Profile</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
</React.Fragment>
    )
  }
}
