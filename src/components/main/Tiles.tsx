import { APP_DATA } from "@data/data.ts"; 
import Tile from "./Tile";

export default function Tiles () {
    const tiles = APP_DATA.MainContent.tiles;
    
    return <section className="flex flex-col tablet:grid grid-cols-3 gap-4">
        {tiles.map(tile => <Tile key={tile.label} label={tile.label} to={tile.to} start={tile.col_start} end={tile.col_end} />)}
    </section>
}