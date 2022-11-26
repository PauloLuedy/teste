import express from "express";
const router = express.Router();

import { createMoney, getMoney, register } from "../controller";
import { healthy } from "../../core/repositories";

router.get("/money", getMoney);
router.get("/", healthy);
router.post("/money", createMoney);
router.post("/register", register);

export default router;
