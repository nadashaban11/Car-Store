import { Router } from "express";
import { addInterest, getInterestsByUserId } from "../modules/interest";

const interestRouter = Router();

interestRouter.post("/", addInterest);
interestRouter.get("/:userId", getInterestsByUserId);

export default interestRouter;