import Social from '@ui/Social/Social'
// import { useMotionValueEvent, useScroll } from 'motion/react'
// import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header () {
    // const [ scrollDirection, setScrollDirection ] = useState<'down' | 'up'>('down');
    // const { scrollY } = useScroll();

    // //detect when user scrolls up so that the header becomes visible again.
    // useMotionValueEvent(scrollY, 'change', (current) => {
    //     const diff = current - scrollY.getPrevious()!
    //     setScrollDirection(diff > 0 ? 'down' : 'up');
    // })


    return <header className={`flex-row-between duration-200 p-4`}>
        
        <h1 className='important-heading'><Link to={'/'}>Vagelis Kosmiadis</Link></h1>
        <ul className='flex gap-4'>
            <li>
                <Social 
                    href="https://github.com/kosmiadis" 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-github" viewBox="0 0 16 16">    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>} 
                />
            </li>
            <li className='bg-white rounded-lg'>
                <Social 
                    href="https://www.linkedin.com/in/%CE%B2%CE%B1%CE%B3%CE%B3%CE%AD%CE%BB%CE%B7%CF%82-%CE%BA%CE%BF%CF%83%CE%BC%CE%B9%CE%AC%CE%B4%CE%B7%CF%82-72a6a9360/" 
                    icon={<svg height="40" width="40" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 382 382" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" fill="#0077B7" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#0077B7" d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z"></path> </g></svg>} 
                />
            </li>
        </ul>
    </header>
}