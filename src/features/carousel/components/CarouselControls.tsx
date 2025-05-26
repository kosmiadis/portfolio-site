type CarouselControlsProps = { setSlide: (n:number) => void, currentSlide: number, slides: number }

export default function CarouselControls ({ setSlide, currentSlide, slides }: CarouselControlsProps) {

    return <div className="flex flex-row gap-2   ">
        {[...Array(slides).keys()].map((_, index) => 
        <div
            key={index} 
            onClick={() => setSlide(index)}
            className={`${currentSlide === index ? 'bg-secondary-bg w-[26px] ': 'bg-foreground-primary w-[18px]'} hover:cursor-pointer hover:bg-secondary-bg duration-200 h-[6px] bg-foreground-primary rounded-xs z-10 inline`}>
        </div>)}
    </div>
}