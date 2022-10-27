module.exports = {
  Query: {
    async user(_, { login }, { dataSources }) {
      const userFound = await dataSources.userRegisterService.getUser(login);

      if (userFound) return userFound[0];

      const {
        id,
        login: loginGit,
        avatar_url,
      } = await dataSources.gitHubService.getUser(login);

      return await dataSources.userRegisterService.addUser({
        id,
        login: loginGit,
        avatar_url,
      });
    },
  },
};
