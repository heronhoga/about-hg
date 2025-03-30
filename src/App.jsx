import React from "react";
import ScrollVelocity from "./components/ScrollVelocity";
import PixelTransition from "./components/PixelTransition";
import Waves from "./components/Waves";
import BlurText from "./components/BlurText";
import CircularGallery from "./components/CircularGallery";

function App() {

  const technologyImages = [
    { image: "/technology-images/golang.png", text: "Golang" },
    { image: "/technology-images/react.png", text: "React" },
    { image: "/technology-images/next.png", text: "Next" },
    { image: "/technology-images/express.png", text: "Express" },
    { image: "/technology-images/arduino.jpg", text: "Arduino" },
  ];

  return (
    <div>
      {/* Scroll Text and Profile */}
      <div
        id="home"
        className="h-screen flex flex-col justify-center items-center overflow-hidden"
      >
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

      {/* Technologies header */}
      <div
        id="technologies-section"
        className="flex flex-col items-center justify-center min-h-screen"
      >
        <div className="relative flex flex-col items-center justify-center w-full">
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

      {/* Technologies content */}
      <div
        id="technologies-section"
        className="items-center justify-center min-h-screen overflow-visible w-full h-[100px]"
      >
        <div style={{ height: "600px", position: "relative" }}>
          <CircularGallery bend={0} items={technologyImages} textColor="#ffffff" borderRadius={0.05} />
        </div>
      </div>
    </div>
  );
}

export default App;
