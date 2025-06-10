import Image from "next/image";
import React, { useState } from "react";

const Clients = () => {
  const clients = [
    {
      name: "Dhruv Rathee",
      image: "/images/dhruv.png",
      subTitle: "Content creator & educator",
    },
    {
      name: "Discovery",
      image: "/images/discovery.png",
      subTitle: "Premium entertainment network",
    },
    {
      name: "Kuku FM",
      image: "/images/kuku.webp",
      subTitle: "Audio content platform",
    },
    {
      name: "P&G",
      image: "/images/pg.png",
      subTitle: "Global consumer goods company",
    },
    {
      name: "Byjus",
      image: "/images/byjus.webp",
      subTitle: "Online education platform",
    },
    {
      name: "Mystic Land",
      image: "/images/mystic.png",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-500 bg-white"
            >
              <Image
                src={client.image}
                alt={client.name}
                width={400}
                height={300}
                className="w-full h-64 object-contain p-6 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 text-white">
                <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold">{client.name}</h3>
                  <p className="text-sm">{client.subTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
