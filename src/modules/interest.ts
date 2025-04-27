import { interest_type } from "../types/interest";
import { users } from "./user";
import car, { cars } from "./car";
import { Request, Response } from "express";


export let interests: interest_type[] = [
    { userId: 0, carId: 0 }, 
    { userId: 1, carId: 2 }, 
    { userId: 2, carId: 1 }  
];

export function addInterest(req: Request, res: Response) {
    const userId = req.body.userId;
    const carId = req.body.carId;

    if (userId !== undefined && carId !== undefined && userId >=0 && userId < users.length &&carId>=0 && carId < cars.length) {
        const newInterest: interest_type = {
            userId: userId,
            carId: carId
        };

        interests.push(newInterest);
        res.status(201).json("Interest Added Successfully");
    } else {
        res.status(400).json("Invalid user id or car id");
    }
}


export function getInterestsByUserId(req: Request, res: Response) {
    const userId = parseInt(req.params.userId);

    if (userId >= 0 && userId < users.length) {
        const userInterests = interests
            .filter(interest => interest.userId === userId)
            .map(interest => ({
                car: cars[interest.carId],
                user: users[interest.userId]
            }));

        res.status(200).json(userInterests);
    } else {
        res.status(404).json("User not found");
    }
}

