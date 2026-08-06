import type { Metadata } from "next"
import { sanityFetch } from "@/sanity/lib/live"
import RoleList from "@/components/RoleList"
import type { Role } from "@/lib/types"

export const metadata: Metadata = {
  title: "Advisory & Practice | Jason Grant-Rowles",
  description: "Clinical, professional, and advisory roles held by Jason Grant-Rowles.",
}

const ADVISORY_PRACTICE_QUERY = `{
  "practice": *[_id == "practicePage"][0]{roles[]{title, org, url}},
  "advisory": *[_id == "advisoryPage"][0]{roles[]{title, org, url}}
}`

export default async function AdvisoryPracticePage() {
  const { data } = await sanityFetch({ query: ADVISORY_PRACTICE_QUERY })
  const page = data as unknown as { practice: { roles: Role[] }; advisory: { roles: Role[] } }

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16 lg:max-w-4xl lg:px-10 xl:max-w-5xl xl:px-16">
      <h1 className="fade-up font-serif text-4xl text-ink">Advisory & Practice</h1>
      <div className="fade-up-delay mt-6 flex flex-col gap-10">
        <div>
          <h2 className="text-xs font-medium uppercase tracking-[0.08em] text-accent">Practice</h2>
          <RoleList roles={page.practice.roles} />
        </div>
        <div className="h-px w-12 bg-accent-gold" aria-hidden="true" />
        <div>
          <h2 className="text-xs font-medium uppercase tracking-[0.08em] text-accent">Advisory</h2>
          <RoleList roles={page.advisory.roles} />
        </div>
      </div>
    </div>
  )
}
