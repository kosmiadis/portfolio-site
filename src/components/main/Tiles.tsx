import { APP_DATA } from "@data/data.ts"; 
import Tile from "./Tile";

export default function Tiles () {
    const tiles = APP_DATA.MainContent.tiles;
    
    return <section className="grid grid-cols-2 laptop:grid-cols-3 grid-rows-2 gap-4 w-full">
        {/* <span className={"col-start-1 col-end-3"}><Tile label="Projects" to="projects" /></span>
        <span><Tile label="Skills" to="skills"/></span>
        <span><Tile label="About" to="about"/></span>
        <span><Tile label="CV" to="cv"/></span>
        <span><Tile label="Contact" to="contact"/></span> */}
        {tiles.map(tile => <Tile key={tile.label} label={tile.label} to={tile.to} start={tile.col_start} end={tile.col_end} />)}
    </section>
}