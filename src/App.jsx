import React from "react";
import GlassNavbar from "./components/GlassNavbar";
import ScrollVelocity from "./components/ScrollVelocity";
import Aurora from "./components/Aurora";

function App() {
  return (
    <div className="relative">
      <Aurora
        colorStops={["#00D8FF", "#7CFF67", "#00D8FF"]}
        blend={0.5}
        amplitude={1.0}
        speed={1}
      />

      {/* Navbar */}
      <GlassNavbar />

      {/* Content Wrapper */}
      <div className="pt-16 min-h-screen">
        <ScrollVelocity
          texts={[
            "Software Engineering Cloud Computing",
            "Machine Learning Internet of Things",
          ]}
          velocity={50}
          className="custom-scroll-text"
        />

        {/* Profile Section */}
        <div
          id="profile-section"
          className="flex flex-col md:flex-row items-center justify-center gap-6 p-6 pt-16"
        >
          {/* Text */}
          <div
            id="introduction"
            className="text-center md:text-left max-w-lg font-semibold"
          >
            Hi everyone! My name is <strong>Hoga Cavan Afrinata</strong>, but
            you can simply call me Hoga. I'm a computer engineering graduate
            from Universitas Diponegoro, and I love learning anything related to
            computers.
          </div>

          <div
            id="profile-picture"
            className="w-48 h-48 bg-gray-300 rounded-full flex items-center justify-center"
          >
            <img
              src="/path-to-your-image.jpg"
              alt="Hoga"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
