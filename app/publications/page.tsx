import type { Metadata } from "next"
import { sanityFetch } from "@/sanity/lib/live"
import PublicationGroupList from "@/components/PublicationGroupList"
import type { PublicationGroup } from "@/lib/types"

export const metadata: Metadata = {
  title: "Publications | Jason Grant-Rowles",
  description: "Academic publications by Jason Grant-Rowles, grouped by collaboration.",
}

const PUBLICATIONS_QUERY = `*[_id == "publicationsPage"][0]{
  groups[]{
    heading,
    "publications": publications[]{citation}
  }
}`

export default async function PublicationsPage() {
  const { data } = await sanityFetch({ query: PUBLICATIONS_QUERY })
  const page = data as unknown as { groups: PublicationGroup[] }

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-black">Publications</h1>
      <PublicationGroupList groups={page.groups} />
    </div>
  )
}
