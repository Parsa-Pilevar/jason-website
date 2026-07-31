import { PortableText, type PortableTextBlock } from "@portabletext/react"
import type { SanityImageSource } from "@sanity/image-url"
import { FaRegEnvelope } from "react-icons/fa"
import { sanityFetch } from "@/sanity/lib/live"
import { urlFor } from "@/sanity/lib/image"
import LinkIcon from "@/components/LinkIcon"

const HOME_QUERY = `*[_id == "homePage"][0]{
  name,
  title,
  institution,
  department,
  university,
  email,
  links,
  bio,
  photo
}`

type HomeData = {
  name: string
  title?: string
  institution?: string
  department?: string
  university?: string
  email?: string
  links: { label: string; url: string }[]
  bio: PortableTextBlock[]
  photo?: { alt?: string } & Record<string, unknown>
}

export default async function Home() {
  const { data } = await sanityFetch({ query: HOME_QUERY })
  const bio = data as unknown as HomeData

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16 lg:max-w-4xl lg:px-10 xl:max-w-5xl xl:px-16">
      <div className="fade-up flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        {bio.photo && (
          <img
            src={urlFor(bio.photo as unknown as SanityImageSource).width(360).height(480).fit("crop").url()}
            alt={bio.photo.alt || bio.name}
            className="aspect-[3/4] w-40 shrink-0 rounded border-2 border-accent-gold object-cover sm:w-48"
          />
        )}
        <div>
          <h1 className="font-serif text-4xl text-ink">{bio.name}</h1>
          <p className="mt-2 text-muted">{bio.title}</p>
          {[bio.institution, bio.department, bio.university].filter(Boolean).map((line) => (
            <p key={line} className="text-muted">{line}</p>
          ))}

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            {bio.email && (
              <a href={`mailto:${bio.email}`} className="flex items-center gap-1.5 text-muted hover:text-accent">
                <FaRegEnvelope className="h-4 w-4" aria-hidden="true" />
                {bio.email}
              </a>
            )}
            {bio.links.map((link) => (
              <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-muted hover:text-accent">
                <LinkIcon label={link.label} />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="fade-up-delay">
        <div className="mt-14 flex items-center gap-2">
          <span className="h-px w-6 bg-accent" aria-hidden="true" />
          <h2 className="font-serif text-xl text-ink">About me</h2>
        </div>
        <div className="mt-4 flex max-w-[65ch] flex-col gap-4 text-ink/80 [&_p]:leading-relaxed">
          <PortableText value={bio.bio} />
        </div>
      </div>
    </div>
  )
}
