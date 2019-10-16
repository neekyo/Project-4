const express = require('express')
const { isLoggedIn } = require('../middlewares')
const router = express.Router()
const User = require('../models/User')
const axios = require('axios')

router.get('/profile', isLoggedIn, (req, res, next) => {
  res.json({
    user: req.user,
  })
})

router.get('/getAllTheUsers', isLoggedIn, (req, res, next) => {
  User.find()
    .then(user => {
      res.json(user)
    })
    .catch(err => next(err))
})


router.get('/getTheBeers', (req, res, next) => {
  console.log("here????????")
  axios.get(`https://api.punkapi.com/v2/beers?page=1&per_page=80`)
  .then((response) => {
    //console.log(response)
    res.json(response.data)

    // this.setState({
    //   beers: response.data,
    //   filteredBeers: response.data
    // })
  })
    .catch(err => console.log(err))
})

module.exports = router
