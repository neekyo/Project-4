const mongoose = require('mongoose')

const beerSchema = new mongoose.Schema({
  id: Number,
  name: String,
  tagline: String,
  description: String,
  image_url: String,
  abv: Number,
  ibu: Number,
  ingredients: Array,
  food_pairing: [String],
})

const Beer = mongoose.model('Beer', beerSchema)

module.exports = Beer;