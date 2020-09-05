const express = require("express");
const homeController = require("../controller/homeController");

const router = express.Router();

router.route("/").get(homeController);

module.exports = router;
