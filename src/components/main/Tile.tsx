import { useCallback, useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

type TileProps = { index:number, label: string, to: string }

export default function Tile ({ index, label, to}: TileProps) {

    const tileRef = useRef<HTMLAnchorElement>(null);

    // const [ mousePosition, setMousePosition ] = useState<{ x: null | number, y: null | number }>({ x: 0, y: 0});

    // const updateMousePosition = useCallback((e: MouseEvent) => {

    //     // relative position of mouse when entering tile
    //     const bounds = tileRef.current!.getBoundingClientRect();
    //     const x = e.clientX - bounds.left;
    //     const y = e.clientY - bounds.top;
    //     setMousePosition({ x, y });
    // }, []);



    // function handleMouseEnterAnimation () {
    //     tileRef.current!.addEventListener('mousemove', updateMousePosition);
    // }

    // function handleMouseLeaveAnimation () {
    //     tileRef.current!.removeEventListener('mousemove', updateMousePosition);
    // }
// onMouseLeave={handleMouseLeaveAnimation} onMouseEnter={handleMouseEnterAnimation}

    return <Link ref={tileRef} to={to} viewTransition={true} className={index === 0 ? 'col-span-2' : ''}>
        <div className={`flex justify-start squares items-end p-4 tile `}>
            <span className="text-shadow-foreground-secondary text-shadow">{label}</span>
        </div>
    </Link>
}