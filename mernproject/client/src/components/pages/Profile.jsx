import React, { Component } from 'react'
import api from '../../api'

export default class profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profile: null,
      message: null,
    }
  }
  render() {
    return (
      <div className="profile">
        <h2>Profile</h2>
        <h4>Welcome to your profile page!</h4>

        <div className="result">{this.state.profile}</div>

        {this.state.message && (
          <div className="info info-danger">{this.state.message}</div>
        )}
      </div>
    )
  }
  // componentDidMount() {
  //   api
  //     .getprofile()
  //     .then(data => this.setState({ profile: data.profile }))
  //     .catch(err => this.setState({ message: err.toString() }))
  // }
}
