import { animationVariants } from "@animations/variants";
import { motion } from "motion/react";
import { Children, type ReactNode } from "react"

type AnimateChildrenProps = { children: ReactNode }
export default function AnimateChidren ({ children }: AnimateChildrenProps) {
    const childrenArray = Children.toArray(children);

    return <div className="mx-auto flex flex-wrap gap-15">
        {childrenArray.map((child, index) => <motion.div className="mx-auto" key={`${20*index+1}`} initial={animationVariants.blur} whileInView={{...animationVariants.unblur, }}  transition={{duration: animationVariants.transitions.duration, delay: 0.1 * index}} >{child}</motion.div>)}
    </div>
}