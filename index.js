const { ApolloServer } = require("apollo-server");
const { typeDefs, resolvers } = require("./src/graphQL");
const GitHubService = require("./src/services/GitHub.service");
const TasksRegisterService = require("./src/services/TasksRegisterService");
const UserRegisterService = require("./src/services/UserRegisterService");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    gitHubService: GitHubService,
    userRegisterService: UserRegisterService,
    tasksRegisterService: TasksRegisterService,
  }),
  context: ({ req }) => {
    const user_id = req.headers.authorization;
    return { user_id };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server is running on => ${url}`);
});
