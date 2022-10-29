module.exports = {
  User: {
    async tasks({ id }, _, { dataSources }) {
      return await dataSources.tasksRegisterService.getTasks(id);
    },
  },

  Query: {
    async user(_, { login }, { dataSources }) {
      const [userFound] = await dataSources.userRegisterService.getUser(login);

      if (userFound) {
        userFound.token = dataSources.gerenatorToken.createToken(userFound.id);
        return userFound;
      }

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

      const newUser = await dataSources.userRegisterService.getUser(login);
      newUser.token = dataSources.gerenatorToken.createToken(userFound.id);

      return newUser;
    },
  },
};
