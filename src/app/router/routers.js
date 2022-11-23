import express from "express";
const router = express.Router();

import { createMoney, getMoney } from "../controller";
import { healthy } from "../../core/repositories";

router.get("/money", getMoney);
router.post("/money", createMoney);
router.get("/", healthy);

export default router;
