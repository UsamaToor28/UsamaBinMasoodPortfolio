import {
  ArrowDown,
  Send,
  Layers,
  Figma,
  Palette,
  MonitorSmartphone,
  Lightbulb,
  PenTool,
  Puzzle,
  Wand2,
} from "lucide-react";

const Button = ({ children, onClick, variant = "primary" }) => {
  const baseClasses =
    "relative inline-flex items-center gap-2 justify-center px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-lg overflow-hidden";
  const variants = {
    primary:
      "bg-gradient-to-r from-teal-500 to-teal-700 text-white shadow-lg hover:shadow-teal-500/40 hover:-translate-y-0.5",
    secondary:
      "border-2 border-teal-600 text-teal-700 bg-white/60 backdrop-blur-md hover:bg-teal-50 hover:text-teal-800 hover:-translate-y-0.5",
  };
  return (
    <button onClick={onClick} className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </button>
  );
};

const Hero = () => {
  const scrollToProjects = () =>
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () =>
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden 
      bg-gradient-to-b from-zinc-50 via-white to-zinc-100 text-zinc-900 px-6 font-sans"
    >
      {/* Background Motion Blobs */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-teal-200/25 blur-[120px] rounded-full animate-pulse-slow"></div>
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-gradient-to-br from-teal-200/40 to-teal-100/20 blur-[100px] rounded-full animate-float opacity-80"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-teal-100/40 to-white blur-[100px] rounded-full opacity-60"></div>

      {/* LEFT ICONS (top → bottom) */}
      <div className="absolute top-28 left-12 hidden lg:flex flex-col gap-8 animate-fade-in-slow">
        <div className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-md border border-teal-100 rotate-2 hover:scale-105 transition">
          <Palette className="text-rose-500 w-7 h-7" />
        </div>
        <div className="p-4 bg-gradient-to-br from-teal-500/10 to-white/40 backdrop-blur-md rounded-2xl shadow-md border border-teal-100 -rotate-3 hover:scale-105 transition">
          <PenTool className="text-teal-600 w-7 h-7" />
        </div>
        <div className="p-4 bg-gradient-to-br from-yellow-100/70 to-white/50 backdrop-blur-md rounded-2xl shadow-md border border-yellow-100 rotate-6 hover:scale-105 transition">
          <Lightbulb className="text-yellow-500 w-7 h-7" />
        </div>
      </div>

      {/* RIGHT ICONS (bottom → top) */}
      <div className="absolute bottom-16 right-12 hidden lg:flex flex-col gap-8 animate-fade-in-slow delay-200">
        <div className="p-4 bg-gradient-to-br from-indigo-100/60 to-white/60 backdrop-blur-md rounded-2xl shadow-md border border-indigo-100 -rotate-6 hover:scale-105 transition">
          <Puzzle className="text-indigo-500 w-7 h-7" />
        </div>
        <div className="p-4 bg-gradient-to-br from-emerald-100/60 to-white/60 backdrop-blur-md rounded-2xl shadow-md border border-emerald-100 rotate-3 hover:scale-105 transition">
          <Wand2 className="text-emerald-600 w-7 h-7" />
        </div>
        <div className="p-4 bg-white/80 from-teal-100/70 to-white/60 backdrop-blur-md rounded-2xl shadow-md border border-teal-100 -rotate-2 hover:scale-105 transition">
          <MonitorSmartphone className="text-rose-500 w-7 h-7" />
        </div>
      </div>

      {/* Decorative angled lines */}
      <div className="absolute top-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-teal-500/30 to-transparent rotate-2"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-[2px] bg-gradient-to-l from-teal-500/30 to-transparent -rotate-2"></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 text-center space-y-10 animate-fade-in-down max-w-4xl">
        <h3 className="text-xl md:text-2xl font-light tracking-wide text-zinc-600 uppercase">
          Hello, I’m{" "}
          <span className="font-semibold text-zinc-900">Usama Bin Masood</span>
        </h3>

        <h1 className="text-6xl md:text-8xl font-extrabold leading-tight tracking-tight text-zinc-900">
          UI/UX{" "}
          <span className="bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">
            Designer
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          Crafting meaningful and{" "}
          <span className="font-semibold text-teal-700">human-centered</span>{" "}
          digital experiences, combining creativity, psychology, and
          technology to make every design{" "}
          <span className="font-semibold text-teal-700">purposeful</span>.
        </p>

        <div className="flex flex-wrap justify-center gap-6 pt-4">
          <Button onClick={scrollToProjects} variant="primary">
            <Layers className="w-5 h-5" /> View My Work
          </Button>
          <Button onClick={scrollToContact} variant="secondary">
            <Send className="w-5 h-5" /> Let’s Collaborate
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        onClick={scrollToProjects}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer text-zinc-500 hover:text-teal-600 transition-all animate-bounce"
      >
        <ArrowDown className="h-7 w-7" />
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out forwards;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(25px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 10s ease-in-out infinite;
        }
        @keyframes fade-in-slow {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-slow {
          animation: fade-in-slow 1.8s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;


// import React from 'react';
// // Import the common button
// import RoundedButton from '../common/RoundedButton';

// // --- STYLING ---
// // As requested, all styles for the Hero component are defined here.
// const heroStyles: { [key: string]: React.CSSProperties } = {
//   heroContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '90vh', // Make it take up most of the viewport height
//     width: '100%',
//     backgroundColor: '#1C1D20', // A dark theme background
//     color: '#FFFFFF',
//     textAlign: 'center',
//     padding: '0 2rem',
//     boxSizing: 'border-box',
//   },
//   mainHeading: {
//     fontSize: 'clamp(3rem, 10vw, 6rem)', // Responsive font size
//     fontWeight: 700,
//     margin: '0 0 1rem 0',
//     lineHeight: 1.1,
//   },
//   subHeading: {
//     fontSize: 'clamp(1rem, 4vw, 1.5rem)', // Responsive font size
//     color: '#a0a0a0', // A lighter grey for the subtitle
//     maxWidth: '600px',
//     margin: '0 0 2.5rem 0',
//     lineHeight: 1.5,
//   },
//   buttonText: {
//     // This style is for the <p> tag we pass INTO the button
//     margin: 0,
//     fontSize: '1rem',
//     fontWeight: 500,
//     color: '#000000', // <-- Base text color (will be overridden by button on hover)
//   }
// };
// // --- END OF STYLING ---


// export default function Hero() {
//   return (
//     <div style={heroStyles.heroContainer}>
      
//       <h1 style={heroStyles.mainHeading}>
//         Creative Developer
//       </h1>
      
//       <p style={heroStyles.subHeading}>
//         Building modern, responsive, and animated web
//         experiences from concept to deployment.
//       </p>

//       {/* This <p> tag is the 'child' that RoundedButton will clone and style.
//         The 'color' from heroStyles.buttonText will be used as the default,
//         and the button will change it to 'white' on hover.
//       */}
//       <RoundedButton backgroundColor="#334BD3">
//         <p style={heroStyles.buttonText}>
//           View My Work
//         </p>
//       </RoundedButton>

//     </div>
//   );
// }