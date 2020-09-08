require("dotenv").config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import routes from "./routes";

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middlewares();
    this.mongoSetup();
    this.routes();
  }

  private middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private mongoSetup(): void {
    mongoose
      .connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("MONGOOSE: Connected successfully!");
      })
      .catch((err) => {
        console.log("Failed connection!" + err);
      });
  }

  private routes(): void {
    this.express.use(routes);
  }
}

export default new App().express;
