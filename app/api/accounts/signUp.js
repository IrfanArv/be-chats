const Accounts = require("../../models").Accounts;
const bcrypt = require("bcryptjs");

module.exports = {
  async main(req, res) {
    try {
      const { email, password } = req.body;

      await Accounts.create({
        email: email,
        password: bcrypt.hashSync(password, 8),
      });

      const response = {
        status: 200,
        success: true,
        message: "Register Successfully",
      };
      return res.status(200).send(response);
    } catch (err) {
      const response = {
        status: 400,
        success: false,
        message: "Bad Request",
        data: {
          errors: err.message,
        },
      };
      return res.status(400).send(response);
    }
  },
};
