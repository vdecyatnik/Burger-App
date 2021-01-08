var express = require("express");

var router = express.Router();

const burger = require("../models/burger.js");

//Create all the routes
router.get("/", function (req, res) {
  burger.all(function (data) {
    console.log(data);
    res.render("index", {
      burgers: data,
    });
  });
});

module.exports = router;
