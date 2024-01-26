const express = require("express");
const controller = require("../Controller/todoController");

const router = express.Router();


router.get("/", controller.get);
router.post("/", controller.post);

module.exports.router = router;