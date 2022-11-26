import express from "express";
const router = express.Router();

import { createMoney, getMoney, register, login } from "../controller";
import { healthy } from "../../core/repositories";
import { validateRegister, Auth } from "../middleware";

//Middleware validateRegister, Auth
//Private router
router.get("/money", Auth, getMoney);
router.post("/money", Auth, createMoney);
// Public router
router.get("/", healthy);
router.post("/login", login);
router.post("/register", validateRegister, register);
router.post("/logout", (_, res) => res.json({ auth: false, token: null }));

export default router;
