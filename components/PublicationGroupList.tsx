import { PublicationGroup } from "@/lib/types"

export default function PublicationGroupList({ groups }: { groups: PublicationGroup[] }) {
  return (
    <div className="mt-6 flex flex-col gap-10">
      {groups.map((group) => (
        <div key={group.heading}>
          <h2 className="text-xs font-medium uppercase tracking-[0.08em] text-accent">{group.heading}</h2>
          <ul className="mt-4 flex flex-col divide-y divide-hairline">
            {group.publications.map((pub) => (
              <li
                key={pub.citation}
                className="-mx-2 rounded px-2 py-4 leading-relaxed text-ink/80 transition-colors duration-200 first:pt-0 hover:bg-accent-wash"
              >
                {pub.citation}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
