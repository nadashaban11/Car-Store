"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const interest_1 = require("../modules/interest");
const interestRouter = (0, express_1.Router)();
interestRouter.post("/", interest_1.addInterest);
interestRouter.get("/:userId", interest_1.getInterestsByUserId);
exports.default = interestRouter;
