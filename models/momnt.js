//Declare and Require Mongoose
const mongoose = require(`mongoose`)

//MOMNT Schema
const momntSchema = new mongoose.Schema({
  moment: String,
  location: String,
  description: String,
  image: String
});

//Declare MOMNT schema and sub-db name
const Momnt = mongoose.model(`Moment`, momntSchema);
//Export Schema
module.exports = Momnt;
