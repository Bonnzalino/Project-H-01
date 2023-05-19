import mongoose from "mongoose";

import HttpError from "../models/http-error.js";

//schema
import User from "../models/user-model.js";
import Activity from "../models/activity-model.js";

const getActivityByUserId = async (req, res, next) => {
  const userId = req.params.uid;
  let userActivities;
  try {
    userActivities = await User.findById(userId).populate("activities");
    res.status(200).json(userActivities.toJSON());
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find your activity.",
      500
    );

    return next(error);
  }
};

export const createActivity = async (req, res, next) => {
  const {} = req.body;
};

export default getActivityByUserId;
