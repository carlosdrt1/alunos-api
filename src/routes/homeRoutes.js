import { Router } from "express";
const router = new Router();
import homeController from "../controllers/HomeController.js";

router.get("/",(req, res) => homeController.index(req, res));

export default router;
