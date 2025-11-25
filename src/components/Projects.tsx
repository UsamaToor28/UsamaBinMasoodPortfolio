import { ArrowRight, Filter, X, ZoomIn } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import FirstAppFull from "../assets/App1.png";
import SecondAppFull from "../assets/SecondAppFull1.png";
import WebA1 from "../assets/lessonlint-1.png"
import WebA2 from "../assets/lessonlint-2.png"
import WebA3 from "../assets/lessonlint-3.png"
import WebA4 from "../assets/lessonlint-4.png"
import WebA5 from "../assets/lessonlint-5.png"
import WebA6 from "../assets/lessonlint-6.png"
import WebB1 from "../assets/pixelping.png"
import WebB2 from "../assets/pixelping-2.png"
import WebB3 from "../assets/pixelping-3.png"
import WebB4 from "../assets/pixelping-4.png"
import WebC1 from "../assets/UTMage-1.png"
import WebC2 from "../assets/UTMage-2.png"
import WebC3 from "../assets/UTMage-3.png"
import WebC4 from "../assets/UTMage-4.png"
import WebC5 from "../assets/UTMage-5.png"
import Petlinx from "../assets/Petlinx.png"

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [viewMode, setViewMode] = useState("grid");
  const [showAll, setShowAll] = useState(false);
  const [lightbox, setLightbox] = useState({ projectIndex: null, imageIndex: 0 });

  const allProjects = [
    {
      title: "Food App UI/UX Design",
      description: "A modern mobile app UI/UX for food lovers, featuring intuitive navigation, vibrant visuals, and engaging user experience.",
      images: [FirstAppFull],
      tags: ["UI/UX", "Mobile App", "Food App", "Design"],
      color: "bg-pastel-blue",
      category: "Mobile Design",
      year: "2025",
      isFullPage: false,
    },
    {
      title: "PixelPing Uptime & Web Vitals UI/UX",
      description: "UI/UX design for a MERN-based monitoring tool featuring uptime tracking, Core Web Vitals dashboards, and a polished marketing site with responsive layout.",
      images: [WebB1, WebB2, WebB3, WebB4],
      tags: ["UI/UX", "Web App", "MERN", "Monitoring Tool"],
      color: "bg-pastel-purple",
      category: "Web Design",
      year: "2024",
      isFullPage: true,
    },
    {
      title: "LessonLint: AI Educational Content Analyzer",
      description: "AI-powered web app UI/UX, analyzing content clarity, reading level, coverage, and assessments to help educators improve learning materials.",
      images: [WebA1, WebA2, WebA3, WebA4, WebA5, WebA6],
      tags: ["Web App", "UI/UX", "AI", "Content Analysis", "EdTech"],
      color: "bg-pastel-pink",
      category: "Web Design",
      year: "2024",
      isFullPage: true,
    },
    {
      title: "AI Health & Meal App UI/UX",
      description: "Mobile app UI/UX design for an AI-powered health assistant that analyzes your health and suggests personalized meals.",
      images: [SecondAppFull],
      tags: ["Mobile App", "Concept Design", "AI Health", "UI/UX", "Prototyping"],
      color: "bg-pastel-green",
      category: "Mobile Design",
      year: "2025",
      isFullPage: false,
    },
    {
      title: "UTMage Campaign URL Builder UI/UX",
      description: "UI/UX design for a MERN-based tool that generates clean UTM-tagged links with instant validation, bulk build, and smart export options.",
      images: [WebC1, WebC2, WebC3, WebC4, WebC5],
      tags: ["UI/UX", "Analytics", "Web App", "MERN", "Productivity Tool"],
      color: "bg-pastel-blue",
      category: "Web Design",
      year: "2025",
      isFullPage: true,
    },
    {
      title: "Petlinx Animal Welfare App UI/UX & Front-End",
      description: "Final year project: Flutter mobile app with responsive UI/UX and front-end development for community-driven pet rescue, case tracking, and volunteer coordination.",
      images: [Petlinx],
      tags: ["UI/UX", "Mobile App", "Flutter", "Front-End", "Animal Welfare"],
      color: "bg-pastel-blue",
      category: "Mobile Design",
      year: "2025",
      isFullPage: false,
    },
  ];

  const projects = showAll ? allProjects : allProjects.slice(0, 4);
  const categories = ["All", ...new Set(allProjects.map((p) => p.category))];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-teal-50 via-white to-teal-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large soft blobs */}
        <div className="absolute top-10 left-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-0 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Smaller floating circles */}
        <div className="absolute top-1/4 left-1/2 w-24 h-24 bg-teal-100/30 rounded-full blur-2xl animate-bounce-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-teal-200/25 rounded-full blur-2xl animate-bounce-slow delay-700"></div>
        
        {/* Subtle radial gradient overlay */}
        <div className="absolute inset-0 bg-radial-to-t from-white/0 via-teal-50/10 to-white/0 pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-teal-100 text-teal-600 rounded-full text-sm font-semibold">
              Portfolio Showcase
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black leading-tight block text-black mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-44 h-1 bg-gradient-to-r from-teal-600 to-teal-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, blending creativity with technology to
            deliver exceptional digital experiences.
          </p>
        </div>

        {/* Filter Tabs with View Toggle */}
        <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
          <div className="flex items-center gap-3 flex-wrap">
            <Filter className="h-5 w-5 text-teal-500" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? "bg-teal-500 text-white shadow-lg scale-105"
                    : "bg-white text-gray-600 hover:bg-teal-50 hover:text-teal-600 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* View Mode Toggle */}
          <div className="flex gap-2 bg-white p-1 rounded-full shadow-md">
            {["grid", "showcase"].map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors delay-100 ${
                  viewMode === mode ? "text-white" : "text-gray-600 hover:text-teal-600"
                }`}
              >
                {/* The Sliding Background */}
                {viewMode === mode && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-teal-500 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                {/* The Text (must be on top) */}
                <span className="relative z-10 capitalize">{mode}</span>
              </button>
            ))}
          </div>
        </div>        

        {/* Projects Display */}
        {viewMode === "grid" ? (
          // Grid View
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group hover:shadow-large transition-all duration-500 hover:-translate-y-2 border: 1px solid #b2eff3ff hover:border-[rgba(14,165,233,0.4)] overflow-hidden animate-fade-in bg-white relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  {/* Project Image */}
                  <div
                    className={`h-64 ${project.color} flex items-center justify-center relative overflow-hidden cursor-pointer`}
                    onClick={() => setLightbox({ projectIndex: index, imageIndex: 0 })}
                  >
                    {project.images && project.images.length > 0 && (
                      <>
                        <img
                          src={project.images[0]}
                          alt={project.title}
                          className="w-full h-full object-cover absolute inset-0 transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                          onClick={(e) => e.stopPropagation()}
                        />
                        {/* Image Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </>
                    )}

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 text-xs font-semibold bg-white/90 text-teal-600 rounded-full backdrop-blur-sm shadow-md">
                        {project.category}
                      </span>
                    </div>

                    {/* Zoom Icon - Top Right */}
                    <button
                      onClick={() => setLightbox({ projectIndex: index, imageIndex: 0 })}
                      className="absolute top-4 right-4 z-30 bg-white/90 hover:bg-teal-500 text-teal-600 hover:text-white p-2 rounded-full backdrop-blur-sm shadow-lg transition-all duration-300 transform hover:scale-110"
                    >
                      <ZoomIn className="h-5 w-5" />
                    </button>

                    {/* Progress indicator */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-600 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>

                  <CardContent className="p-6">
                    {/* Title with arrow */}
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl text-teal-500 font-semibold group-hover:text-gray-700 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400 font-medium">{project.year}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs font-medium bg-teal-50 text-teal-600 rounded-full hover:bg-teal-500 hover:text-white transition-all duration-300 cursor-default transform hover:scale-105"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          // Showcase View - Large Featured Cards
          <div className="space-y-12">
  {filteredProjects.map((project, index) => (
    <Card
      key={index}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden animate-fade-in bg-white"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div
        className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-stretch`}
      >
        {/* Image Section - 60% width */}
        <div className="md:w-3/5 relative flex-shrink-0">
          <div
            className={`w-full relative overflow-hidden cursor-pointer ${project.color}`}
            onClick={() => setLightbox({ projectIndex: index, imageIndex: 0 })}
            style={{ aspectRatio: '16/9' }}
          >
            {project.images && project.images.length > 0 && (
              <>
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                  onClick={(e) => e.stopPropagation()}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </>
            )}

            {/* Zoom Icon - Top Right */}
            <button
              onClick={() => setLightbox({ projectIndex: index, imageIndex: 0 })}
              className="absolute top-6 right-6 z-30 bg-white/90 hover:bg-teal-500 text-teal-600 hover:text-white p-3 rounded-full backdrop-blur-sm shadow-lg transition-all duration-300 transform hover:scale-110"
            >
              <ZoomIn className="h-6 w-6" />
            </button>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-teal-600 via-teal-400 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
          </div>
        </div>

        {/* Content Section - 40% width */}
        <div className="md:w-2/5 p-8 md:p-10 flex flex-col">
          <div>
            <div className="mb-4">
              <span className="px-3 py-1 text-xs font-semibold bg-teal-100 text-teal-600 rounded-full">
                {project.category}
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-black text-teal-500 mb-4 group-hover:text-gray-700 transition-colors line-clamp-2">
              {project.title}
            </h3>

            <p className="text-muted-foreground mb-6 leading-relaxed text-base">
              {project.description}
            </p>

            {/* Year */}
            <div className="mb-6">
              <span className="text-teal-500 font-semibold text-lg">{project.year}</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-4 py-2 text-xs font-medium bg-teal-50 text-teal-600 rounded-full hover:bg-teal-500 hover:text-white transition-all duration-300 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-auto">
            <button
              onClick={() => setLightbox({ projectIndex: index, imageIndex: 0 })}
              className="inline-flex items-center gap-2 text-teal-500 hover:text-teal-600 font-semibold group/link"
            >
              Explore Project
              <ArrowRight className="h-5 w-5 transform group-hover/link:translate-x-2 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </Card>
  ))}
</div>

        )}

        {/* View All / Show Less Button */}
        {/* // Update the View All / Show Less Button section */}
        <div className="text-center mt-16">
          <Button
            onClick={() => {
              if (!showAll) {
                // Save current scroll position before expanding
                const currentScrollY = window.scrollY;
                setShowAll(true);
                
                // Restore scroll position after DOM updates
                requestAnimationFrame(() => {
                  window.scrollTo(0, currentScrollY);
                });
              } else {
                setShowAll(false);
              }
            }}
            size="lg"
            className="px-10 py-7 text-lg bg-white border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 group shadow-lg hover:shadow-2xl transform hover:scale-105 rounded-full font-semibold"
          >
            {showAll ? "Show Less Projects" : "View All Projects"}
            <ArrowRight className={`ml-2 h-5 w-5 transform group-hover:translate-x-2 transition-transform duration-300 ${showAll ? 'rotate-90' : ''}`} />
          </Button>
        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-gradient-to-r from-teal-500 to-teal-400 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black/5 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-black mb-4">
              Let's Create Something Amazing Together
            </h3>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Have a project in mind? Let's collaborate and bring your vision to life with cutting-edge design and development.
            </p>
            <Button
              size="lg"
              className="bg-white text-teal-600 hover:bg-gray-100 px-10 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightbox.projectIndex !== null && (
  <div
    className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-8 animate-fade-in"
    onClick={() => setLightbox({ projectIndex: null, imageIndex: 0 })}
  >
    {/* Close Button */}
    <button
      onClick={() => setLightbox({ projectIndex: null, imageIndex: 0 })}
      className="absolute top-6 right-6 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white p-2.5 rounded-full backdrop-blur-md transition-all duration-300 border border-white/10"
      aria-label="Close"
    >
      <X className="h-5 w-5" />
    </button>

    {/* Previous Button - Only show if multiple images */}
    {filteredProjects[lightbox.projectIndex].images.length > 1 && (
      <button
        onClick={(e) => {
          e.stopPropagation();
          const proj = filteredProjects[lightbox.projectIndex];
          setLightbox({
            ...lightbox,
            imageIndex: (lightbox.imageIndex - 1 + proj.images.length) % proj.images.length,
          });
        }}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white p-3 rounded-full backdrop-blur-md transition-all duration-300 border border-white/10"
        aria-label="Previous image"
      >
        <span className="text-2xl">‹</span>
      </button>
    )}

    {/* Image Container */}
    <div 
      className={`relative ${
        filteredProjects[lightbox.projectIndex].isFullPage 
          ? 'w-[85vw] h-[85vh] overflow-auto' 
          : 'max-w-[70vw] max-h-[70vh] flex items-center justify-center'
      }`}
      style={filteredProjects[lightbox.projectIndex].isFullPage ? {
        scrollbarWidth: 'thin',
        scrollbarColor: 'rgba(255, 255, 255, 0.3) transparent'
      } : {}}
      onClick={(e) => e.stopPropagation()}
    >
      <style>{`
        div::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        div::-webkit-scrollbar-track {
          background: transparent;
        }
        div::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          transition: background 0.3s;
        }
        div::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
      <img
        src={filteredProjects[lightbox.projectIndex].images[lightbox.imageIndex]}
        alt={`${filteredProjects[lightbox.projectIndex].title} - Image ${lightbox.imageIndex + 1}`}
        className={`rounded-lg shadow-2xl ${
          filteredProjects[lightbox.projectIndex].isFullPage 
            ? 'w-auto h-auto min-w-full block' 
            : 'max-w-full max-h-full object-contain'
        }`}
      />
    </div>

    {/* Next Button - Only show if multiple images */}
    {filteredProjects[lightbox.projectIndex].images.length > 1 && (
      <button
        onClick={(e) => {
          e.stopPropagation();
          const proj = filteredProjects[lightbox.projectIndex];
          setLightbox({
            ...lightbox,
            imageIndex: (lightbox.imageIndex + 1) % proj.images.length,
          });
        }}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white p-3 rounded-full backdrop-blur-md transition-all duration-300 border border-white/10"
        aria-label="Next image"
      >
        <span className="text-2xl">›</span>
      </button>
    )}

    {/* Image Counter - Only show if multiple images */}
    {filteredProjects[lightbox.projectIndex].images.length > 1 && (
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
        {filteredProjects[lightbox.projectIndex].images.map((_, idx) => (
          <div
            key={idx}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === lightbox.imageIndex 
                ? 'w-8 bg-white' 
                : 'w-1.5 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    )}
  </div>
)}
    </section>
  );
};

export default Projects;