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
    <div className="mx-auto w-full max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-black">
        {bio.name}
      </h1>
      <p className="mt-1 text-lg text-zinc-600">{bio.title}</p>
      <p className="text-zinc-600">{bio.institution}</p>
      <p className="text-zinc-600">{bio.department}</p>

      <a href={`mailto:${bio.email}`} className="mt-2 inline-block text-sm text-zinc-500 hover:text-black">
        {bio.email}
      </a>

      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm">
        {bio.links.map((link) => (
          <li key={link.url}>
            <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-zinc-500 underline underline-offset-2 hover:text-black">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <h2 className="mt-10 text-xl font-semibold tracking-tight text-black">
        Who am I
      </h2>
      <div className="mt-3 flex flex-col gap-4 text-zinc-700 [&_p]:leading-relaxed">
        <PortableText value={bio.bio} />
      </div>
    </div>
  )
}
