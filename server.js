//Declare & Require Dependencies
const express = require(`express`);
const methodOverride = require(`method-override`);
const mongoose = require(`mongoose`).set(`debug`, true);
const session = require("express-session");
const db = mongoose.connection; //gauge error and success messages
const app = express();
require(`dotenv`).config();
//Call on Environmentals
const PORT = process.env.PORT || 3005;
const MONGODB_URI = process.env.MONGODB_URI;

//Middleware Stack
app
  .use(express.static(`public`))
  .use(express.urlencoded({ extended: false }))
  .use(methodOverride(`_method`))
  .use(
    session({
      secret: process.env.SECRET,
      resave: false,
      saveUninitialized: false,
    })
  );
//Connect to Mongo
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  autoIndex: false,
});

//Declare & Use the momnt controller
const momntController = require(`./controllers/momnt.js`);
app.use(`/momnt`, momntController);

//DB Error & Success Messages ES6(f)
db.on(`error`, (err) =>
  console.log(err.message + ` Mongod may not be running?`)
);
db.on(`connected`, (err) => console.log(`mongo connected: `, MONGODB_URI));
db.on(`disconnected`, () => console.log(`mongo disconnected`));

//Listen on PORT
app.listen(PORT, () => {
  console.log(`🌎 MOMNT ⏳is Creating Memories on Port: ${PORT}`);
});
