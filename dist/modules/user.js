"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
exports.getUserById = getUserById;
exports.addUser = addUser;
exports.deleteUser = deleteUser;
exports.users = [
    {
        name: "nada",
        age: 20
    },
    {
        name: "Ali",
        age: 21
    },
    {
        name: "alice",
        age: 30
    },
    {
        name: "mona",
        age: 33
    }
];
function getUserById(req, res) {
    const id = parseInt(req.params.id);
    if (id >= 0 && id < exports.users.length) {
        res.status(200).json(exports.users[id]);
    }
    else {
        res.status(404).json({ message: "Car not found" });
    }
}
function addUser(req, res) {
    const name = req.body.name;
    const age = req.body.age;
    if (name !== undefined && age !== undefined) {
        const newUser = {
            name: name,
            age: age,
        };
        exports.users.push(newUser);
        res.status(201).json("Added Successfully");
    }
    else {
        res.status(400).json("Missing user data");
    }
}
function deleteUser(req, res) {
    const id = parseInt(req.params.id);
    if (id >= 0 && id < exports.users.length) {
        const delCar = exports.users.splice(id, 1);
        res.status(200).json("User Deleted Successfully");
    }
    else {
        res.status(404).json("User not found");
    }
}
