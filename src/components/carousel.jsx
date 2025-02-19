import { useState } from "react";
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";

export default function Carousel({ slides }) {
  let [currentSlide, setCurrentSlide] = useState();

  let previousSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(slides.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  let nextSlide = () => {
    if (currentSlide === slides.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-300`}
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((s) => {
          return <img src={s} />;
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-slate-400  px-10 text-3xl">
        <button onClick={previousSlide}>
          <MdOutlineKeyboardDoubleArrowLeft />
        </button>
        <button onClick={nextSlide}>
          <MdOutlineKeyboardDoubleArrowRight />
        </button>
      </div>
    </div>
  );
}
