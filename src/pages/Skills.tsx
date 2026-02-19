import { animationVariants } from "@animations/variants";
import Card from "@components/skills/Card";
import AnimateChidren from "@components/ui/AnimateChildren/AnimateChildren";
import Page from "@components/ui/Page/Page";
import { motion } from 'motion/react';

export default function Skills () {

    const heroText = '"I work with agile technologies in order to create meaningful web apps."'
    const words = heroText.split(' ');  
    return <Page>
        <div>
            <div>
                {words.map((word, index) => <motion.h2 initial={animationVariants.blur} animate={animationVariants.unblur} transition={{ duration: animationVariants.transitions.duration, delay: 0.08 * index }} className="page-hero-text text-3xl w-min inline">{word} </motion.h2>)}
            </div>
            <div className="flex flex-col gap-10 mt-20">
                <AnimateChidren>
                        <Card title="My main Tech Stack includes..." type="techStack"/>
                        <Card title="Frontend Technologies" type="frontend"/>
                        <Card title="Backend Technologies" type="backend"/>
                        <Card title="Experience In" type="experienceIn"/>  
                </AnimateChidren>
            </div>          
        </div> 
    </Page>
}