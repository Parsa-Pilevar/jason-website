import type { Metadata } from "next"
import { contactIntro } from "@/lib/content"

export const metadata: Metadata = {
  title: "Contact | Jason Grant-Rowles",
  description: "Get in touch with Jason Grant-Rowles.",
}

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-black">Contact</h1>
      <p className="mt-4 text-zinc-700">{contactIntro}</p>

      <div className="mt-8 flex max-w-md flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-medium text-black">
            Name
          </label>
          <input id="name" name="name" type="text" className="rounded-md border border-zinc-300 px-3 py-2 text-sm" />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium text-black">
            Email
          </label>
          <input id="email" name="email" type="email" className="rounded-md border border-zinc-300 px-3 py-2 text-sm" />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="text-sm font-medium text-black">
            Message
          </label>
          <textarea id="message" name="message" rows={5} className="rounded-md border border-zinc-300 px-3 py-2 text-sm" />
        </div>

        <button type="button" className="mt-2 w-fit rounded-full bg-black px-5 py-2 text-sm font-medium text-white hover:bg-zinc-800">
          Send
        </button>
      </div>
    </div>
  )
}
