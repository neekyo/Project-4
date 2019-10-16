import React, { Component } from 'react'
import api from '../../api'
// import SimpleMap from './components/SimpleMap'

export default class Breweries extends Component {
  constructor(props) {
    super(props)
    this.state = {
      breweries: [],  
      filteredBreweries: [],
    }
  }

render() {
  return (
    <React.Fragment>
    <div className="breweries">
      <h2>Breweries (25,000+!)</h2>
      {this.state.breweries.map(c => (
        <li key={c._id}>{c.address}</li>
      ))}
    </div>

    <div className="Breweries">
      {this.state.filteredBreweries.map((eachBrewery, i) => (
        <div className="Beers">
        {this.state.filteredBeers.map((eachBeer, i) => (
          <div key={i} className = "eachBeer">
          <img  src={eachBeer.image_url} alt=""/>
          <ul className = "beerDeets">
          <p key={i+'a'}>Name: {eachBeer.name}</p>
          <p key={i+'b'}>ABV: {eachBeer.abv}%</p>
          <p key={i+'c'}>Tag: {eachBeer.tagline}</p>
          </ul>
          <button className='favorite button' onclick="addFavorite()">Add Favorite</button>
          </div>
        ))}
      </div>
      ))}
    </div>
    </React.Fragment>
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
