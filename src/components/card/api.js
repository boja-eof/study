import { fetchMake } from "../../api";

export const getCards = () =>
  fetchMake("products", ["id", "name", "slug", "description", "image", "createdAt"]);
