import express from "express";
import cors from "cors";
import router from "./app/router/routes";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    require("./core/db/connect");
  }
  routes() {
    this.app.use(router);
  }
}

export default new App().app;
