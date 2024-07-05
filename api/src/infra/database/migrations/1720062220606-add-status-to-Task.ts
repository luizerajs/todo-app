import { TaskStatus } from "@/domain/task/task.entity";
import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddStatusToTask1720062220606 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "tasks",
      new TableColumn({
        name: "status",
        type: "enum",
        enum: [TaskStatus.TODO, TaskStatus.DONE, TaskStatus.DELETED],
        default: `'${TaskStatus.TODO}'`,
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("tasks", "status");
  }
}
