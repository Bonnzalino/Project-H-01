import express from "express";

//controllers
import {createActivity} from "../controllers/activities-controller.js";

const ActivityRoutes = express.Router();

// ActivityRoutes.get("/:uid", getActivityByUserId);
ActivityRoutes.post("/add-activity", createActivity);

export default ActivityRoutes;
