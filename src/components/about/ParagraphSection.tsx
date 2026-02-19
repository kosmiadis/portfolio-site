import type { ReactNode } from "react"

type ParagraphSectionProps = { title: string, children : ReactNode}

export default function ParagraphSection ({ title, children }: ParagraphSectionProps) {
    return <section className="mr-auto flex flex-col min-w-full gap-3">
        <h3 className="page-hero-text text-2xl border-b-1 w-min text-nowrap border-b-accent">{title}</h3>
        {children}    
    </section>
}