import type { Metadata } from "next"
import { sanityFetch } from "@/sanity/lib/live"

export const metadata: Metadata = {
  title: "Contact | Jason Grant-Rowles",
  description: "Get in touch with Jason Grant-Rowles.",
}

const CONTACT_QUERY = `*[_id == "contactPage"][0]{intro}`

export default async function ContactPage() {
  const { data } = await sanityFetch({ query: CONTACT_QUERY })
  const page = data as unknown as { intro: string }

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16 lg:max-w-4xl lg:px-10 xl:max-w-5xl xl:px-16">
      <h1 className="fade-up font-serif text-4xl text-ink">Contact</h1>
      <div className="fade-up-delay">
        <p className="mt-4 max-w-[65ch] text-ink/80 leading-relaxed">{page.intro}</p>
        <form action="https://formspree.io/f/mjgndnka" method="POST" className="mt-10 flex max-w-md flex-col gap-6">
          <input type="hidden" name="_gotcha" />
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-xs uppercase tracking-[0.08em] text-muted">Name</label>
            <input id="name" name="name" type="text" className="border-b border-hairline bg-transparent py-2 text-ink focus:border-accent focus:outline-none" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-xs uppercase tracking-[0.08em] text-muted">Email</label>
            <input id="email" name="email" type="email" className="border-b border-hairline bg-transparent py-2 text-ink focus:border-accent focus:outline-none" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-xs uppercase tracking-[0.08em] text-muted">Message</label>
            <textarea id="message" name="message" rows={5} className="border-b border-hairline bg-transparent py-2 text-ink focus:border-accent focus:outline-none" />
          </div>
          <button type="submit" className="mt-2 w-fit border-b border-accent pb-1 text-sm font-medium text-accent hover:text-ink hover:border-ink">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}
