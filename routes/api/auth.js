const express = require("express");
const ctrl = require("../../controllers/auth");
const { validateBody } = require("../../middlewares");
const { schemas } = require("../../models/user");

const router = express.Router();

router.post("/signup", validateBody(schemas.signupSchema), ctrl.signup);
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

module.exports = router;
