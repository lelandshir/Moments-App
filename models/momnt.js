//Declare and Require Mongoose
const mongoose = require(`mongoose`).set(`debug`, true);

//MOMNT Schema
const momntSchema = new mongoose.Schema({
  moment: { type: String, required: true },
  location: { type: String, required: true },
  // date: { type: Date, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});
//Declare MOMNT schema and sub-db name
const Momnt = mongoose.model(`Moment`, momntSchema);
//Export Schema
module.exports = Momnt;
