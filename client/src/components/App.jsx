import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Signup from './pages/Signup'
import api from '../api'
import Beers from './pages/Beers'
import Breweries from './pages/Breweries'
import NavbarPage from './pages/NavbarPage'
// import Footer from './pages/Footer'
import Spin from './pages/Spin'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: "",
      name: "",
      tagline: "",
      description: "",  
      image_url: "",
      abv: "",
      ibu: "",
      ingredients: "",
      food_pairing: "",
    }
  }

  handleLogoutClick(e) {
    api.logout()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <NavbarPage/>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />          
          <Route path="/breweries" component={Breweries} />
          <Route path="/spin" component={Spin} />
          <Route path="/beers" component={Beers} />
          <Route path="/signup" component={Signup} /> 
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    )
  }
}






