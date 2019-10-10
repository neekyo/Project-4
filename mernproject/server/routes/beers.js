const express = require('express')
const Beers = require('../models/Beers')

const router = express.Router()
const axios = require('axios')

const JSON = require('circular-json');

router.get('/', (req, res, next) => {
  // let allBeers = []
  ({})
    .then((response) => {
      res.json(response);
    })
    // .then(beers => {
    //   Beers.create(beers)
    //   console.log("success")
    // })
    // .catch(err => next(err))
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
