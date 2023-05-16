import mongoose from "mongoose";

const { Schema } = mongoose;

const ActivitySchema = new Schema({
  activityTitle: { type: String, required: true },
  activityType: { type: String, required: true },
  startTime: { type: Date, required: true },
  finishTime: { type: Date, required: true },
  activityDetail: { type: String },
  activityStatus: { type: String, required: true },
  creator: [{ type: mongoose.Types.ObjectId, required: true, ref: "User" }],
});

const Activity = mongoose.model("Activity", ActivitySchema, "activities");

export default Activity;
