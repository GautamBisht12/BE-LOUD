"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Users,
  Target,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import Footer from "@/components/Footer";

// Import the projects data (you might want to move this to a separate file)
const projects = [
  {
    id: 1,
    title: "Dhruv Rathee Campaign",
    category: "Digital Marketing",
    image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg",
    description:
      "Complete digital marketing campaign for educational content creator",
    details: {
      client: "Dhruv Rathee",
      duration: "6 months",
      services: ["Social Media", "Content Strategy", "PR"],
      results: "300% increase in engagement, 2M+ reach",
      challenge: "Creating engaging educational content for diverse audiences",
      solution: "Multi-platform content strategy with data-driven insights",
      outcome:
        "Significantly improved brand recognition and audience engagement",
    },
  },
  {
    id: 2,
    title: "Discovery Channel Promo",
    category: "Video Production",
    image: "https://images.pexels.com/photos/3709369/pexels-photo-3709369.jpeg",
    description: "High-impact promotional video for nature documentary series",
    details: {
      client: "Discovery Channel",
      duration: "3 months",
      services: ["Video Editing", "Motion Graphics", "Sound Design"],
      results: "15M+ views across platforms",
      challenge: "Creating compelling trailer for nature documentary",
      solution: "Cinematic editing with immersive sound design",
      outcome: "Record-breaking viewership for documentary premiere",
    },
  },
  {
    id: 3,
    title: "Kuku FM App Launch",
    category: "Brand Campaign",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    description: "Complete brand campaign for audio content platform launch",
    details: {
      client: "Kuku FM",
      duration: "4 months",
      services: ["Brand Strategy", "Digital Marketing", "UI/UX"],
      results: "1M+ app downloads in first month",
      challenge: "Establishing brand in competitive audio content market",
      solution: "Integrated brand campaign with focus on vernacular content",
      outcome: "Successful market entry with strong user acquisition",
    },
  },
  {
    id: 4,
    title: "P&G Product Launch",
    category: "Integrated Campaign",
    image: "https://images.pexels.com/photos/3184358/pexels-photo-3184358.jpeg",
    description: "Multi-channel campaign for new product line introduction",
    details: {
      client: "Procter & Gamble",
      duration: "8 months",
      services: ["BTL Marketing", "Digital Ads", "PR"],
      results: "40% market share in target segment",
      challenge: "Launching premium product in competitive FMCG market",
      solution:
        "Integrated campaign combining traditional and digital channels",
      outcome: "Exceeded sales targets by 25% in launch quarter",
    },
  },
  {
    id: 5,
    title: "Byjus EdTech Revolution",
    category: "Digital Transformation",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
    description:
      "Digital transformation campaign for online education platform",
    details: {
      client: "Byjus",
      duration: "12 months",
      services: ["Digital Marketing", "Content Creation", "AI Solutions"],
      results: "500% increase in user engagement",
      challenge: "Adapting education delivery for post-pandemic world",
      solution: "AI-powered personalized learning campaigns",
      outcome: "Market leadership in online education segment",
    },
  },
  {
    id: 6,
    title: "Mystic Land Experience",
    category: "Experiential Marketing",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    description: "Immersive brand experience for tourism destination",
    details: {
      client: "Mystic Land",
      duration: "6 months",
      services: ["Experiential Design", "Digital Content", "Social Media"],
      results: "200% increase in tourist footfall",
      challenge: "Promoting unknown tourist destination",
      solution: "Immersive digital experiences and influencer partnerships",
      outcome: "Established destination as must-visit travel spot",
    },
  },
];

export default function ProjectDetail() {
  const [project, setProject] = useState(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const projectId = parseInt(searchParams.get("id"));
    const foundProject = projects.find((p) => p.id === projectId);
    setProject(foundProject);
  }, [searchParams]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Project Not Found
          </h1>
          <Link href="/" className="text-blue-600 hover:text-blue-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                BeLoud
              </span>
            </Link>
            <Link
              href="/"
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <span className="inline-block px-4 py-2 bg-blue-600 text-white text-sm rounded-full mb-4">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Client</h3>
              <p className="text-gray-600">{project.details.client}</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Clock className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Duration</h3>
              <p className="text-gray-600">{project.details.duration}</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Target className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Services</h3>
              <p className="text-gray-600">
                {project.details.services.length} Services
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <TrendingUp className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Results</h3>
              <p className="text-gray-600">{project.details.results}</p>
            </div>
          </div>

          {/* Rest of your existing project detail content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Case Study
              </h2>

              <div className="space-y-8">
                <div>
                  <div className="flex items-center mb-4">
                    <Target className="w-6 h-6 text-red-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      Challenge
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed pl-9">
                    {project.details.challenge}
                  </p>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <Lightbulb className="w-6 h-6 text-yellow-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      Solution
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed pl-9">
                    {project.details.solution}
                  </p>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <TrendingUp className="w-6 h-6 text-green-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      Outcome
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed pl-9">
                    {project.details.outcome}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Services Provided
              </h2>
              <div className="space-y-4">
                {project.details.services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                    <span className="font-medium text-gray-900">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 p-8 bg-gray-900 text-white rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's create something amazing together. Get in touch with our
              team today.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors duration-200"
            >
              Get In Touch
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Other Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter((p) => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  href={`/projects-detail?id=${relatedProject.id}`}
                  className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden rounded-t-xl">
                    <Image
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                        {relatedProject.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                      {relatedProject.title}
                    </h3>
                    <p className="text-gray-600">
                      {relatedProject.description}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
