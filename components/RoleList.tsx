import { Role } from "@/lib/content"

export default function RoleList({ roles }: { roles: Role[] }) {
  return (
    <ul className="mt-6 flex flex-col gap-4">
      {roles.map((role) => (
        <li key={role.title + role.org}>
          <p className="font-medium text-black">{role.title}</p>
          {role.url ? (
            <a href={role.url} target="_blank" rel="noopener noreferrer" className="text-zinc-600 underline underline-offset-2 hover:text-black">
              {role.org}
            </a>
          ) : (
            <p className="text-zinc-600">{role.org}</p>
          )}
        </li>
      ))}
    </ul>
  )
}
