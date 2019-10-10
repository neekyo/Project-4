const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const breweriesSchema = new Schema({
  address: String,
  city: String,
  province: String, //actually just a state (usually)
  name: String,
  // website: String, might use website l8r
});

const Breweries = mongoose.model("Breweries", breweriesSchema);
module.exports = Breweries;