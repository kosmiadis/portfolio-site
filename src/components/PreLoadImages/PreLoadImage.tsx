import { getProjectImages } from "@util/imageLoader"


const chatImages = getProjectImages('chat-app');
const shortenerImages = getProjectImages('url_shortener');
const chalk59Images = getProjectImages('chalk59')
const libraryImages = getProjectImages('my_library');
const renovationImages = getProjectImages('renovation_site')

export default function PreLoadImages () {
    
    const allImages = [...chatImages, ...shortenerImages, ...chalk59Images, ...libraryImages, ...renovationImages];


    return <div className="hidden">
        {allImages.map(img => <img key={img} src={img}/>)}
    </div>
}