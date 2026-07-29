import { PortableText, type PortableTextBlock } from "@portabletext/react"
import { sanityFetch } from "@/sanity/lib/live"

const HOME_QUERY = `*[_id == "homePage"][0]{
  name,
  title,
  institution,
  department,
  email,
  links,
  bio
}`

type HomeData = {
  name: string
  title?: string
  institution?: string
  department?: string
  email?: string
  links: { label: string; url: string }[]
  bio: PortableTextBlock[]
}

export default async function Home() {
  const { data } = await sanityFetch({ query: HOME_QUERY })
  const bio = data as unknown as HomeData

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16">
      <div className="fade-up">
        <h1 className="font-serif text-4xl text-ink">{bio.name}</h1>
        <p className="mt-2 text-muted">{bio.title}</p>
        <p className="text-muted">
          {[bio.institution, bio.department].filter(Boolean).join(" · ")}
        </p>

        <div className="mt-6 flex flex-wrap divide-x divide-hairline text-sm">
          {bio.email && (
            <a href={`mailto:${bio.email}`} className="pr-4 text-muted hover:text-accent">
              {bio.email}
            </a>
          )}
          {bio.links.map((link) => (
            <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="px-4 first:pl-0 text-muted hover:text-accent">
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-14 flex items-center gap-2">
        <span className="h-px w-6 bg-accent" aria-hidden="true" />
        <h2 className="font-serif text-xl text-ink">Who I am</h2>
      </div>
      <div className="mt-4 flex max-w-[65ch] flex-col gap-4 text-ink/80 [&_p]:leading-relaxed">
        <PortableText value={bio.bio} />
      </div>
    </div>
  )
}
