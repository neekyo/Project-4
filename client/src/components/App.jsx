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
      user: {} 
    }
  }
  componentDidMount(){
    this.getUser()
  }

  handleLogoutClick(e) {
    api.logout()
    this.setState({
      user: {}
    })
  }

  setUser = (user) => {
    this.setState({
      user
    })
  }

  getUser = () => {
    api.getUser().then(theUser => {
      let user = theUser ? theUser : {}
      this.setState({user})
    }).catch(err=>console.error(err))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <NavbarPage/>
        </header>
        <Switch>
          <Route path="/" exact render={(props) => <Home {...props} setUser={this.setUser} user={this.state.user} />} />          
          <Route path="/breweries" render={(props) => <Breweries {...props} setUser={this.setUser} user={this.state.user}/>} />
          <Route path="/spin" render={(props) => <Spin {...props} setUser={this.setUser} user={this.state.user}/>} />
          <Route path="/beers" render={(props) => <Beers {...props} setUser={this.setUser} user={this.state.user}/>} />
          <Route path="/signup" render={(props) => <Signup {...props} setUser={this.setUser} user={this.state.user}/>} />
          <Route path="/login" render={(props) => <Login {...props} setUser={this.setUser} user={this.state.user}/>} />
          <Route path="/profile" render={(props) => <Profile {...props} setUser={this.setUser} user={this.state.user}/>} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    )
  }
}






