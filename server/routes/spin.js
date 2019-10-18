const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	Spin.find()
		.then((spin) => {
			res.json(spin);
		})
		.catch((err) => next(err));
});

module.exports = router;
