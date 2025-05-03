import express from "express";
const router = express.Router();
import alunoController from "../controllers/AlunoController.js";

router.get("/", alunoController.index);
router.post("/", alunoController.create);

export default router;
