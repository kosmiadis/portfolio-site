import { useEffect, useState } from "react"

type ScreenSize = { width: number, height: number }

export function useScreenSize () {

    const [screenSize, setScreenSize] = useState<ScreenSize>({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEffect(() => {
        function updateScreenSize () {
            setScreenSize({ width: window.innerWidth, height: window.innerHeight })
        }
        window.addEventListener('resize', updateScreenSize);
        return () => {
            window.removeEventListener('resize', updateScreenSize);    
        }
    }, [])
    
    return { ...screenSize }
}