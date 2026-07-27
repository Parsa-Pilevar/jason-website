import type { Metadata } from "next"
import { advisoryRoles } from "@/lib/content"
import RoleList from "@/components/RoleList"

export const metadata: Metadata = {
  title: "Advisory | Jason Grant-Rowles",
  description: "Advisory board roles held by Jason Grant-Rowles.",
}

export default function AdvisoryPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-black">Advisory</h1>
      <RoleList roles={advisoryRoles} />
    </div>
  )
}
