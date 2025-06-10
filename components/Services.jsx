"use client";

import {
  Award,
  BarChart3,
  Bot,
  Code,
  Edit3,
  Megaphone,
  Share2,
  Users,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "PR",
      description:
        "Strategic public relations campaigns that build brand reputation and media presence.",
      icon: Megaphone,
      color: "from-blue-500 to-purple-600",
    },
    {
      title: "Editing",
      description:
        "Professional video and content editing services for all your creative needs.",
      icon: Edit3,
      color: "from-green-500 to-teal-600",
    },
    {
      title: "Brand",
      description:
        "Comprehensive brand identity development and brand strategy consultation.",
      icon: Award,
      color: "from-orange-500 to-red-600",
    },
    {
      title: "Social Media",
      description:
        "Engaging social media strategies that connect your brand with your audience.",
      icon: Share2,
      color: "from-pink-500 to-rose-600",
    },
    {
      title: "Website Development",
      description:
        "Modern, responsive websites built with cutting-edge technology.",
      icon: Code,
      color: "from-indigo-500 to-blue-600",
    },
    {
      title: "BTL",
      description:
        "Below-the-line marketing activities for targeted customer engagement.",
      icon: Users,
      color: "from-purple-500 to-indigo-600",
    },
    {
      title: "Digital Marketing",
      description:
        "Data-driven digital marketing campaigns that deliver measurable results.",
      icon: BarChart3,
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "AI Solutions",
      description:
        "Innovative AI-powered solutions to automate and optimize your business processes.",
      icon: Bot,
      color: "from-violet-500 to-purple-600",
    },
  ];
  return (
    <>
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive marketing solutions to elevate your brand and drive
              growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
