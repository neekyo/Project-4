const express = require('express')
const Beers = require('../models/Beers')

const router = express.Router()
const axios = require('axios')


router.get('/', (req, res, next) => {

    axios.get('https://api.punkapi.com/v2/beers/1')
    .then((response) => {
      console.log(response.data)
    });

  Beers.find()
    .then(beers => {
      res.json(beers)
    })
    .catch(err => next(err))
})

router.post('/', (req, res, next) => {
  let { id, name, tagline, description, image_url, abv, ibu, ingredients, food_pairing } = req.body
  Beers.create({ id, name, tagline, description, image_url, abv, ibu, ingredients, food_pairing })
    .then(beers => {
      res.json({
        success: true,
        beers,
      })
    })
    .catch(err => next(err))
})

module.exports = router;
