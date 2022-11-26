import express from "express";
const router = express.Router();

import { createMoney, getMoney, register, login } from "../controller";
import { healthy } from "../../core/repositories";
import { createAccountSchema } from "../../app/middleware/register";

router.get("/", healthy);
router.get("/money", getMoney);
router.post("/money", createMoney);
// middleware createAccountSchema
router.post("/register", createAccountSchema, register);
router.post("/login/:id", login);

export default router;
