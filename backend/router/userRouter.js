const express = require("express");
const router = express.Router();
const userControler = require("../controller/userController");

router.post("sign-up", userControler.signUp);

module.exports = router;
