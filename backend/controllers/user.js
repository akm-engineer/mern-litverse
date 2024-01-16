import User from "../models/user.js";

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  const oldeUser = await User.findOne({ email });

  if (oldeUser) return res.status(401).json({ error: "Email already exists" });
  const newUser = new User({ name, email, password });

  await newUser.save();

  res.status(201).json({ user: newUser });
};

//WJEsdOX03GQAIZD7
