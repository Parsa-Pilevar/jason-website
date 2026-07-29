export type WebLink = {
  label: string
  url: string
}

export type Role = {
  title: string
  org: string
  url?: string
}

export type Publication = {
  citation: string
}

export type PublicationGroup = {
  heading: string
  publications: Publication[]
}
