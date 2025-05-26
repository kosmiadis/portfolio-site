import type { ReactNode } from "react"

type BadgeProps = { children: ReactNode }

export default function Badge ({ children }: BadgeProps) {
    return <span className="bg-foreground-secondary font-mono font-semibold text-accent p-2 rounded-xl">{children}</span>
}