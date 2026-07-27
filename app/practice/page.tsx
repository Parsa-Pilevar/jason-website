import type { Metadata } from "next"
import { practiceRoles } from "@/lib/content"
import RoleList from "@/components/RoleList"

export const metadata: Metadata = {
  title: "Practice | Jason Grant-Rowles",
  description: "Clinical and professional roles held by Jason Grant-Rowles.",
}

export default function PracticePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-black">Practice</h1>
      <RoleList roles={practiceRoles} />
    </div>
  )
}
