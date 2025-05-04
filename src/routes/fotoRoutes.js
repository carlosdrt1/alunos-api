import multer from "multer";
import express from "express";
import fotoController from "../controllers/FotoController.js";
import multerConfig from "../config/multer.js";

const router = express.Router();
const upload = multer(multerConfig);

router.post("/", fotoController.index);

export default router;
