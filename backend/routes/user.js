import express from "express";
import { createUser } from "../controllers/user.js";

const router = express.Router();

router.get("/create-user", createUser);

export default router;
