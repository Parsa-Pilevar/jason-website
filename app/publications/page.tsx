import type { Metadata } from "next"
import { publicationGroups } from "@/lib/content"
import PublicationGroupList from "@/components/PublicationGroupList"

export const metadata: Metadata = {
  title: "Publications | Jason Grant-Rowles",
  description: "Academic publications by Jason Grant-Rowles, grouped by collaboration.",
}

export default function PublicationsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-black">Publications</h1>
      <PublicationGroupList groups={publicationGroups} />
    </div>
  )
}
