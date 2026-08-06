import type { Metadata } from "next"
import { sanityFetch } from "@/sanity/lib/live"
import ContactForm from "@/components/ContactForm"

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
        <ContactForm />
      </div>
    </div>
  )
}
