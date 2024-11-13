var express = require("express");
var router = express.Router();

const { check } = require("express-validator");

const rolecontroller = require("../controller/roleController");
const roleMiddleware = require("../middleware/roleMiddleware");

router.post("/add", roleMiddleware(["ADMIN"]), rolecontroller.addRole);
router.delete("/delete", roleMiddleware(["ADMIN"]), rolecontroller.deleteRole);

module.exports = router;
