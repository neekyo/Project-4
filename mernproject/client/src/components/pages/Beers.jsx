import React, { Component } from 'react'
import axios from 'axios'
import api from '../../api'

export default class Beers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      beers: [],
      filteredBeers: [],
    } 
  }

  componentDidMount() {
    console.log("This should appear")
    api.test()
    .then(() => {
      console.log('SUCCESS!')
    }
    )
    .catch(err => {console.error(err)})
  }

  searchBeers = (e) => {
    let search = e.target.value
    let filteredBeers = this.state.beers.filter(entry => {
      return entry.name.toLowerCase().includes(search.toLowerCase())
    });
    this.setState({
      filteredBeers: filteredBeers
    });    
    console.log(this.state.filteredBeers)
  };

  addFavorite = (e) => {
    
  }
  
  render() {
    return (
      <div className = "background">
        <h2>Brews (80)</h2>

      <form className="brewSearch">
      <input
        onChange={this.searchBeers} 
        placeholder=" Search all brews"
        id="search"
        type="text"
        className='search'
      />
      </form>

      <div className="Beers">
        {this.state.filteredBeers.map((eachBeer, i) => (
          <div key={i} className = "eachBeer">
          <img src={eachBeer.image_url} alt=""/>
          <ul className = "beerDeets">
          <h3 key={i+'a'}>{eachBeer.name}</h3>
          <p key={i+'b'}>ABV: {eachBeer.abv}%</p>
          <p key={i+'c'}>Tag: {eachBeer.tagline}</p>
          <button className='favorite button' onclick="addFavorite()">Add Favorite</button>
          </ul>
          
          </div>
        ))}
      </div>
      </div>
    )
  }
}


