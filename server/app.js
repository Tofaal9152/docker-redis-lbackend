import axios from "axios";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
// import { Redis } from "ioredis";
import todoRouter from "./routes/todo.route.js";
import userRouter from "./routes/user.route.js";
import { ResponseUtils } from "./utils/response.utils.js";

export const app = express();
// const redisClient = new Redis();
dotenv.config();

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// cors
app.use(
  cors({
    origin: process.env.FRONTEND_URI,
    credentials: true,
  })
);
// redis
app.get("/post", async (req, res) => {
  try {
    const cachedData = await redisClient.get("posts");

    if (cachedData !== null) {
      console.log("cached data");
      return ResponseUtils(res, 200, true, "success", JSON.parse(cachedData));
    } else {
      const fetching = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      redisClient.set("posts", JSON.stringify(fetching.data));
      console.log("fetching data");
      return ResponseUtils(res, 200, true, "success", fetching.data);
    }
  } catch (error) {
    return ResponseUtils(res, 500, false, "error", error);
  }
});
// Routers
app.use("/api/v1/user", userRouter);
app.use("/api/v1/todo", todoRouter);
