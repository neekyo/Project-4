const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const breweriesSchema = new Schema ({
  name: String, 
  type: String,
  city: String,
  state: String,
  picture: String, 
  numberOfBeers: Number,
  food: String,
  signatureBeer: String,
  website: String,
});

const Breweries = mongoose.model("Breweries", breweriesSchema);
module.exports = Breweries;