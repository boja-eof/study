import graphqlHTTP from "express-graphql";
import schema from "./schema";
import serverConfig from "../config/server.json";

const graphql = function (server) {
  console.info("SETUP - GraphQL...");

  server.use(
    serverConfig.graphql.endpoint,
    graphqlHTTP((request) => ({
      schema,
      graphiql: serverConfig.graphql.ide,
      pretty: serverConfig.graphql.pretty,
    })),
  );
};

export default graphql;
