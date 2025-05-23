import { useCallback, useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

type TileProps = { label: string, to: string, start: number, end: number }

export default function Tile ({ label, to, start, end }: TileProps) {

    const tileRef = useRef<HTMLAnchorElement>(null);

    const [ mousePosition, setMousePosition ] = useState<{ x: null | number, y: null | number }>({ x: 0, y: 0});

    const updateMousePosition = useCallback((e: MouseEvent) => {

        // relative position of mouse when entering tile
        const bounds = tileRef.current!.getBoundingClientRect();
        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;
        setMousePosition({ x, y });
    }, []);

    useEffect(() => {
        console.log(mousePosition);
    }, [mousePosition])


    function handleMouseEnterAnimation () {
        tileRef.current!.addEventListener('mousemove', updateMousePosition);
    }

    function handleMouseLeaveAnimation () {
        tileRef.current!.removeEventListener('mousemove', updateMousePosition);
    }

    useEffect(() => {
        tileRef.current!.style.perspective = `${Math.round(mousePosition.x!) / 10 }`
    }, [mousePosition]);


    return <Link ref={tileRef} to={to} viewTransition={true} className={`hover:rotate-${Math.round(mousePosition.x!) / 100 } col-start-${start} col-end-${end} tile tile-hover rounded-xl duration-100`} onMouseLeave={handleMouseLeaveAnimation} onMouseEnter={handleMouseEnterAnimation} >
        <div className="flex flex-col justify-end p-2 h-full">
            <span className="font-bold text-2xl">{label}</span>
        </div>
    </Link>
}