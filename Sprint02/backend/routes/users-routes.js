import express from "express";

//schema
// import User from "../models/user-model.js";

//controller
// import getAllUsers from "../controllers/users-controller.js";

const UserRoutes = express.Router();

// UserRoutes.get("/", () => getAllUsers);

UserRoutes.post("/", async (req, res, next) => {});

export default UserRoutes;
