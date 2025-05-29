import Page from "@components/ui/Page/Page"
import { motion } from 'motion/react';
import { animationVariants } from "@animations/variants";

export default function Contact () {

    return <Page>
        <div className="flex flex-col items-center gap-10">
          <motion.h1 initial={animationVariants.fadeOut} animate={animationVariants.fadeIn} className="text-6xl font-cal-sans text-center">Feel free to ask me any questions!</motion.h1>
          <motion.div initial={animationVariants.blur} animate={animationVariants.unblur} className="bg-accent shadow-[0px_0px_20px] shadow-accent w-full max-w-[500px] h-[120px] flex-center rounded-xl">
            <a className="theme-button border-2" href="mailto:vageliskosmiadis@gmail.com">Send me a message</a>
          </motion.div>
        </div>
    </Page>
}