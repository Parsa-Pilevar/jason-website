import { Role } from "@/lib/types"

export default function RoleList({ roles }: { roles: Role[] }) {
  return (
    <ul className="mt-6 divide-y divide-hairline">
      {roles.map((role) => (
        <li key={role.title + role.org} className="py-4 first:pt-0">
          <p className="font-medium text-ink">{role.title}</p>
          {role.url ? (
            <a href={role.url} target="_blank" rel="noopener noreferrer" className="text-muted transition-colors duration-200 hover:text-accent">
              {role.org}
            </a>
          ) : (
            <p className="text-muted">{role.org}</p>
          )}
        </li>
      ))}
    </ul>
  )
}
