import { createSchema, createYoga } from "graphql-yoga"
import { serve } from "https://deno.land/std@0.157.0/http/server.ts"

const yoga = createYoga({
  schema: createSchema({
    typeDefs: /* GraphQL */ `
      type Query {
        hello: String!
      }
    `,
    resolvers: {
      Query: {
        hello: () => "Hello Deno!",
      },
    },
  }),
})

serve(yoga, {
  onListen({ hostname, port }) {
    console.log(`Listening on http://${hostname}:${port}/graphql`)
  },
})