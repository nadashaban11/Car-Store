"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const carRouters_1 = __importDefault(require("./routes/carRouters"));
const userRouters_1 = __importDefault(require("./routes/userRouters"));
const interestRouters_1 = __importDefault(require("./routes/interestRouters"));
const app = (0, express_1.default)();
const port = 3000;
const host = "localhost";
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/cars", carRouters_1.default);
app.use("/users", userRouters_1.default);
app.use("/interests", interestRouters_1.default);
app.get('/', (req, res) => {
    res.send('Welcome to Our Car Store');
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
