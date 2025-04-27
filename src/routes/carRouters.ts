import {car_type} from "../types/car";
import { getCarById , getAllCars, addCar , deleteCar } from "../modules/car";
import { Router } from "express";


export const carRouter = Router();


carRouter.get("/", getAllCars);
carRouter.post("/", addCar);
carRouter.get("/:id", getCarById);
carRouter.delete("/:id", deleteCar);

export default carRouter;