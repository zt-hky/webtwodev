var express = require("express");
var router = express.Router();
var controller = require("../controllers/index");

// More require

router.get("/threatreSets", controller.threatreSet.getAll);

router.get("/threatres", controller.threatre.getAll);

router.post("/threatreSets", controller.threatreSet.post);

router.delete("/cities/:id", controller.city.del);

router.delete("/threatreSet/:id", controller.threatreSet.del);

router.delete("/genre/:id", controller.genre.del);

router.delete("/showTime/:id", controller.showTime.del);

router.delete("/film/:id", controller.film.del);

router.post("/citites", controller.city.add);

router.get("/genreFilms", controller.genre.getAll);

router.get("/showtime", controller.showTime.getAll2);

router.post("/thongkeRap", controller.booking.thongkeRap);
router.post("/thongkePhim", controller.booking.thongkePhim);

router.put("/cities/:id", controller.city.update);
/* GET users listing. */

// where write controller

module.exports = router;