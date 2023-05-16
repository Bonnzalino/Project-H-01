import express from "express";

//controllers
import getActivityByUserId, {
  createActivity,
} from "../controllers/activities-controller";

const router = express.Router();

router.get("/:uid", getActivityByUserId);
router.post("/add-activity", createActivity);

export default router;
