"use client";

import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Ensure video plays and loops
      video.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });

      // Force loop when video ends
      video.addEventListener("ended", () => {
        video.currentTime = 0;
        video.play();
      });
    }
  }, []);

  return (
    <>
      <section id="home" className="relative h-screen overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={() => {
            // Ensure video starts playing when loaded
            if (videoRef.current) {
              videoRef.current.play().catch(console.error);
            }
          }}
        >
          <source
            src="https://videos.pexels.com/video-files/4496268/4496268-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
          {/* Fallback message */}
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Hero Content */}
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Make Your Brand
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                BeLoud
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
              We create powerful marketing campaigns that amplify your brand's
              voice and drive exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started
              </a>
              <a
                href="#projects"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-200"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div> */}

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
