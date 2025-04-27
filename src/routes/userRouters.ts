import { user_type } from "../types/user";
import { Router } from "express";
import {addUser, getUserById , deleteUser} from "../modules/user"

const userRouter = Router();


userRouter.post("/", addUser);
userRouter.get("/:id", getUserById);
userRouter.delete("/:id", deleteUser);

export default userRouter;