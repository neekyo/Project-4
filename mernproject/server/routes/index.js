const express = require('express')
const { isLoggedIn } = require('../middlewares')
const router = express.Router()
const User = require('../models/User')

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

module.exports = router
