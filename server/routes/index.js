const express = require('express');
const { isLoggedIn } = require('../middlewares');
const router = express.Router();
const User = require('../models/User');
const axios = require('axios');

router.get('/profile', isLoggedIn, (req, res, next) => {
	res.json({
		user: req.user
	});
});

router.get('/getAllTheUsers', (req, res, next) => {
	User.find()
		.then((user) => {
			res.json(user);
		})
		.catch((err) => next(err));
});

router.get('/getTheBeers', (req, res, next) => {
	axios
		.get(`https://api.punkapi.com/v2/beers?page=1&per_page=80`)
		.then((response) => {
			res.json(response.data);
		})
		.catch((err) => console.log(err));
});

router.post('/beerToProfile', isLoggedIn, (req, res, next) => {
	console.log('Added to favorites', req.user, req.body);
	User.findByIdAndUpdate(req.user._id, { $push: { beers: req.body } }, { new: true })
		.then((user) => {
			res.json({ user });
		})
		.catch((err) => console.log(err));
});

router.get('/getTheUser', (req, res, next) => {
	res.json(req.user);
});
module.exports = router;
