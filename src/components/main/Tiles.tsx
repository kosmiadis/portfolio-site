import { APP_DATA } from "@data/data.ts"; 
import Tile from "./Tile";
import { animationVariants } from "@animations/variants";
import { motion } from 'motion/react';

export default function Tiles () {
    const tiles = APP_DATA.MainContent.navigation;
    return <section className="grid grid-cols-2 laptop:grid-cols-3 grid-rows-2 gap-4 w-full">
        {tiles.map((tile: {label: string, to: string  }, index:number) => <motion.div key={tile.to} className={index === 0 ? 'col-span-2': ''} initial={animationVariants.blur} animate={animationVariants.unblur} transition={{ duration: animationVariants.transitions.duration - 0.4, delay: 0.1 * index}}><Tile key={tile.label} index={index} label={tile.label} to={tile.to} /></motion.div>)}
    </section>
}