import express from "express";
const router = express.Router();
import homeController from "../controllers/HomeController.js";

router.get("/",(req, res) => homeController.index(req, res));

export default router;
