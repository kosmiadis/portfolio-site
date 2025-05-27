import type { ReactNode } from "react"

type ParagraphSectionProps = { title: string, children : ReactNode}

export default function ParagraphSection ({ title, children }: ParagraphSectionProps) {
    return <section className="flex flex-col gap-3">
        <h3 className="font-cal-sans text-3xl text-secondary-bg text-shadow-[2px_2px_3px] text-shadow-accent">{title}</h3>
        {children}   
    </section>
}