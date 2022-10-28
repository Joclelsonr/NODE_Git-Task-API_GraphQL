module.exports = {
  User: {
    async tasks({ id }, _, { dataSources }) {
      return await dataSources.tasksRegisterService.getTasks(id);
    },
  },

  Query: {
    async user(_, { login }, { dataSources }) {
      const [userFound] = await dataSources.userRegisterService.getUser(login);

      if (userFound) return userFound;

      const {
        id,
        login: loginGit,
        avatar_url,
      } = await dataSources.gitHubService.getUser(login);

      await dataSources.userRegisterService.addUser({
        id,
        login: loginGit,
        avatar_url,
      });

      const [user] = await dataSources.userRegisterService.getUser(login);

      return user;
    },
  },
};
