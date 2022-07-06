/** @jsx h */
import { h } from "preact"
import { tw } from "@twind"
import Counter from "../islands/Counter.tsx"
import { Handlers, PageProps } from "$fresh/server.ts"
import { User, fetchUserById } from "../services/user.ts"

export const handler: Handlers<User> = {
  async GET(_req, ctx) {
    return ctx.render(await fetchUserById(Number(ctx.params.id)))
  },
}

export default function Home({ data }: PageProps<User>) {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class={tw`my-6`}>
        Welcome to `fresh`. Try update this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
