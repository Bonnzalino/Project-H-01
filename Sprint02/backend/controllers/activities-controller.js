import mongoose from "mongoose"
import Activity from "../models/activity-model.js"

export const getAllData = async (req, res, next) => {
   const gotData = await Activity.find({}).exec()
   return res.status(200).json(gotData)
}

export const deleteCard = async (req, res, next) => {
   Activity.findByIdAndDelete({ _id: req.params.id })
     .then((doc) => console.log(doc))
     .catch((err) => console.error(err));
 };












/* import mongoose from "mongoose";

import HttpError from "../models/http-error";

//schema
import User from "../models/user-model";
import Activity from "../models/activity-model";

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
 */

