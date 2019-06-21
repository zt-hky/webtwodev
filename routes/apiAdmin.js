var express = require("express");
var router = express.Router();
var controller = require("../controllers/index");

// More require

router.get("/threatreSets", controller.threatreSet.getAll);

router.post("/threatreSets", controller.threatreSet.post);

router.delete("/cities/:id", controller.city.del);

/* GET users listing. */

// where write controller

module.exports = router;