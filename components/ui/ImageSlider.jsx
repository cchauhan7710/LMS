import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '../icons/IconLibrary';

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = useCallback(() => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, slides.length]);

    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, slides.length]);

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    useEffect(() => {
        const sliderInterval = setInterval(() => {
            goToNext();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(sliderInterval);
    }, [goToNext]);

    if (!slides || slides.length === 0) {
        return null;
    }

    return (
        <div className="h-full w-full relative group overflow-hidden">
            {/* Slides container - using a sliding effect */}
            <div className="w-full h-full flex transition-transform ease-in-out duration-1000" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {slides.map((slide, slideIndex) => (
                    <div 
                        key={slideIndex} 
                        className="w-full h-full flex-shrink-0 bg-cover bg-center" 
                        style={{ backgroundImage: `url(${slide.url})` }}
                        aria-label={`Slide ${slideIndex + 1}`}
                        role="img"
                    ></div>
                ))}
            </div>
            
            {/* Left Arrow */}
            <button aria-label="Previous slide" onClick={goToPrevious} className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/40 transition">
                <ChevronLeftIcon className="w-8 h-8" />
            </button>

            {/* Right Arrow */}
            <button aria-label="Next slide" onClick={goToNext} className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/40 transition">
                <ChevronRightIcon className="w-8 h-8" />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
                {slides.map((slide, slideIndex) => (
                    <button
                        key={slideIndex}
                        aria-label={`Go to slide ${slideIndex + 1}`}
                        onClick={() => goToSlide(slideIndex)}
                        className={`cursor-pointer h-3 w-3 rounded-full transition-all duration-300 ${currentIndex === slideIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white'}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;