import { user_type } from "../types/user";
import { Request, Response } from "express";

export let users: user_type[] = [
    {
        name: "nada",
        age : 20
    },
    {
        name: "Ali",
        age : 21
    },
    {
        name: "alice",
        age : 30
    },
    {
        name: "mona",
        age : 33
    }

];


export function getUserById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    if (id >= 0 && id < users.length) {
        res.status(200).json(users[id]);
    } else {
        res.status(404).json({ message: "Car not found" });
    }
}

export function addUser(req: Request, res: Response) {
    
    const name = req.body.name; 
    const age = req.body.age;  
    if (name !== undefined && age !== undefined) {
        const newUser: user_type = { 
            name: name,
            age: age,
        }; 
        
        users.push(newUser); 
        
        res.status(201).json("Added Successfully");
    } else {
        res.status(400).json("Missing user data"); 
    }
}

export function deleteUser(req: Request, res: Response) {
    const id = parseInt(req.params.id);

    if (id >= 0 && id < users.length) {
        const delCar= users.splice(id, 1);
        res.status(200).json("User Deleted Successfully");
    } else {
        res.status(404).json("User not found");
    }
}
