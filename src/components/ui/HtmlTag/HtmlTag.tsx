import type { ReactNode } from "react";

type HtmlTagProps = { tag: 'p' | 'h1' | 'h2' | 'h3', children: ReactNode };

export default function HtmlTag ({tag, children}: HtmlTagProps) {
    return <span className="">{'<'}<span className="text-secondary-bg">{tag}</span>{'> '}{children}{' <'}<span className="text-secondary-bg">{tag}</span>{'/>'}</span>
}