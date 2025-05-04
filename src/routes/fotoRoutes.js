import express from "express";
import fotoController from "../controllers/FotoController.js";
import loginRequired from "../middlewares/loginRequired.js";

const router = express.Router();

router.post("/", loginRequired, fotoController.index);

export default router;
