//Dependencies
const express = require(`express`);
const router = express.Router();
//req MOMNT schema
const Momnt = require(`../models/momnt.js`);

//SEED ROUTE
router.get(`/seed`, (req, res) => {
  Momnt.create({
    moment: `Watched SpaceX Dragon 2 Launch`,
    location: `Florida`,
    description: `the first private company to send astronauts to the International Space Station (Dragon 2 in 2020)`,
    image: `https://www.thespacereview.com/archive/3966a.jpg`,
  });
});

//UPDATE - PUT ROUTE
router.put(`/:id`, (req, res) => {
  Momnt.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }, //returns the item updated
    (err, updatedMomnt) => {
      res.json(updatedMomnt);
    }
  );
});

//DELETE ROUTE
router.delete(`/:id`, (req, res) => {
  Momnt.findByIdAndRemove(req.params.id, (err, deletedMomnt) => {
    res.json(deletedMomnt);
  });
});

//CREATE ROUTE
router.post("/", (req, res) => {
  Momnt.create(req.body, (err, createdMomnt) => {
    res.json(createdMomnt);
  });
});

//READ (INDEX) ROUTE
router.get("/", (req, res) => {
  Momnt.find({}, (err, foundMomnt) => {
    res.json(foundMomnt);
  });
});

//Export express router
module.exports = router;
