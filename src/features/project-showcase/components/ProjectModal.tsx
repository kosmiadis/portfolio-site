import { createPortal } from "react-dom"
import { useProjects } from "../store/projects.store"
import { AnimatePresence, motion } from 'motion/react';
import { animationVariants } from "@animations/variants";
import { EyeClosed } from "lucide-react";
import Carousel from "@features/carousel/components/Carousel";

export default function ProjectModal () {
    const { openProject, setOpenProject } = useProjects();

    function handleCloseModal () {
        setOpenProject(null);
    }

    return createPortal(<AnimatePresence mode="wait">
        {openProject &&
        <motion.div 
        initial={animationVariants.blur}
        animate={animationVariants.unblur}
        exit={animationVariants.blur}
        key={'project-modal'}
        transition={{ duration: 0.4, ease: "anticipate" }}
    className="fixed bottom-0 left-0 w-full h-full laptop:full laptop:h-full bg-accent">
        <div className="max-w-(--max-width) h-full mx-auto flex flex-col">
            
            {/* modal header */}
            <div className="flex-row-between p-4 desktop:px-0">
                <h2 className="important-heading text-main-bg">{openProject.title}</h2>
                <button onClick={handleCloseModal} className="text-foreground-primary font-bold ml-auto"><EyeClosed /></button>
            </div>
            
            {/* content */}
            <div className="text-foreground-primary relative p-2">
                <Carousel>
                    {openProject.images.map(image => <img key={image} className={`carousel-image`} src={openProject.featuredImg}/>)}
                </Carousel>
            </div>
            
        </div>
    </motion.div>}</AnimatePresence>, document.querySelector('#project-modal')!)
}