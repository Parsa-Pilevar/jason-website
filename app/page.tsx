import { PortableText, type PortableTextBlock } from "@portabletext/react"
import { sanityFetch } from "@/sanity/lib/live"

const HOME_QUERY = `*[_id == "homePage"][0]{bio}`

type HomeData = {
  bio: PortableTextBlock[]
}

export default async function Home() {
  const { data } = await sanityFetch({ query: HOME_QUERY })
  const home = data as unknown as HomeData

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16 lg:max-w-4xl lg:px-10 xl:max-w-5xl xl:px-16">
      <h1 className="fade-up font-serif text-4xl text-ink">About Me</h1>
      <div className="fade-up-delay mt-6 flex max-w-[65ch] flex-col gap-4 text-ink/80 [&_p]:leading-relaxed">
        <PortableText value={home.bio} />
      </div>
    </div>
  )
}
