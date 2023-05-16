//schema
import Activity from "../models/activity-model.js";

export const createNewActivity = async (data) => {
  const newActivity = await Activity.create({
    activityTitle: "Jean-Luc Picard",
  });
  return newActivity;
};
