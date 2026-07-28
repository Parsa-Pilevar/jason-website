import { PublicationGroup } from "@/lib/types"

export default function PublicationGroupList({ groups }: { groups: PublicationGroup[] }) {
  return (
    <div className="mt-6 flex flex-col gap-10">
      {groups.map((group) => (
        <div key={group.heading}>
          <h2 className="text-xl font-semibold tracking-tight text-black">{group.heading}</h2>
          <ul className="mt-4 flex flex-col gap-4">
            {group.publications.map((pub) => (
              <li key={pub.citation} className="text-zinc-700">
                {pub.citation}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
