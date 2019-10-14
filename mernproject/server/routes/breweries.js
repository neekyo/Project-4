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

module.exports = router
