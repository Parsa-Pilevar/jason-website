import type { Metadata } from "next"
import { sanityFetch } from "@/sanity/lib/live"

export const metadata: Metadata = {
  title: "CV | Jason Grant-Rowles",
  description: "Curriculum vitae for Jason Grant-Rowles.",
}

const CV_QUERY = `*[_id == "cvPage"][0]{note, cvFile{asset->{url}}}`

export default async function CvPage() {
  const { data } = await sanityFetch({ query: CV_QUERY })
  const page = data as unknown as {
    note: string
    cvFile: { asset: { url: string } } | null
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16 lg:max-w-4xl lg:px-10 xl:max-w-5xl xl:px-16">
      <h1 className="fade-up font-serif text-4xl text-ink">CV</h1>
      {page.cvFile?.asset?.url ? (
        <div className="fade-up-delay mt-8">
          <a href="/cv/file"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-3 inline-block text-sm text-muted hover:text-accent"
          >
            Open full CV in new tab
          </a>
          <iframe src="/cv/file"
            title="Jason Grant-Rowles CV"
            className="h-[80vh] w-full rounded border border-hairline bg-paper"
          />
        </div>
      ) : (
        <div className="fade-up-delay mt-8 rounded border border-hairline bg-accent-wash/40 px-6 py-8 text-center text-muted">
          {page.note}
        </div>
      )}
    </div>
  )
}
