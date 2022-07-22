import { Config } from "node-json-db/dist/lib/JsonDBConfig";
import { DB_PATH } from "../config/env";
import { JsonDB } from "node-json-db";

const db = new JsonDB(new Config(DB_PATH, true, true, "/"));

export default db;
