import { NODE_ENV, PORT } from "../config/env";

const server = function (server) {
  console.info("SETUP - Starting server..");

  server.listen(PORT, (error) => {
    if (error) {
      console.error("ERROR - Unable to start server.");
    } else {
      console.info(`INFO - Server started on http://localhost:${PORT} [${NODE_ENV}]`);
    }
  });
};

export default server;
