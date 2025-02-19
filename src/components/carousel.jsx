import { useState } from "react";
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";

export default function Carousel({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(slides.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const nextSlide = () => {
    if (currentSlide === slides.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <div className="overflow-hidden relative w-full aspect-[16/9]">
      <div
        className="flex h-full transition-transform ease-out duration-300"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide, index) => {
          return (
            <div key={index} className="relative w-full h-full flex-shrink-0">
              <img
                src={slide.url}
                alt={slide.description}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
                <p className="text-white text-center text-sm sm:text-lg md:text-2xl">
                  {slide.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button
          onClick={previousSlide}
          className="p-2 hover:bg-black/20 rounded-full transition-colors z-10"
          aria-label="Previous slide"
        >
          <MdOutlineKeyboardDoubleArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 hover:bg-black/20 rounded-full transition-colors z-10"
          aria-label="Next slide"
        >
          <MdOutlineKeyboardDoubleArrowRight />
        </button>
      </div>
    </div>
  );
}