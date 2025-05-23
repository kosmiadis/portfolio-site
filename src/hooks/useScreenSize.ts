import { useEffect, useState } from "react"

type ScreenSize = { width: number, height: number }

export function useScreenSize () {

    const [screenSize, setScreenSize] = useState<ScreenSize>({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEffect(() => {
        function updateScreenSize (e: Event) {
            setScreenSize({ width: e.target!.innerWidth, height: e.target!.innerHeight })
        }
        window.addEventListener('resize', updateScreenSize);
        return () => {
            window.removeEventListener('resize', updateScreenSize);    
        }
    }, [])
    
    return { ...screenSize }
}