const express = require('express')
const Beers = require('../models/Beer')
const router = express.Router()
const axios = require('axios')
const JSON = require('circular-json');

// router.get('/', (req, res, next) => {
//   // let allBeers = []
//   ({})
//     .then((response) => {
//       res.json(response);
//     })
//     // .then(beers => {
//     //   Beers.create(beers)
//     //   console.log("success")
//     // })
//     // .catch(err => next(err))
// })

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


// router.post('/', (req, res, next) => {
//   let { id, name, tagline, description, image_url, abv, ibu, ingredients, food_pairing } = req.body
//   Beers.create({ id, name, tagline, description, image_url, abv, ibu, ingredients, food_pairing })
//     .then(beers => {
//       res.json({
//         success: true,
//         beers,
//       })
//     })
//     .catch(err => next(err))
// })

module.exports = router;
