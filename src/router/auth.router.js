const router = require("express").Router();
const authController= require("../controller/auth.controller");

router.post("/", authController.loginController);

module.exports = router;