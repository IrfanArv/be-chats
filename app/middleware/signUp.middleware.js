const Accounts = require("../models").Accounts;

module.exports.registerAccountCheck = function (req, res, next) {
  try {
    Accounts.findOne({
      where: {
        email: req.body.email,
      },
    }).then((accountCheck) => {
      if (accountCheck) {
        res.status(400).send({
          status: 400,
          success: false,
          message: "Kamu sudah terdaftar ! Silahkan Login",
        });
        return;
      }
      next();
    });
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
};
