import { ApiHost } from "./settings";
import { query } from "gql-query-builder";

export const sendRequest = (operation, fields, method = "POST") => {
  const headers = {
    "Content-Type": "application/json",
  };

  const body = JSON.stringify(
    query({
      operation,
      fields,
    }),
  );

  return fetch(ApiHost, { method, headers, body })
    .then((response) => response.json())
    .then((json) => {
      if (json["errors"]) {
        throw new Error(json["errors"][0]["message"]);
      }
      return json;
    })
    .then((json) => json["data"][operation])
    .catch((error) => {
      throw String(error.message);
    });
};
