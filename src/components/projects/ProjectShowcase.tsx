import type { ProjectI } from "@data/data";
import { useProjects } from "@features/project-showcase/store/projects.store";
import { useEffect } from "react";

export default function ProjectShowcase (project: ProjectI) {
    const { openProject, setOpenProject } = useProjects();

    function handleOpenProject () {
        setOpenProject(project)
    }

    useEffect(() => {}, [openProject]);

    return <div onClick={handleOpenProject} className="max-w-[500px] shadow-[0px_0px_20px] shadow-black/50 hover:scale-105 duration-200" >
        <button onClick={handleOpenProject} className="project-showcase overflow-hidden hover:cursor-pointer relative">
            <div className="flex flex-col relative">
                <div className="flex-col-between overflow-hidden duration-200 h-full bg-linear-to-tl from-accent to-transparent relative">
                    <div className="bg-accent"><img src={project.featuredImg} className="grayscale-85 hover:grayscale-0 z-[1] w-full rounded-t-2xl hover:scale-105 duration-200" /></div>
                </div>
                <h2 className="text-lg p-2 px-4 w-full text-left z-20 absolute bottom-0 left-0 font-cal-sans bg-black">{project.title}</h2>
            </div>
        </button>
    </div>
}