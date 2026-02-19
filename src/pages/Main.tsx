import Tiles from "@components/main/Tiles";
import Page from "@components/ui/Page/Page";
import { motion } from 'motion/react';
import { animationVariants } from "@animations/variants";

export default function Main () {
    
    const heroText = 'I am a 19 years old self-taught Full-Stack Web Developer and Undergraduate Computer Science student at Aristotle University of Thessaloniki from Greece'
    const words = heroText.split(' ');

    return <Page>
        <div className="h-full">
            <div className="flex flex-col gap-2 mb-4">
                <motion.h1 className="page-hero-text text-5xl" initial={animationVariants.fadeOut} animate={animationVariants.fadeIn} transition={animationVariants.transitions}>Hello There!</motion.h1>
                <div>
                    {words.map((word, index) => <motion.h2 key={word} initial={animationVariants.blur} animate={animationVariants.unblur} transition={{duration: animationVariants.transitions.duration, delay: 0.08 * index}} className="inline text-3xl">{word} </motion.h2>)}
                </div>
            </div>
            <Tiles />
        </div>
    </Page>
}