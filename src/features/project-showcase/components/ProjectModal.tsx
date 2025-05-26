import { createPortal } from "react-dom"
import { useProjects } from "../store/projects.store"
import { AnimatePresence, motion } from 'motion/react';
import { animationVariants } from "@animations/variants";
import { EyeClosed } from "lucide-react";
import Carousel from "@features/carousel/components/Carousel";
import Badge from "@components/ui/Badge/Badge";
import Social from "@components/ui/Social/Social";


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
    className="fixed bottom-0 left-0 w-full h-full laptop:full laptop:h-full squares overflow-y-scroll">
        <div className="max-w-(--max-width) h-full mx-auto flex flex-col">
            {/* modal header */}
            <div className="flex-row-between p-4 desktop:px-0">
                <h2 className="important-heading text-main-bg">{openProject.title}</h2>
                <button onClick={handleCloseModal} className="text-foreground-primary font-bold ml-auto"><EyeClosed /></button>
            </div>
            
            {/* content */}
            <div className="text-foreground-primary relative p-2 flex flex-col gap-4">
                <Carousel>
                    {openProject.images.map(image => <img key={image} className={`carousel-image`} src={image}/>)}
                </Carousel>

                <div className="grid grid-cols-1 laptop:grid-cols-2 gap-5 p-4 laptop:p-0">
                    <div className="flex flex-col gap-2">
                        <h2 className="important-heading">Description</h2>
                        <p className="text-justify">{openProject.description}</p>
                    </div>

                    

                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <h2 className="important-heading">TechStack</h2>
                            <div className="flex flex-wrap gap-1.5">
                                {openProject.techStack.map(tech => <Badge key={tech}>{tech}</Badge>)}
                            </div>
                        </div>

                        {/* social */}
                        <div>
                            <h2 className="important-heading">Source Code</h2>
                            <Social 
                                href={openProject.github} 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-github" viewBox="0 0 16 16">    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>} 
                            />
                        </div>
                    </div>

                    
                </div>
            </div>

        </div>
    </motion.div>}</AnimatePresence>, document.querySelector('#project-modal')!)
}