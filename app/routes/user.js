const { Router } = require("express");
const userController = require("../controller/user");

const userRouter = Router();

userRouter.post("/signup", userController.signup);

module.exports = userRouter;
