"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../modules/user");
const userRouter = (0, express_1.Router)();
userRouter.post("/", user_1.addUser);
userRouter.get("/:id", user_1.getUserById);
userRouter.delete("/:id", user_1.deleteUser);
exports.default = userRouter;
