import { Task } from "@/domain/task/task.entity";
import { AddStatusToTask1720062220606 } from "@/infra/database/migrations/1720062220606-add-status-to-Task";
import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  synchronize: false,
  logging: false,
  entities: [Task],
  migrations: [AddStatusToTask1720062220606],
  subscribers: [],
});
