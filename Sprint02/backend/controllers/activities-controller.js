// import mongoose from "mongoose";
// import HttpError from "../models/http-error";

// //schema
// import User from "../models/user-model";
import Activity from "../models/activity-model.js";

export const createActivity = async (req, res) => {
    const data = req.body;
    try { 
        const newActivity = await Activity.create({
        activityName: data.activityName,
        activityType: data.activityType,
        startTime: data.startTime,
        finishTime: data.finishTime,
        activityDetail: data.activityDetail,
        activityImage: data.activityImage,
        distance: data.distance,
      })
      if (!createActivity) {
        return res.status(400).json({ message: "Cannot add new activity!" });
      }
        const newData = await newActivity.save();
        return newData, res.status(200).json({ message: "New activity added successfully!" });
    } catch (err) {
      console.error(err);
      return res.status(400).send(err);
    }
  };
// const getActivityByUserId = async (req, res, next) => {
//   const userId = req.params.uid;
//   let userActivities;
//   try {
//     userActivities = await User.findById(userId).populate("activities");
//     res.status(200).json(userActivities.toJSON());
//   } catch (err) {
//     const error = new HttpError(
//       "Something went wrong, could not find your activity.",
//       500
//     );

//     return next(error);
//   }
// };

// export default getActivityByUserId;
