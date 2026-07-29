import type { Metadata } from "next"
import { Newsreader, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google"
import Nav from "@/components/Nav"
import { SanityLive } from "@/sanity/lib/live"
import "./globals.css"

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
})

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
})

export const metadata: Metadata = {
  title: "Jason Grant-Rowles",
  description:
    "Doctoral Researcher, NIHR Biomedical Research Centre: Maudsley, King's College London.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <Nav />
        <main className="flex flex-1 flex-col">{children}</main>
        <SanityLive />
      </body>
    </html>
  )
}
