import * as dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 8080;

const MONGODB_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@${process.env.DB_DOMAIN}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

export { PORT, MONGODB_URI };