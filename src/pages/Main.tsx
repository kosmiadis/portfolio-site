import Tiles from "@components/main/Tiles";
import Page from "@components/ui/Page/Page";
import { motion } from 'motion/react';
import { animationVariants } from "@animations/variants";

export default function Main () {
    
    const heroText = 'I am an 18 years old self-taught Front-End Web Developer from Greece'
    const words = heroText.split(' ');

    return <Page>
        <div>
            <div className="flex flex-col mb-4">
                <motion.h1 className="text-5xl font-semibold text-shadow text-shadow-accent/40" initial={animationVariants.fadeOut} animate={animationVariants.fadeIn} transition={animationVariants.transitions}>Hello There!</motion.h1>
                <div>
                    {words.map((word, index) => <motion.h1 initial={animationVariants.blur} animate={animationVariants.unblur} transition={{duration: animationVariants.transitions.duration, delay: 0.08 * index}} className="inline text-3xl">{word} </motion.h1>)}
                </div>
            </div>
            <Tiles />
        </div>
    </Page>
}