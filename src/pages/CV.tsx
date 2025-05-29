import { animationVariants } from "@animations/variants";
import Button from "@components/ui/Button/Button"
import Page from "@components/ui/Page/Page"
import { motion } from 'motion/react';

export default function CV () {

    return <Page>
        <div className="flex-col gap-4 text-center flex-center">
            
            <motion.h1 initial={animationVariants.fadeOut}
                animate={animationVariants.fadeIn}
                transition={animationVariants.transitions}
                className="text-6xl font-cal-sans"
            >Feel free to view or download my CV</motion.h1>
            
            <motion.div initial={animationVariants.fadeOut}
                animate={animationVariants.fadeIn}
                transition={{ duration: animationVariants.transitions.duration, delay: 0.2}}
            className="flex gap-2">
                <a href="VAGELIS_KOSMIADIS_CV.pdf"><Button>View CV</Button></a>
                <a href="VAGELIS_KOSMIADIS_CV.pdf" download><Button>Download CV</Button></a>
            </motion.div>
        </div>
    </Page>
}