import React from "react";
import GlassNavbar from "./components/GlassNavbar";
import ScrollVelocity from "./components/ScrollVelocity";
import Aurora from "./components/Aurora";
import PixelTransition from "./components/PixelTransition";
import Waves from "./components/Waves";
import BlurText from "./components/BlurText";

function App() {
  return (
    <div>
      {/* Scroll Text and Profile */}
      <div id="home" className="h-screen flex flex-col justify-center items-center overflow-hidden">
        <div className="h-20 flex items-center justify-center mt-16 md:mt-20">
          <ScrollVelocity
            texts={[
              "Software Engineering Cloud Computing",
              "Machine Learning Internet of Things",
            ]}
            velocity={50}
            className="custom-scroll-text"
          />
        </div>

        <div
          id="profile-section"
          className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8 md:mt-16"
        >
          {/* Text */}
          <div
            id="introduction"
            className="text-center md:text-justify max-w-lg px-4 md:px-0"
          >
            Hi everyone! My name is <strong>Hoga Cavan Afrinata</strong>, but
            you can simply call me Hoga. I'm a computer engineering graduate
            from Universitas Diponegoro, and I love learning anything related to
            computers.
          </div>

          {/* Profile Picture */}
          <div
            id="profile-picture"
            className="w-48 h-48 bg-gray-300 rounded-full flex items-center justify-center"
          >
            <PixelTransition
              firstContent={
                <img
                  src="1x1.jpg"
                  alt="this is hoga"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              }
              secondContent={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                    backgroundColor: "#111",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 900,
                      fontSize: "3rem",
                      color: "#ffffff",
                    }}
                  >
                    hg.
                  </p>
                </div>
              }
              gridSize={12}
              pixelColor="#ffffff"
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
          </div>
        </div>
      </div>

      {/* Next Section (Appears After Scrolling) */}
      <div
        id="technologies-section"
        className="flex flex-col items-center justify-center min-h-screen"
      >
        <div className="relative flex flex-col items-center justify-center w-full">
          {/* Full-width Waves positioned behind the text */}
          <div className="absolute top-1/2 left-0 w-full h-44 -translate-y-1/2 pointer-events-none">
            <Waves
              lineColor="#00D8FF"
              backgroundColor="rgba(255, 255, 255, 0)"
              waveSpeedX={0.02}
              waveSpeedY={0.01}
              waveAmpX={40}
              waveAmpY={20}
              friction={0.9}
              tension={0.01}
              maxCursorMove={120}
              xGap={12}
              yGap={36}
            />
          </div>

          {/* TECHNOLOGIES Text */}
          <div
            id="technology-header"
            className="relative text-white font-bold z-10"
          >
            <BlurText
              text="TECHNOLOGIES"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-xl sm:text-3xl md:text-5xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
