"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cars = void 0;
exports.getAllCars = getAllCars;
exports.getCarById = getCarById;
exports.addCar = addCar;
exports.deleteCar = deleteCar;
exports.cars = [
    {
        brand: "BMW",
        model: 2022,
        class: 'A',
    },
    {
        brand: "nissan",
        model: 2000,
        class: 'B',
    },
    {
        brand: "MG",
        model: 2005,
        class: 'C',
    },
];
;
function getAllCars(req, res) {
    res.status(200).json(exports.cars);
}
;
function getCarById(req, res) {
    const id = parseInt(req.params.id);
    if (id >= 0 && id < exports.cars.length) {
        res.status(200).json(exports.cars[id]);
    }
    else {
        res.status(404).json({ message: "Car not found" });
    }
}
function addCar(req, res) {
    const brand = req.body.brand;
    const model = req.body.model;
    const carClass = req.body.class;
    if (brand !== undefined && model !== undefined && carClass !== undefined) {
        const newCar = {
            brand: brand,
            model: model,
            class: carClass
        };
        exports.cars.push(newCar);
        res.status(201).json("Added Successfully");
    }
    else {
        res.status(400).json("Missing car data");
    }
}
function deleteCar(req, res) {
    const id = parseInt(req.params.id);
    if (id >= 0 && id < exports.cars.length) {
        const delCar = exports.cars.splice(id, 1);
        res.status(200).json("Deleted Successfully");
    }
    else {
        res.status(404).json("Car not found");
    }
}
exports.default = { cars: exports.cars };
