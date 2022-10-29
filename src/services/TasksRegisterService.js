const dataBase = require("../dataBase/connection");
const NoPermissionError = require("../errors/NoPermissionError");
const TaskNotFoundError = require("../errors/TaskNotFoundError");

class TasksRegisterService {
  async getTasks(user_id) {
    return await dataBase.select("*").from("tasks").where({ user_id });
  }

  async getTaskById(user_id, id) {
    const [task] = await dataBase("tasks").where({ id });

    if (!task) throw new TaskNotFoundError("Tarefa não encontrada!");
    if (task.user_id !== user_id) {
      throw new NoPermissionError("Você não tem permissão!");
    }

    return task;
  }

  async addTask(user_id, data) {
    await dataBase("tasks").insert({ user_id, ...data });

    return "Tarefa criada com sucesso!";
  }

  async deleteTask(user_id, id) {
    await this.getTaskById(user_id, id);

    return await dataBase("tasks").delete().where({ id });
  }

  async updateTask(user_id, id, data) {
    await this.getTaskById(user_id, id);

    await dataBase("tasks").where({ id }).update(data);

    return "Tarefa atualizada com sucesso!";
  }
}
module.exports = new TasksRegisterService();
