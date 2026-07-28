import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Nav from "@/components/Nav"
import { SanityLive } from "@/sanity/lib/live"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex flex-1 flex-col">{children}</main>
        <SanityLive />
      </body>
    </html>
  )
}
