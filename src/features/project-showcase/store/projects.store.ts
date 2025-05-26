import type { ProjectI } from "@data/data";
import { create } from "zustand";

interface ProjectsStore {
    openProject: null | ProjectI;
    setOpenProject: (project: ProjectI | null ) => void;
}


export const useProjects = create<ProjectsStore>((set) => ({
    openProject: null,
    setOpenProject: (project) => set(() => ({ openProject: project}))
}));