import { car_type } from "../types/car";
import { Request, Response } from "express";


export let cars : car_type[] =[
    {
        brand : "BMW",
        model : 2022,
        class : 'A',
    },
    {
        brand : "nissan",
        model : 2000,
        class : 'B',
    },
    {
        brand : "MG",
        model : 2005,
        class : 'C',
    },
];;
export function getAllCars(req: Request, res: Response) {
    res.status(200).json(cars); 
};


export function getCarById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    if (id >= 0 && id < cars.length) {
        res.status(200).json(cars[id]);
    } else {
        res.status(404).json({ message: "Car not found" });
    }
}

export function addCar(req: Request, res: Response) {
    
    const brand = req.body.brand; 
    const model = req.body.model;  
    const carClass = req.body.class;
    if (brand !== undefined && model !== undefined && carClass !== undefined) {
        const newCar: car_type = { 
            brand: brand,
            model: model,
            class: carClass
        }; 
        
        cars.push(newCar); 
        
        res.status(201).json("Added Successfully");
    } else {
        res.status(400).json("Missing car data"); 
    }
}

export function deleteCar(req: Request, res: Response) {
    const id = parseInt(req.params.id);

    if (id >= 0 && id < cars.length) {
        const delCar= cars.splice(id, 1);
        res.status(200).json("Deleted Successfully");
    } else {
        res.status(404).json("Car not found");
    }
}

export default {cars};
