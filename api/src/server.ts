import "reflect-metadata";

import express from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";

const resolve = (pathName: string) => path.resolve(__dirname, pathName);

dotenv.config({
  path: resolve(`../environments/.env.${process.env.NODE_ENV}`),
});

import { AppDataSource } from "./infra/database/data-source";
import routers from "./presentation/routes/routes";

const app = express();

app.use(cors()).use(express.json());

app.use(routers);

AppDataSource.initialize()
  .then(() => {
    app.listen(process.env.APP_PORT, () =>
      console.log("Server started: http://localhost:3000")
    );
  })
  .catch((error) => console.log(error));
