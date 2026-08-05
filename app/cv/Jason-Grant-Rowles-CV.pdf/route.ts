import { client } from "@/sanity/lib/client"

export const revalidate = 3600

export async function GET() {
  const data = await client.fetch<{ asset: { url: string; mimeType?: string } } | null>(
    `*[_id == "cvPage"][0].cvFile{asset->{url, mimeType}}`
  )

  if (!data?.asset?.url) {
    return new Response("Not found", { status: 404 })
  }

  const upstream = await fetch(data.asset.url, { next: { revalidate: 3600 } })

  if (!upstream.ok || !upstream.body) {
    return new Response("Upstream fetch failed", { status: 502 })
  }

  return new Response(upstream.body, {
    headers: {
      "Content-Type": data.asset.mimeType || "application/pdf",
      "Content-Disposition": 'inline; filename="Jason-Grant-Rowles-CV.pdf"',
    },
  })
}
