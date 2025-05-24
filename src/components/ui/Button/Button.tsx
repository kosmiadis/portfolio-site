import type { HTMLAttributes, ReactNode } from "react"

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

export default function Button ({ children, ...props }:  ButtonProps) {
    return <button {...props} 
        className="w-min text-nowrap z-10 px-4 py-1 text-lg text-shadow-[0px_0px_17px] hover:cursor-pointer rounded-lg border-1 shadow-md bg-accent/80 hover:brightness-120 duration-100 before:w-0 hover:before:w-[50px] before:z-0 before:left-0 before:top-0 before:rounded-lg hover:px-3 before:duration-100">{children}</button>
}