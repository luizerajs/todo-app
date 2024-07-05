import { Router } from "express";
import taskRoutes from "./task/task.routes";

const routers = Router();

routers.use("/tasks", taskRoutes);

export default routers;
