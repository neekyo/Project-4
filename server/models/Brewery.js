const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const brewerySchema = new Schema({
  address: String,
  city: String,
  province: String, //actually just a state (usually)
  name: String,
  // website: String, 
});

const Brewery = mongoose.model("Brewery", brewerySchema);
module.exports = Brewery;