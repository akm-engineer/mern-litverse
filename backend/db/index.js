import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://ashishgk1999:WJEsdOX03GQAIZD7@prac.oxwj4eb.mongodb.net/"
  )
  .then(() => console.log("DB is connected"))

  .catch((err) => console.log(err));
