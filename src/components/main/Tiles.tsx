import { APP_DATA } from "@data/data.ts"; 
import Tile from "./Tile";

export default function Tiles () {
    const tiles = APP_DATA.MainContent.tiles;
    
    return <section className="grid grid-cols-2 laptop:grid-cols-3 grid-rows-2 gap-4 w-full">
        {tiles.map((tile: {label: string, to: string }, index:number) => <Tile key={tile.label} index={index} label={tile.label} to={tile.to} />)}
    </section>
}