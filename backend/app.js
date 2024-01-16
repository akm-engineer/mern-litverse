import express from "express";

import dotenv from "dotenv";
import userRouter from "./routes/user.js";

dotenv.config();
import "./db/index.js";

const app = express();
app.use(express.json());

app.use("/api/user", userRouter);

app.listen(8000, () => {
  console.log(`The port is running on 8000`);
});
