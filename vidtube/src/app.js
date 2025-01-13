import express from "express";
import cors from "cors";
import { healthcheck } from "./controllers/healthcheck.controllers.js";
import cookieParser from "cookie-parser"
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

//common middleware
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());



// import routes
import healthcheckRouter from "./routes/healthcheck.routes.js"
import usrRoutes from "./routes/user.routes.js"


// routes
app.use("/api/v1/healthcheck",healthcheckRouter)
app.use("/api/v1/users", userRouter);

export { app };