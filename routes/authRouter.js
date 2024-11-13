var express = require("express");
var router = express.Router();

const { check } = require("express-validator");

const authcontroller = require("../controller/authController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.post(
  "/registration",
  [
    check("username", "Имя пользователя не может быть пустым").notEmpty(),
    check(
      "password",
      "Пароль должен быть больше 4 и меньше 10 символов"
    ).isLength({ min: 4, max: 10 }),
  ],
  authcontroller.registration
);
router.post("/login", authcontroller.login);
router.get("/users", roleMiddleware(["ADMIN"]), authcontroller.getUsers);

module.exports = router;
