"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const projects = [
  {
    id: 1,
    title: "Dhruv Rathee Campaign",
    category: "Digital Marketing",
    image: "/images/dhruv.png",
    description:
      "Complete digital marketing campaign for educational content creator",
  },
  {
    id: 2,
    title: "Discovery Channel Promo",
    category: "Video Production",
    image: "/images/discovery.png",
    description: "High-impact promotional video for nature documentary series",
  },
  {
    id: 3,
    title: "Kuku FM App Launch",
    category: "Brand Campaign",
    image: "/images/kuku.webp",
    description: "Complete brand campaign for audio content platform launch",
  },
  {
    id: 4,
    title: "P&G Product Launch",
    category: "Integrated Campaign",
    image: "/images/pg.png",
    description: "Multi-channel campaign for new product line introduction",
  },
  {
    id: 5,
    title: "Byjus EdTech Revolution",
    category: "Digital Transformation",
    image: "/images/byjus.webp",
    description:
      "Digital transformation campaign for online education platform",
  },
  {
    id: 6,
    title: "Mystic Land Experience",
    category: "Experiential Marketing",
    image: "/images/mystic.png",
    description: "Immersive brand experience for tourism destination",
  },
];

export default function Projects() {
  const router = useRouter();

  const handleProjectClick = (projectId) => {
    router.push(`/projects-detail?id=${projectId}`);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Projects
          </h2>
          <p className="text-xl text-gray-600">
            Showcasing our successful campaigns and creative solutions
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-rtl space-x-6 hover:pause-animation">
            {[...projects, ...projects].map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => handleProjectClick(project.id)}
              >
                <div className="relative overflow-hidden rounded-t-xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={320}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
