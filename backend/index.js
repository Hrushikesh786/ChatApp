import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";
import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./SocketIo/server.js";


dotenv.config();
//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// ++++++++++++++++
const PORT = process.env.PORT || 3001;
const URI = process.env.MONGODB_URI;

try {
  mongoose.connect(URI);
  console.log("connected to mongodb");
} catch (error) {
  console.log("Error:", error);
}
// app.use("api/auth",authRoutes)
app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);

if (process.env.NODE_ENV === "production") {
  const dirPath = path.resolve();
  app.use(express.static("./frontend/dist"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(dirPath, "./frontend/dist", "index.html"));
  });
}

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
