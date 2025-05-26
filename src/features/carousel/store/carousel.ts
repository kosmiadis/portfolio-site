import { create } from "zustand";

interface CarouselStore {
    slide: number;
    setSlide: (n:number) => void;
}


const carouselStore = create<CarouselStore>((set) => ({
    slide: 0,
    setSlide: (n) => set(() => ({ slide: n }))
}))

type useCarouselProps = { slides: number }

export function useCarousel ({ slides }: useCarouselProps) {
    const { slide, setSlide } = carouselStore();

    function nextSlide () {
        if (slide === slides) {
            setSlide(0);
        }
        else {
            console.log(slide);
            setSlide(slide + 1);
        }
    }

    function clearCarousel () {
        setSlide(0);
    }

    return { slide, nextSlide, clearCarousel, setSlide };
}

