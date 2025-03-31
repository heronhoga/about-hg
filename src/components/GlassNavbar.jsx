import { useState } from "react";
import { Menu, X } from "lucide-react";
import GradientText from "./GradientText";
import Aurora from "./Aurora";
export default function GlassNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <nav className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-md shadow-lg p-2 md:p-5 font-sans font-bold z-50 overflow-hidden">
        {/* Aurora inside nav */}
        <div className="absolute inset-0 -z-10">
          <Aurora
            colorStops={["#00D8FF", "#FFFFFF", "#00D8FF"]}
            blend={0.5}
            amplitude={1.0}
            speed={1}
            className="w-full h-full"
          />
        </div>

        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-white text-lg font-bold">
            <GradientText
              colors={["#00D8FF", "#FFFFFF", "#00D8FF", "#FFFFFF", "#00D8FF", "#FFFFFF"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class p-2 text-3xl"
            >
              HG.
            </GradientText>
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-white text-2xl">
            <li className="hover:text-gray-300 cursor-pointer"><a href="#home">Home</a></li>
            <li className="hover:text-gray-300 cursor-pointer"><a href="#technologies-section">Technologies</a></li>
            <li className="hover:text-gray-300 cursor-pointer"><a href="#projects-section">Projects Showcase</a></li>
            <li className="hover:text-gray-300 cursor-pointer">Contact</li>
          </ul>

          {/* Hamburger Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden flex flex-col bg-white/20 backdrop-blur-lg p-4 mt-2 space-y-4 rounded-lg text-white">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">About</li>
            <li className="hover:text-gray-300 cursor-pointer">Contact</li>
          </ul>
        )}
      </nav>
    </div>
  );
}
