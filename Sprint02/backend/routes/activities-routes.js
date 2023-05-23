import express from "express";
import { getAllData, deleteCard } from "../controllers/activities-controller.js";
import { getActivity, updateActivity } from "../controllers/edit-activity-controller.js";
import {auth} from "../controllers/authenticate-service.js";


//controllers
const ActivityRoutes = express.Router();

ActivityRoutes.get("/alldata", getAllData);
ActivityRoutes.delete("/delete/:id", deleteCard);

ActivityRoutes.get('/getactivity/:id',auth, getActivity);
ActivityRoutes.put('/updateactivity/:id',auth, updateActivity);

export default ActivityRoutes;
