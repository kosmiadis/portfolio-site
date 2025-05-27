import { APP_DATA } from "@data/data"
import { useState } from "react"
import SkillIcon from "./SkillIcon"

type CardProps = { title: string, type: 'techStack' | 'frontend' | 'backend' | 'experienceIn'}

export default function Card ({ title, type }: CardProps) {
    const skills = useState(APP_DATA.SkillsPage.technologies)[0]


    return <div className="flex flex-col gap-4 w-full">
        <h2 className="important-heading text-center">{title}</h2>
        <ul className="flex flex-wrap justify-center gap-6">
            {skills[type].map(tech => <SkillIcon tag={tech.tag} src={tech.icon} key={tech.icon}/>)}
        </ul>
    </div>
}