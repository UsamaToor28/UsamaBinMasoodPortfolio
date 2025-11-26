import { 
  Palette, 
  Figma, 
  Layers, 
  Wand2, 
  Code, 
  Lightbulb,
  PenTool,
  Monitor,
  Sparkles,
  Award,
  Zap
} from "lucide-react";
import { useState } from "react";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const skills = [
    {
      icon: PenTool,
      name: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces with user-centered approach",
      gradient: "from-pink-500 via-rose-500 to-red-500",
      level: 90,
      levelText: "Advanced",
      highlight: "Top Skill",
    },
    {
      icon: Palette,
      name: "Branding",
      description: "Building memorable brand identities that resonate with audiences",
      gradient: "from-purple-500 via-violet-500 to-indigo-500",
      level: 95,
      levelText: "Expert",
      highlight: "Creative",
    },
    {
      icon: Layers,
      name: "Canva",
      description: "Professional designs with modern tools and creative workflows",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      level: 95,
      levelText: "Expert",
      highlight: "Most Used",
    },
    {
      icon: Figma,
      name: "Figma",
      description: "Collaborative design and prototyping for seamless team workflows",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      level: 90,
      levelText: "Advanced",
      highlight: "Professional",
    },
    {
      icon: Wand2,
      name: "AI Tools",
      description: "Leveraging AI for creative workflows and innovative solutions",
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      level: 85,
      levelText: "Proficient",
      highlight: "Innovative",
    },
    {
      icon: Monitor,
      name: "Web Design",
      description: "Responsive and modern web interfaces that engage users",
      gradient: "from-teal-500 via-cyan-500 to-blue-500",
      level: 95,
      levelText: "Expert",
      highlight: "Expert",
    },
    {
      icon: Code,
      name: "Frontend Dev",
      description: "Bringing designs to life with clean, performant code",
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      level: 85,
      levelText: "Advanced",
      highlight: "Technical",
    },
    {
      icon: Lightbulb,
      name: "Creative Direction",
      description: "Leading creative vision and strategy for impactful results",
      gradient: "from-yellow-500 via-orange-500 to-red-500",
      level: 95,
      levelText: "Expert",
      highlight: "Leadership",
    },
  ];

  const tools = [
    { name: "Adobe XD", category: "Design", usage: 80, color: "from-pink-500 to-purple-500" },
    { name: "Figma", category: "Design", usage: 95, color: "from-green-500 to-emerald-500" },
    { name: "Sketch", category: "Design", usage: 80, color: "from-orange-500 to-amber-500" },
    { name: "Framer", category: "Design", usage: 80, color: "from-blue-500 to-cyan-500" },
    { name: "After Effects", category: "Motion", usage: 85, color: "from-purple-500 to-indigo-500" },
    { name: "Blender", category: "3D", usage: 70, color: "from-orange-500 to-red-500" },
    { name: "React", category: "Code", usage: 85, color: "from-cyan-500 to-blue-500" },
    { name: "TypeScript", category: "Code", usage: 85, color: "from-blue-500 to-indigo-500" },
    { name: "Tailwind", category: "Code", usage: 85, color: "from-teal-500 to-cyan-500" },
    { name: "ChatGPT", category: "AI", usage: 95, color: "from-green-500 to-teal-500" },
    { name: "Midjourney", category: "AI", usage: 90, color: "from-purple-500 to-pink-500" },
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-100 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-200 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-teal-600" />
            <span className="text-sm font-bold text-teal-700">Expertise Overview</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight block text-black mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Mastering the art of digital creation through design, code, and innovation
          </p>
        </div>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {skills.map((skill, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${skill.gradient} rounded-2xl blur opacity-0 group-hover:opacity-35 transition duration-500`}></div>
              
              {/* Card Content */}
              <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300">

                {/* Icon */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center mb-4 shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                  <skill.icon className="h-6 sm:h-7 w-6 sm:w-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-black text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-teal-600 group-hover:to-cyan-600 transition-all">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-sm text-gray-600 mb-4 line-clamp-2">
                  {skill.description}
                </p>

                {/* Stats Row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-teal-600" />
                    <span className="text-xs xs:text-sm text-gray-700 font-semibold">{skill.levelText}</span>
                  </div>
                  <span className="text-lg font-black text-teal-600">{skill.level}%</span>
                </div>

                {/* Progress Bar */}
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.gradient} rounded-full transition-all duration-1000`}
                    style={{ width: hoveredSkill === index ? `${skill.level}%` : '0%' }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tools Marquee Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-800 mb-4">
              Tech Stack
            </h3>
            <p className="text-gray-600">
              Tools I use to bring ideas to life
            </p>
          </div>

          {/* Scrolling Tool Pills */}
          <div className="relative overflow-x-hidden py-8">
            <div className="flex gap-4 min-w-max animate-scroll">
              {[...tools, ...tools].map((tool, index) => (
                <div
                  key={index}
                  className="group flex-shrink-0 relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${tool.color} rounded-2xl blur opacity-0 group-hover:opacity-35 transition`}></div>
                  <div className="relative bg-white border-2 border-gray-200 rounded-2xl px-6 sm:px-8 py-4 sm:py-5 hover:border-teal-100 hover:shadow-lg transition-all">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className={`w-12 h-12 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center shadow-md`}>
                        <Zap className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-black text-gray-800 text-base sm:text-lg">{tool.name}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-xs sm:text-xs text-gray-600 font-semibold">{tool.category}</span>
                          <span className="text-xs sm:text-xs text-teal-600 font-bold">{tool.usage}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .blur {
            filter: blur(15px);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
