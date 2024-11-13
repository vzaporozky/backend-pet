// const User = require("../modules/User");
const Role = require("../modules/Role");

const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

class authController {
  async addRole(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ message: "Ошибка при регистрации", errors });
      }

      const { value } = req.body;

      const candidate = await Role.findOne({ value });
      if (candidate) {
        return res
          .status(400)
          .json({ message: "Роль с таким именем уже существует" });
      }

      // const userRole = await Role.findOne({ value: "USER" });
      const newRole = new Role({
        value,
      });
      await newRole.save();
      return res.json({ message: "Роль успешно добавлена" });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Registration error" });
    }
  }

  async deleteRole(req, res) {
    try {
      res.json({ message: "Роль успешно удалена" });
    } catch (err) {
      console.log(e);
      res.status(400).json({ message: "Registration error" });
    }
  }
}

module.exports = new authController();
