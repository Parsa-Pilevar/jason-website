import type { Metadata } from "next"
import { cvNote } from "@/lib/content"

export const metadata: Metadata = {
  title: "CV | Jason Grant-Rowles",
  description: "Curriculum vitae for Jason Grant-Rowles.",
}

export default function CvPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-black">CV</h1>
      <p className="mt-6 text-zinc-600">{cvNote}</p>
    </div>
  )
}
