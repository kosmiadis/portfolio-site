import { Children, useEffect, type ReactNode } from "react";
import { useCarousel } from "../store/carousel"
import CarouselControls from "./CarouselControls";
import { motion } from 'motion/react';
import { animationVariants } from "@animations/variants";

type CarouselProps = { children?: ReactNode }

export default function Carousel ({ children }: CarouselProps) {
    const childrenArray = Children.toArray(children)
    
    const { slide, nextSlide, setSlide } = useCarousel({ slides: childrenArray.length});
    
    useEffect(() => {
        const carouselInterval = setInterval(() => {
            nextSlide();
        }, 4000)

        return () => {
            clearInterval(carouselInterval);
        }
    }, [nextSlide, slide])

    return <div className="carousel">
            <div className="carousel-inner">
                {/* every time it displays the slide's index corresponding image. */}
                <motion.span 
                    key={slide} 
                    initial={animationVariants.fadeOut}
                    animate={animationVariants.fadeIn}
                    exit={animationVariants.fadeOut}
                    transition={animationVariants.transitions}
                >{childrenArray[slide]}</motion.span>
            </div>
        <CarouselControls setSlide={setSlide} currentSlide={slide} slides={childrenArray.length} />
    </div>
}