import express from "express";
import TokenController from "../controllers/TokenController.js";
const router = express.Router();

router.post("/", TokenController.store);

export default router;
