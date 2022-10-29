const { ApolloServer } = require("apollo-server");
const { typeDefs, resolvers } = require("./src/graphQL");
const config = require("./src/config");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  ...config,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server is running on => ${url}`);
});
