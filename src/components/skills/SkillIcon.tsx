type SkillIconProps = { tag: string, src: string } 

export default function SkillIcon ({ tag, src }: SkillIconProps) {
    return <div className="flex flex-col items-center gap-2.5  ">
        <div className="bg-main-bg rounded-full h-25 w-25 border-2 border-main-bg/60 shadow-[0px_0px_10px] shadow-accent flex items-center justify-center p-2 ">
            <img className="w-15" src={src}/>
        </div>
        <span className="font-mono font-semibold">{tag}</span>
    </div>
}