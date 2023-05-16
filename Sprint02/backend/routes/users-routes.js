import express from "express";

//schema
import User from "../models/user-model.js";

//controller
import getAllUsers from "../controllers/users-controller.js";

const router = express.Router();

router.get("/", () => getAllUsers);

router.post("/", async (req, res, next) => {});

export default router;
