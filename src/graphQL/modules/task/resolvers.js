module.exports = {
  Query: {
    async tasks(_, __, { dataSources, validate }) {
      const user_id = validate();
      return await dataSources.tasksRegisterService.getTasks(user_id);
    },

    async task(_, { id }, { dataSources, validate }) {
      const user_id = validate();
      return await dataSources.tasksRegisterService.getTaskById(user_id, id);
    },
  },

  Mutation: {
    async createTask(_, { data }, { dataSources, validate }) {
      const user_id = validate();
      return await dataSources.tasksRegisterService.addTask(user_id, data);
    },

    async deleteTask(_, { id }, { dataSources, validate }) {
      const user_id = validate();
      return await dataSources.tasksRegisterService.deleteTask(user_id, id);
    },

    async updateTask(_, { id, data }, { dataSources, validate }) {
      const user_id = validate();
      return await dataSources.tasksRegisterService.updateTask(
        user_id,
        id,
        data
      );
    },
  },
};
