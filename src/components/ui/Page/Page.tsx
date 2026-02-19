import type { ReactNode } from "react"

type PageProps = { children?: ReactNode }

export default function Page ({ children }: PageProps) {
    return <main className="desktop:p-0 text-foreground-primary w-full">
        {children}
    </main>
}