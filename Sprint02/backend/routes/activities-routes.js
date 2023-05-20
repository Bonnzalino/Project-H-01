import express from "express";
import { getAllData, deleteCard } from "../controllers/activities-controller.js";

//controllers
const ActivityRoutes = express.Router();

ActivityRoutes.get("/alldata", getAllData);
ActivityRoutes.delete("/delete/:id", deleteCard);

export default ActivityRoutes;

