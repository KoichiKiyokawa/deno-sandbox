import { userTypeDef } from "./features/user/model.ts"
import { userResolvers } from "./features/user/resolver.ts"
import { createSchema } from "graphql-yoga"

export const schema = createSchema({
  typeDefs: [userTypeDef],
  resolvers: [userResolvers],
})
