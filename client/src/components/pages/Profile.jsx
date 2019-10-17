import React, { Component } from 'react'
import api from '../../api'

export default class profile extends Component {
  constructor(props) {
    super(props)

  }

  showFavs = () => {
    if(this.props.user.beers){
      return this.props.user.beers.map(eachBeer => {
       return <div>{eachBeer.name}</div>
      })
    }
  }
  render() {

    console.log(this)

    return (
      <div className="profile">
        <h2>Profile</h2>
        <h4>Welcome to your profile page!</h4>
        {this.props.user.username}
        {this.showFavs()}
        <div className="favBrew">
        <h5 className="favBrew">Here you can view all the beers you have favorited</h5>
        </div> 
      </div>
    )
  }
}
