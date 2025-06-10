import Image from "next/image";
import React, { useState } from "react";

const Clients = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const clients = [
    {
      name: "Dhruv Rathee",
      logo: "/images/dhruv.png",
      subTitle: "Content creator & educator",
    },
    {
      name: "Discovery",
      logo: "/images/discovery.png",
      subTitle: "Premium entertainment network",
    },
    {
      name: "Kuku FM",
      logo: "/images/kuku.webp",
      subTitle: "Audio content platform",
    },
    {
      name: "P&G",
      logo: "/images/pg.png",
      subTitle: "Global consumer goods company",
    },
    {
      name: "Byjus",
      logo: "/images/byjus.webp",
      subTitle: "Online education platform",
    },
    {
      name: "Mystic Land",
      logo: "/images/mystic.png",
      subTitle: "Virtual reality entertainment",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="clients">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600">
            We're proud to work with these amazing brands
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 items-center justify-items-center">
          {clients.map((client, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative w-[290px] h-[254px] bg-white rounded-[20px] overflow-hidden transition-all duration-300 border ${
                  isHovered
                    ? "shadow-lg border-[#0a3cff] transform scale-105"
                    : "shadow-md border-gray-200 hover:border-gray-300"
                }`}
              >
                {/* Top Section with Logo Background */}
                <div
                  className={`relative rounded-t-[20px] transition-all duration-300 bg-white bg-center bg-no-repeat bg-contain flex items-center justify-center ${
                    isHovered ? "h-[35%]" : "h-[65%]"
                  }`}
                  style={{
                    backgroundImage: `url(${client.logo})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Fallback Image component for better loading */}
                  <div className="relative w-full h-full flex items-center justify-center p-4">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={120}
                      height={80}
                      className="object-contain max-w-full max-h-full opacity-0"
                      onLoad={(e) => {
                        e.target.style.opacity = "0"; // Keep hidden since we're using CSS background
                      }}
                      onError={(e) => {
                        e.target.style.opacity = "1"; // Show fallback if background fails
                      }}
                    />
                  </div>
                </div>

                {/* Bottom Section */}
                <div
                  className={`bg-[#0a3cff] rounded-b-[20px] rounded-tr-[40px] transition-all duration-300 relative ${
                    isHovered ? "h-[65%]" : "h-[35%]"
                  }`}
                >
                  {/* Curved transition effect */}
                  <div
                    className={`absolute w-[180px] h-[50px] rounded-bl-[40px] rounded-tr-[40px] shadow-[0_30px_0_0_#0a3cff] transition-all duration-300 ${
                      isHovered ? "bottom-[130px]" : "bottom-[25px]"
                    }`}
                  />

                  {/* Card Content */}
                  <div
                    className={`pt-[15%] px-4 flex flex-col items-center justify-center text-white h-full transition-all duration-300 ${
                      isHovered ? "gap-3" : "gap-2"
                    }`}
                  >
                    <span className="font-bold text-[18px] text-center leading-tight">
                      {client.name}
                    </span>
                    <p
                      className={`text-[14px] text-center leading-tight transition-all duration-500 transform ${
                        isHovered
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-2"
                      }`}
                    >
                      {client.subTitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Clients;
