import type { Metadata } from "next"
import { sanityFetch } from "@/sanity/lib/live"
import RoleList from "@/components/RoleList"
import type { Role } from "@/lib/types"

export const metadata: Metadata = {
  title: "Advisory | Jason Grant-Rowles",
  description: "Advisory board roles held by Jason Grant-Rowles.",
}

const ADVISORY_QUERY = `*[_id == "advisoryPage"][0]{
  roles[]{title, org, url}
}`

export default async function AdvisoryPage() {
  const { data } = await sanityFetch({ query: ADVISORY_QUERY })
  const page = data as unknown as { roles: Role[] }

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16">
      <h1 className="fade-up font-serif text-4xl text-ink">Advisory</h1>
      <div className="fade-up-delay">
        <RoleList roles={page.roles} />
      </div>
    </div>
  )
}
