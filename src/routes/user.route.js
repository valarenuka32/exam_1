const express = require("express");
const { userController } = require("../controller");

const router = express.Router();

// create
router.post(
    "/create-user",
    userController.createUser
);
// list
router.get(
    "/list",
    userController.userList
);
// update
router.put(
    "/update-recode/:userId",
    userController.updateRecode
);
// delete
router.delete(
    "/delete-recode/:userId",
    userController.deleteRecode
);

module.exports = router;