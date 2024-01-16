import express from "express";

import { createUser } from "../controllers/user.js";
import { userValidator, validate } from "../middlewares/validator.js";

const router = express.Router();

router.post("/create", userValidator, validate, createUser);

export default router;
