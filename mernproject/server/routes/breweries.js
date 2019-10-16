const express = require('express')
const Brewery = require('../models/Brewery')

const router = express.Router()

router.get('/', (req, res, next) => {
  Brewery.find()
    .then(breweries => {
      res.json(breweries)
    })
    .catch(err => next(err))
})

router.post('/', (req, res, next) => {
  console.log("------")
  let { address, city, province, name } = req.body
  Brewery.create({ address, city, province, name })
    .then(brewery => {
      res.json({
        success: true,
        brewery,
      })  
    })
    .catch(err => next(err))
})

router.get('/test', (req, res, next)=>{
  console.log("----")
  res.json({message: "----"})
})

router.get('/getTheBeers', (req, res, next) => {
  console.log("here")
  // axios.get(`https://api.punkapi.com/v2/beers?page=1&per_page=80`)
  // .then((response) => {
  //   console.log(response.data)
  //   this.setState({
  //     beers: response.data,
  //     filteredBeers: response.data
  //   })
  // })
  //   .catch(err => console.log(err))
  res.json({message: 'did it'})
})

module.exports = router
