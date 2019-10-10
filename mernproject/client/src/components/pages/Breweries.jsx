import React, { Component } from 'react'
import api from '../../api'

export default class Breweries extends Component {
  constructor(props) {
    super(props)
    this.state = {
      breweries: [],
    }
  }

  render() {
    return (
      <div className="breweries">
        <h2>Breweries</h2>
        {this.state.breweries.map(c => (
          <li key={c._id}>{c.name}</li>
        ))}
      </div>
    )
  }

  componentDidMount() {
    api
      .getBreweries()
      .then(breweries => {
        console.log(breweries)
        this.setState({
          breweries: breweries,
        })
      })
      .catch(err => console.log(err))
  }
}
