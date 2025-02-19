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
        {slides.map((s, index) => {
          return (
            <div key={index} className="w-full h-full flex-shrink-0">
              <img
                src={s}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button
          onClick={previousSlide}
          className="p-2 hover:bg-black/20 rounded-full transition-colors"
          aria-label="Previous slide"
        >
          <MdOutlineKeyboardDoubleArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 hover:bg-black/20 rounded-full transition-colors"
          aria-label="Next slide"
        >
          <MdOutlineKeyboardDoubleArrowRight />
        </button>
      </div>
    </div>
  );
}