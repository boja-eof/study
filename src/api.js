import { ApiHost } from "./settings";
import { query } from "gql-query-builder";

export const fetchMake = (operation, fields) => {
  const method = "POST";

  const headers = {
    "Content-Type": "application/json",
  };

  const body = JSON.stringify(
    query({
      operation,
      fields,
    }),
  );

  return fetch(ApiHost, { method, headers, body }).then((response) => response.json());
};
