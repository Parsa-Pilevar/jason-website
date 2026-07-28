import type { Metadata } from "next"
import { sanityFetch } from "@/sanity/lib/live"

export const metadata: Metadata = {
  title: "CV | Jason Grant-Rowles",
  description: "Curriculum vitae for Jason Grant-Rowles.",
}

const CV_QUERY = `*[_id == "cvPage"][0]{note}`

export default async function CvPage() {
  const { data } = await sanityFetch({ query: CV_QUERY })
  const page = data as unknown as { note: string }

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-black">CV</h1>
      <p className="mt-6 text-zinc-600">{page.note}</p>
    </div>
  )
}
