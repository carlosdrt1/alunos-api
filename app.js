import dotenv from "dotenv";
import express from "express";

import homeRoutes from "./src/routes/homeRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
import tokenRoutes from "./src/routes/tokenRoutes.js";
import alunoRoutes from "./src/routes/alunoRoutes.js";
import fotoRoutes from "./src/routes/fotoRoutes.js";

import "./src/database/connection.js";
dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/", homeRoutes);
    this.app.use("/users/", userRoutes);
    this.app.use("/tokens/", tokenRoutes);
    this.app.use("/alunos/", alunoRoutes);
    this.app.use("/fotos/", fotoRoutes);
  }
}

export default new App().app;
