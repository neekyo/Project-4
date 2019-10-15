import React, { Component } from 'react'
import axios from 'axios'

export default class Spin extends Component {
    state = {
      beers : [],
      beer: {},
      style : {
        width: '50px',
        transition: 'all 5s',
        position: 'fixed',
        top: '35vh',
        left: '47vw'
      },
     winner: {},
     users : [{ name: 'A'}, {name: 'B'}, {name: 'C'}, {name: 'D'}, {name: 'E'}]
    }

    componentDidMount() {
    axios.get(`https://api.punkapi.com/v2/beers?page=1&per_page=80`)
    .then((response) => {
      console.log(response.data)
      let randomBeer = response.data[Math.floor(Math.random()*response.data.length)]
      this.setState({
        beers: response.data,
        beer: randomBeer
      })
    })
      .catch(err => console.log(err))
  }

  spinTheBottle = ()=>{
      let users = this.state.users
      let index = Math.floor(Math.random()*users.length)
      let winner = users[index]

      console.log('our winner is ', winner)

      let min = index*(360/users.length)
      let max = (index+1)*(360/users.length)
      let rotate = getRandomArbitrary(min, max) + Math.floor(Math.random()*20)*360  - ((360/users.length)*.5)
      let style = {...this.state.style}
      
      style['transform'] = `rotate(${rotate}deg)`
      
      this.setState({style})

      setTimeout(()=>{
        this.setWinner(winner)
      }, 5000)
  }

  setWinner = (winner) => {
    this.setState({winner})
  }

  drawUsers = () => {
    let users = [...this.state.users]
    users = arrangeElementsInCircle(users, window.innerHeight/2, window.innerWidth/2, 300)
    console.log(users)

    return users.map(eachUser => {
      let style = {
        position:'fixed', 
        color: 'red', 
        bottom: eachUser.x,
        left: eachUser.y,
      }
      return <li style={style}> { eachUser.name }</li>
    })
  }

  render() {
    return (
      <div>
      <button className="button spin" onClick={this.spinTheBottle}>Spin</button>
      <div className="winner">
      <h5><b>The winner is: {this.state.winner.name}</b></h5>
      <div className="board">
        <img style={this.state.style} src={this.state.beer.image_url} alt=""/>
        <ul className="players">
        {this.drawUsers()}
        </ul> 
      </div>
      </div>
      </div>
    )
  }
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
  }

function arrangeElementsInCircle (elements, x, y, r) {
  for (var i = 0; i < elements.length; i++) {
      elements[i].scaleX = 1 / elements.length
      elements[i].scaleY = 1 / elements.length
      elements[i].x = (x + r * Math.cos((2 * Math.PI) * i/elements.length))
      elements[i].y = (y + r * Math.sin((2 * Math.PI) * i/elements.length))
  }
  return elements;
}