import express from "express";
import { getAllData, deleteCard } from "../controllers/activities-controller.js";


//controllers
// import getActivityByUserId, {
//   createActivity,
// } from "../controllers/activities-controller.js";

const ActivityRoutes = express.Router();

ActivityRoutes.get("/alldata", getAllData);
ActivityRoutes.delete("/delete/:id", deleteCard);

// ActivityRoutes.get("/:uid", getActivityByUserId);
// ActivityRoutes.post("/add-activity", createActivity);

export default ActivityRoutes;

