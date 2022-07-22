import express from "express";
import setupGraphQL from "./setup/graphql";
import setupLoadModules from "./setup/load-modules";
import setupStartServer from "./setup/start-server";

// Create express server
const server = express();

// Setup load modules
setupLoadModules(server);

// Setup GraphQL
setupGraphQL(server);

// Start server
setupStartServer(server);
