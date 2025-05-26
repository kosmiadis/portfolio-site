import { useRef } from "react"
import { Link } from "react-router-dom"

type TileProps = { index: number, label: string, to: string | undefined }

export default function Tile ({ label, to}: TileProps) {

    const tileRef = useRef<HTMLAnchorElement>(null);

    return <Link ref={tileRef} to={to} viewTransition={true} >
        <div className="flex justify-start items-end p-4 tile">
            <span className="text-shadow-foreground-secondary text-shadow">{label}</span>
        </div>
    </Link>
}