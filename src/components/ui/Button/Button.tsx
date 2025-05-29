import type { HTMLAttributes, ReactNode } from "react"

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

export default function Button ({ children, ...props }:  ButtonProps) {
    return <button {...props} 
        className="theme-button bg-accent">{children}</button>
}