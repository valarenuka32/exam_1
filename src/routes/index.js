const express = require("express");

const userRouter = require("./user.route");
const adminRouter = require("./admin.route");

const router = express.Router();

router.app("/user", userRouter);
router.app("/admin", adminRouter);

module.exports = router;