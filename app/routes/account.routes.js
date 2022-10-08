const express = require("express");
const router = express.Router();
const verifyKey = require("../middleware/verifyKey.middleware");
const signupMiddleware = require("../middleware/signUp.middleware");
const signup = require("../api").signup;

router.post(
  "/api/signup",
  verifyKey,
  signupMiddleware.registerAccountCheck,
  signup.main
);

module.exports = router;
