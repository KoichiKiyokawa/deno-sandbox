import { createYoga } from "graphql-yoga"
import { serve } from "https://deno.land/std@0.157.0/http/server.ts"
import { schema } from "./schema.ts"
// avoid error of `Cannot find module 'graphql'`
import {} from "graphql"
import { context } from "./context.ts"

const yoga = createYoga({ schema, context })

serve(yoga, {
  onListen({ hostname, port }) {
    console.log(`Listening on http://${hostname}:${port}/graphql`)
  },
})
