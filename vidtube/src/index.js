import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";
// import { error } from "winston";

dotenv.config({
  path: "src/.env", //   ./.env
});
// console.log("Environment Variablessss:", process.env);
const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongodb connection error", err);
  });
