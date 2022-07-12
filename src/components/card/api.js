import { sendRequest } from "../../api";

export const getCards = () =>
  sendRequest("products", ["id", "name", "slug", "description", "image", "createdAt"]);
