import express from "express";
import { getAllData, deleteCard, getUserData } from "../controllers/activities-controller.js";
import { auth } from "../controllers/authenticate-service.js";

//controllers
const ActivityRoutes = express.Router();


ActivityRoutes.delete("/delete/:id", deleteCard);

// VVVVVVVVVV Add by Bonn VVVVVVVVVV
ActivityRoutes.get("/userdata", auth,  getUserData);




export default ActivityRoutes;

