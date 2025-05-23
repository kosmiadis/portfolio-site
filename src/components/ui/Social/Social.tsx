import type { ReactElement } from "react"

type SocialProps = {
    icon: ReactElement,
    href: string,
    tag?: string
}

export default function Social ({icon, href, tag}: SocialProps) {
    return <a target="_blank" href={href} className="flex flex-col items-center w-min text-nowrap">
        {icon}
        {tag && <span>{tag}</span>}
    </a>
}