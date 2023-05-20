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






