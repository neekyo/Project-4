const mongoose = require('mongoose')

const beersSchema = new mongoose.Schema({
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

const Beers = mongoose.model('Beers', beersSchema)

module.exports = Beers;