"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interests = void 0;
exports.addInterest = addInterest;
exports.getInterestsByUserId = getInterestsByUserId;
const user_1 = require("./user");
const car_1 = require("./car");
exports.interests = [
    { userId: 0, carId: 0 },
    { userId: 1, carId: 2 },
    { userId: 2, carId: 1 }
];
function addInterest(req, res) {
    const userId = req.body.userId;
    const carId = req.body.carId;
    if (userId !== undefined && carId !== undefined && userId >= 0 && userId < user_1.users.length && carId >= 0 && carId < car_1.cars.length) {
        const newInterest = {
            userId: userId,
            carId: carId
        };
        exports.interests.push(newInterest);
        res.status(201).json("Interest Added Successfully");
    }
    else {
        res.status(400).json("Invalid user id or car id");
    }
}
function getInterestsByUserId(req, res) {
    const userId = parseInt(req.params.userId);
    if (userId >= 0 && userId < user_1.users.length) {
        const userInterests = exports.interests
            .filter(interest => interest.userId === userId)
            .map(interest => ({
            car: car_1.cars[interest.carId],
            user: user_1.users[interest.userId]
        }));
        res.status(200).json(userInterests);
    }
    else {
        res.status(404).json("User not found");
    }
}
