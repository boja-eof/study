import { GraphQLList } from "graphql";
import { ProductType } from "./types";
import { getAll } from "./resolvers";

export const products = {
  type: new GraphQLList(ProductType),
  resolve: getAll,
};
