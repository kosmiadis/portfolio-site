import ProjectShowcase from "@components/projects/ProjectShowcase";
import Page from "@components/ui/Page/Page";
import { APP_DATA } from '@data/data.ts';
import { useState } from "react";
import { motion } from 'motion/react';
import { animationVariants } from "@animations/variants";
import ProjectModal from "@features/project-showcase/components/ProjectModal";
import AnimateChildren from "@components/ui/AnimateChildren/AnimateChildren";


export default function Projects () {

    const projects = useState(APP_DATA.ProjectsPage.projects)[0];

    return <Page>
        <div className="flex flex-col gap-4 relative">
            <h1 className='important-heading text-center'>Here are some of my latest projects!</h1>
            <AnimateChildren>
                {projects.map((project) => <ProjectShowcase key={project.id} {...project} />)}
            </AnimateChildren>
            {/* <div className="w-full grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-5">
                {projects.map((project, index) => <motion.div initial={animationVariants.blur} animate={animationVariants.unblur} transition={{duration: animationVariants.transitions.duration, delay: 0.05 * index}}  key={project.id}><ProjectShowcase {...project} /></motion.div>)}
            </div> */}
        </div>
        <ProjectModal />
    </Page>
}