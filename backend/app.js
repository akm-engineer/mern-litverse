import express from "express";
import userRouter from "./routes/user.js";

const app = express();

app.use("/api", userRouter);

app.listen(8000, () => {
  console.log(`The port is running on 8000`);
});
