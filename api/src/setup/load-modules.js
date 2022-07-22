import { NODE_ENV } from "../config/env";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import morgan from "morgan";
import path from "path";

// Load express modules
const load = function (server) {
  console.info("SETUP - Loading modules...");

  // Enable CORS
  server.use(cors());

  // Request body parser
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));

  // Request body cookie parser
  server.use(cookieParser());

  // Static files folder
  server.use(express.static(path.join(__dirname, "..", "..", "public")));

  // HTTP logger
  if (NODE_ENV === "development") {
    server.use(morgan("tiny"));
  }
};

export default load;
