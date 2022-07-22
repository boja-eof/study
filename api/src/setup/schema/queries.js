import * as product from "../../modules/product/query";

import { GraphQLObjectType } from "graphql";

const query = new GraphQLObjectType({
  name: "query",
  description: "API Queries [Read]",

  fields: () => ({
    ...product,
  }),
});

export default query;
