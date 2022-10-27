const { ApolloServer } = require("apollo-server");
const { typeDefs, resolvers } = require("./src/graphQL");
const GitHubService = require("./src/services/GitHub.service");
const UserRegisterService = require("./src/services/UserRegisterService");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    gitHubService: GitHubService,
    userRegisterService: UserRegisterService,
  }),
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server is running on => ${url}`);
});
