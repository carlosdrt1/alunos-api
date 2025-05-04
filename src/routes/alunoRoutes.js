import loginRequired from "../middlewares/loginRequired.js";
import alunoController from "../controllers/AlunoController.js";
import express from "express";
const router = express.Router();

router.get("/", alunoController.index);
router.post("/", loginRequired, alunoController.create);
router.get("/{:id}", alunoController.show);
router.put("/{:id}", loginRequired, alunoController.update);
router.delete("/{:id}", loginRequired, alunoController.delete);

export default router;
