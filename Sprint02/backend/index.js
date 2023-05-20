import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

//config
import { PORT, MONGODB_URI } from "./db.config.js";

//router
import UserRoutes from "./routes/users-routes.js";
import ActivityRoutes from "./routes/activities-routes.js";

const app = express();
const acceptedOrigin = {
  origin: 'http://localhost:5173',
  optionSuccessStatus: 200,
}

app.use(cors(acceptedOrigin))

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use("/user", UserRoutes);
app.use("/activity", ActivityRoutes);

const start = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
  } catch (err) {
    console.error(err);
  }
};

start();
