const express = require("express");
/* eslint new-cap: ["error", { "capIsNewExceptions": ["Router"] }] */
const router = express.Router();
const tutorController = require("./../controllers/tutorController");

router.route("/").get(tutorController.getAllTutors);

module.exports = router;
