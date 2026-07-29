import type { Metadata } from "next"
import { sanityFetch } from "@/sanity/lib/live"
import RoleList from "@/components/RoleList"
import type { Role } from "@/lib/types"

export const metadata: Metadata = {
  title: "Practice | Jason Grant-Rowles",
  description: "Clinical and professional roles held by Jason Grant-Rowles.",
}

const PRACTICE_QUERY = `*[_id == "practicePage"][0]{
  roles[]{title, org, url}
}`

export default async function PracticePage() {
  const { data } = await sanityFetch({ query: PRACTICE_QUERY })
  const page = data as unknown as { roles: Role[] }

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16 lg:max-w-4xl lg:px-10 xl:max-w-5xl xl:px-16">
      <h1 className="fade-up font-serif text-4xl text-ink">Practice</h1>
      <div className="fade-up-delay">
        <RoleList roles={page.roles} />
      </div>
    </div>
  )
}
