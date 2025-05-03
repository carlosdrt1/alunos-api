import express from "express";
import userController from "../controllers/UserController.js";
import loginRequired from "../middlewares/loginRequired.js";

const router = express.Router();

// router.get("/", loginRequired, userController.index);
// router.get("/", userController.show);
router.post("/", userController.create);
router.put("/", loginRequired, userController.update);
router.delete("/", loginRequired, userController.delete);

export default router;
