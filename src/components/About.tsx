import { 
  Circle, 
  ArrowRight, 
  Sparkles, 
  Heart, 
  Code, 
  Palette, 
  Users2, 
  CheckCircle2,
  // --- New icons added ---
  LayoutGrid, 
  Award,
  Wand2, 
  Component, 
  Brain 
} from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative py-32 px-4 bg-gradient-to-b from-white via-teal-50/30 to-white overflow-hidden">
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Hero Section - Magazine Style */}
        <div className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-12 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500"></div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em]">About Me</span>
              </div>
              
              <h1 className="text-7xl md:text-8xl font-black text-gray-900 mb-6 leading-[0.9]">
                Design
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">Meets</span>
                <span className="block">Purpose</span>
              </h1>
              
              <div className="space-y-6 mb-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Hi, I'm <span className="font-bold text-gray-900">Usama</span>, a designer who transforms 
                  complex challenges into elegant, user-centered solutions.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  With 4+ years of experience in <span className="font-bold text-gray-900">Graphics Designing</span> and 5+ successful projects of <span className="font-bold text-gray-900">UI/UX</span>, I specialize in crafting 
                  digital experiences that don't just look beautiful, they drive real business results.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-200 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span className="text-sm font-semibold text-teal-700">Available Now</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-cyan-50 border border-cyan-200 rounded-full">
                  <Sparkles className="w-4 h-4 text-cyan-600" />
                  <span className="text-sm font-semibold text-cyan-700">Fast Turnaround</span>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -top-6 -left-6 w-full h-full border-4 border-teal-200 rounded-3xl"></div>
                <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-teal-100 to-cyan-100 rounded-3xl"></div>
                
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100 shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                  <img 
                    src="./src/assets/Profile.png" 
                    alt="Usama - Designer" 
                    className="w-full h-full object-cover object-bottom"
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-2xl p-4 transform hover:rotate-3 transition-transform duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white fill-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-gray-900">5+</div>
                      <div className="text-xs text-gray-600 font-semibold">Projects Done</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Drives Me Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            {/* <span className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] mb-4 block">Core Values</span> */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-200 rounded-full mb-6">
              <Users2 className="h-4 w-4 text-teal-600" />
              <span className="text-sm font-bold text-teal-700">Core Values</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">What Drives Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond pixels and wireframes, these principles guide every decision I make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-teal-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">User Empathy</h3>
              <p className="text-gray-600 leading-relaxed">
                I start every project by deeply understanding the people who'll use the product. 
                Their needs, frustrations, and goals shape every design decision.
              </p>
            </div>

            <div className="group bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-cyan-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visual Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Beautiful design isn't superficial, it's strategic. Every color, typeface, and 
                spacing choice serves both aesthetic and functional purposes.
              </p>
            </div>

            <div className="group bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-teal-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical Fluency</h3>
              <p className="text-gray-600 leading-relaxed">
                I design with development in mind, ensuring seamless handoffs and feasible 
                implementations that maintain design integrity.
              </p>
            </div>
          </div>
        </div>



{/* ==================================================================================================== */}

        {/* Services Grid - Interactive Accordion Variant */}
        <div className="mb-32">
          <div className="text-center mb-16">
            {/* <span className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] mb-4 block">Capabilities</span> */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-200 rounded-full mb-6">
              <Wand2 className="h-4 w-4 text-teal-600" />
              <span className="text-sm font-bold text-teal-700">Capabilities</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">How I Can Help</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A dynamic set of services to build and grow your digital product.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Service 1: UI/UX Design */}
            <div className="group rounded-xl border-2 border-gray-200 hover:border-teal-400 transition-all duration-300 overflow-hidden bg-white shadow-sm">
              {/* Always visible header */}
              <div className="flex items-center justify-between p-5 cursor-pointer">
                <div className="flex items-center gap-4">
                  <LayoutGrid className="w-8 h-8 text-teal-500" />
                  <h3 className="text-xl font-bold text-gray-900">UI/UX Design</h3>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-teal-500 group-hover:rotate-90 transition-transform duration-300" />
              </div>
              {/* Content to reveal on hover */}
              <div className="max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <div className="px-5 pb-5 border-t border-gray-200">
                  <p className="text-gray-700 text-sm leading-relaxed pt-4 mb-4">
                    Intuitive and delightful interfaces for web & mobile apps.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2 text-gray-800">
                      <CheckCircle2 className="w-4 h-4 text-teal-500" />
                      User Research & Testing
                    </li>
                    <li className="flex items-center gap-2 text-gray-800">
                      <CheckCircle2 className="w-4 h-4 text-teal-500" />
                      Wireframing & Prototyping
                    </li>
                    <li className="flex items-center gap-2 text-gray-800">
                      <CheckCircle2 className="w-4 h-4 text-teal-500" />
                      Interface Design
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 2: Brand Identity */}
            <div className="group rounded-xl border-2 border-gray-200 hover:border-pink-400 transition-all duration-300 overflow-hidden bg-white shadow-sm">
              {/* Always visible header */}
              <div className="flex items-center justify-between p-5 cursor-pointer">
                <div className="flex items-center gap-4">
                  <Award className="w-8 h-8 text-pink-500" />
                  <h3 className="text-xl font-bold text-gray-900">Brand Identity</h3>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-pink-500 group-hover:rotate-90 transition-transform duration-300" />
              </div>
              {/* Content to reveal on hover */}
              <div className="max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <div className="px-5 pb-5 border-t border-gray-200">
                  <p className="text-gray-700 text-sm leading-relaxed pt-4 mb-4">
                    Memorable brand systems that resonate with your audience.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2 text-gray-800">
                      <CheckCircle2 className="w-4 h-4 text-pink-500" />
                      Logo & Visual Identity
                    </li>
                    <li className="flex items-center gap-2 text-gray-800">
                      <CheckCircle2 className="w-4 h-4 text-pink-500" />
                      Brand Guidelines
                    </li>
                    <li className="flex items-center gap-2 text-gray-800">
                      <CheckCircle2 className="w-4 h-4 text-pink-500" />
                      Marketing Collateral
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 3: Product Design */}
            <div className="group rounded-xl border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 overflow-hidden bg-white shadow-sm">
              {/* Always visible header */}
              <div className="flex items-center justify-between p-5 cursor-pointer">
                <div className="flex items-center gap-4">
                  <Component className="w-8 h-8 text-blue-500" />
                  <h3 className="text-xl font-bold text-gray-900">Product Design</h3>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:rotate-90 transition-transform duration-300" />
              </div>
              {/* Content to reveal on hover */}
              <div className="max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <div className="px-5 pb-5 border-t border-gray-200">
                  <p className="text-gray-700 text-sm leading-relaxed pt-4 mb-4">
                    End-to-end product development from concept to launch.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2 text-gray-800">
                      <CheckCircle2 className="w-4 h-4 text-blue-500" />
                      Product Strategy
                    </li>
                    <li className="flex items-center gap-2 text-gray-800">
                      <CheckCircle2 className="w-4 h-4 text-blue-500" />
                      Feature Development
                    </li>
                    <li className="flex items-center gap-2 text-gray-800">
                      <CheckCircle2 className="w-4 h-4 text-blue-500" />
                      Design Systems
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 4: Consultation */}
            <div className="group rounded-xl border-2 border-gray-200 hover:border-yellow-400 transition-all duration-300 overflow-hidden bg-white shadow-sm">
              {/* Always visible header */}
              <div className="flex items-center justify-between p-5 cursor-pointer">
                <div className="flex items-center gap-4">
                  <Brain className="w-8 h-8 text-yellow-500" />
                  <h3 className="text-xl font-bold text-gray-900">Consultation</h3>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-yellow-500 group-hover:rotate-90 transition-transform duration-300" />
              </div>
              {/* Content to reveal on hover */}
              <div className="max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <div className="px-5 pb-5 border-t border-gray-200">
                  <p className="text-gray-700 text-sm leading-relaxed pt-4 mb-4">
                    Strategic design guidance and team mentorship for growth.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2 text-gray-800">
                      <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                      Design Audits
                    </li>
                    <li className="flex items-center gap-2 text-gray-800">
                      <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                      Team Mentorship
                    </li>
                    <li className="flex items-center gap-2 text-gray-800">
                      <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                      Process Optimization
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
        </div>



{/* ==============================================32, 16====================================================== */}

        {/* Process Timeline - Horizontal Flow */}
        <div className="mb-6">
          <div className="text-center mb-16">
            {/* <span className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] mb-4 block">Methodology</span> */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-200 rounded-full mb-6">
              <LayoutGrid className="h-4 w-4 text-teal-600" />
              <span className="text-sm font-bold text-teal-700">Methodology</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">My Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A battle-tested approach refined through 50+ successful projects
            </p>
          </div>

          <div className="relative">
            {/* Flowing path */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="bg-white rounded-2xl p-8 border-2 border-teal-200 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-black text-white">01</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">Research</h4>
                <p className="text-sm text-gray-600 text-center leading-relaxed">
                  Diving deep into user needs, market trends, and competitive landscape
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-cyan-200 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-black text-white">02</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">Ideate</h4>
                <p className="text-sm text-gray-600 text-center leading-relaxed">
                  Exploring creative solutions through sketches, wireframes, and rapid prototyping
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-teal-200 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-black text-white">03</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">Design</h4>
                <p className="text-sm text-gray-600 text-center leading-relaxed">
                  Crafting pixel-perfect interfaces with attention to every interaction detail
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-cyan-200 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-black text-white">04</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">Refine</h4>
                <p className="text-sm text-gray-600 text-center leading-relaxed">
                  Testing with users and iterating based on feedback and data insights
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;





// import { Quote, Sparkles, Briefcase, Heart, Zap } from "lucide-react";
// import { Card } from "@/components/ui/card";

// const About = () => {
//   return (
//     <section id="about" className="relative py-32 px-4 bg-gradient-to-br from-teal-50 via-white to-teal-100 overflow-hidden">
//       {/* Organic Blob Shapes */}
//       <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-30">
//         <svg viewBox="0 0 600 600" className="w-full h-full">
//           <defs>
//             <linearGradient id="blob1" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.3" />
//               <stop offset="100%" stopColor="#0d9488" stopOpacity="0.1" />
//             </linearGradient>
//           </defs>
//           <path d="M400,300 Q450,200 500,250 T550,350 Q520,420 450,400 T350,380 Q300,350 350,300 T400,300 Z" 
//                 fill="url(#blob1)" className="animate-blob" />
//         </svg>
//       </div>

//       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-30">
//         <svg viewBox="0 0 500 500" className="w-full h-full">
//           <defs>
//             <linearGradient id="blob2" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.2" />
//               <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.1" />
//             </linearGradient>
//           </defs>
//           <path d="M250,150 Q350,180 380,250 T350,350 Q300,400 220,380 T150,300 Q130,220 200,180 T250,150 Z" 
//                 fill="url(#blob2)" className="animate-blob-reverse" />
//         </svg>
//       </div>

//       <div className="max-w-6xl mx-auto relative z-10">
//         {/* Creative Header with Split Design */}
//         <div className="mb-24 relative">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
//             <div className="flex-1">
//               <div className="inline-flex items-center gap-3 mb-4 px-5 py-2 bg-white rounded-full shadow-lg">
//                 <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></div>
//                 <span className="text-sm font-bold text-gray-700">UI/UX Designer</span>
//                 <div className="w-px h-4 bg-gray-300"></div>
//                 <span className="text-sm text-gray-500">Creative Technologist</span>
//               </div>
//               <h2 className="text-5xl md:text-7xl font-black leading-tight">
//                 <span className="block text-black">Where Ideas</span>
//                 <span className="block bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
//                   Meet Execution
//                 </span>
//               </h2>
//             </div>
            
//             <div className="relative group cursor-pointer">
//               <div className="absolute inset-0 bg-teal-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse"></div>
//               <div className="relative w-32 h-32 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
//                 <Sparkles className="w-16 h-16 text-white animate-spin-slow" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Main Content - Magazine Style Layout */}
//         <div className="space-y-8">
//           {/* Story Section with Image Placeholder */}
//           <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
//             {/* Left Column - Image/Visual */}
//             <div className="lg:col-span-2">
//               <Card className="relative h-full min-h-[400px] bg-gradient-to-br from-black via-gray-900 to-teal-900 rounded-3xl overflow-hidden group cursor-pointer border-0 shadow-2xl">
//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(20,184,166,0.3),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
//                 <div className="relative h-full flex flex-col justify-between p-8">
//                   <div className="space-y-4">
//                     <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/20 border border-teal-500/30 rounded-full">
//                       <Quote className="w-4 h-4 text-teal-400" />
//                       <span className="text-xs text-teal-400 font-semibold">Philosophy</span>
//                     </div>
                    
//                     <blockquote className="text-3xl font-bold text-white leading-tight">
//                       "Design is intelligence made visible"
//                     </blockquote>
//                   </div>

//                   <div className="space-y-3">
//                     <p className="text-gray-300 text-sm leading-relaxed">
//                       Every design decision should have a purpose, creating experiences that are both beautiful and meaningful.
//                     </p>
                    
//                     <div className="flex items-center gap-3 pt-4 border-t border-white/10">
//                       <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
//                         <Heart className="w-5 h-5 text-white" />
//                       </div>
//                       <div>
//                         <div className="text-white font-semibold text-sm">Design Philosophy</div>
//                         <div className="text-gray-400 text-xs">Purpose-driven creativity</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Animated Corner Lines */}
//                 <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-teal-500 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-24 group-hover:h-24"></div>
//                 <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-teal-500 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-24 group-hover:h-24"></div>
//               </Card>
//             </div>

//             {/* Right Column - Content */}
//             <div className="lg:col-span-3 space-y-6">
//               <Card className="p-8 bg-white rounded-3xl shadow-xl border-0 hover:shadow-2xl transition-all duration-500">
//                 <div className="flex items-start gap-4 mb-6">
//                   <div className="w-12 h-12 bg-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0">
//                     <span className="text-white font-black text-xl">01</span>
//                   </div>
//                   <div>
//                     <h3 className="text-2xl font-bold text-black mb-2">The Creative Journey</h3>
//                     <div className="w-16 h-1 bg-teal-500 rounded-full"></div>
//                   </div>
//                 </div>
                
//                 <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
//                   <p>
//                     I'm a passionate designer who blends <span className="font-bold text-teal-600">creativity with technology</span>. From branding to UI/UX, I design solutions that are both beautiful and functional.
//                   </p>
//                   <p>
//                     My journey began with traditional design principles, but I've embraced modern tools and AI to push creative boundaries. I believe in creating experiences that not only look stunning but also <span className="font-bold text-teal-600">solve real problems</span> for users.
//                   </p>
//                 </div>
//               </Card>

//               <Card className="p-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl shadow-xl border-0 text-white hover:scale-105 transition-transform duration-500">
//                 <div className="flex items-start gap-4 mb-6">
//                   <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
//                     <span className="text-white font-black text-xl">02</span>
//                   </div>
//                   <div>
//                     <h3 className="text-2xl font-bold mb-2">Beyond the Screen</h3>
//                     <div className="w-16 h-1 bg-white/50 rounded-full"></div>
//                   </div>
//                 </div>
                
//                 <p className="text-white/90 text-lg leading-relaxed">
//                   When I'm not designing, you'll find me exploring new technologies, experimenting with AI tools, or seeking inspiration from the world around me. Continuous learning fuels my creativity.
//                 </p>
//               </Card>
//             </div>
//           </div>

//           {/* Stats Section - Card Style */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <Card className="relative p-8 bg-white rounded-3xl border-0 shadow-xl overflow-hidden group cursor-pointer hover:-translate-y-2 transition-all duration-500">
//               <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              
//               <div className="relative z-10">
//                 <div className="w-14 h-14 bg-teal-500 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-500">
//                   <Briefcase className="w-7 h-7 text-white" />
//                 </div>
//                 <div className="text-5xl font-black text-black mb-2">50+</div>
//                 <div className="text-gray-600 font-semibold mb-3">Projects Completed</div>
//                 <p className="text-sm text-gray-500">Delivering excellence across diverse industries and platforms</p>
                
//                 <div className="mt-6 flex items-center gap-2 text-teal-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
//                   <span>Explore work</span>
//                   <Zap className="w-4 h-4" />
//                 </div>
//               </div>
//             </Card>

//             <Card className="relative p-8 bg-white rounded-3xl border-0 shadow-xl overflow-hidden group cursor-pointer hover:-translate-y-2 transition-all duration-500" style={{transitionDelay: '50ms'}}>
//               <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              
//               <div className="relative z-10">
//                 <div className="w-14 h-14 bg-teal-500 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-500">
//                   <Sparkles className="w-7 h-7 text-white" />
//                 </div>
//                 <div className="text-5xl font-black text-black mb-2">3+</div>
//                 <div className="text-gray-600 font-semibold mb-3">Years of Experience</div>
//                 <p className="text-sm text-gray-500">Constantly evolving with emerging design trends and technologies</p>
                
//                 <div className="mt-6 flex items-center gap-2 text-teal-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
//                   <span>My journey</span>
//                   <Zap className="w-4 h-4" />
//                 </div>
//               </div>
//             </Card>

//             <Card className="relative p-8 bg-white rounded-3xl border-0 shadow-xl overflow-hidden group cursor-pointer hover:-translate-y-2 transition-all duration-500" style={{transitionDelay: '100ms'}}>
//               <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              
//               <div className="relative z-10">
//                 <div className="w-14 h-14 bg-teal-500 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-500">
//                   <Heart className="w-7 h-7 text-white" />
//                 </div>
//                 <div className="text-5xl font-black text-black mb-2">25+</div>
//                 <div className="text-gray-600 font-semibold mb-3">Happy Clients</div>
//                 <p className="text-sm text-gray-500">Building lasting relationships through exceptional design solutions</p>
                
//                 <div className="mt-6 flex items-center gap-2 text-teal-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
//                   <span>Testimonials</span>
//                   <Zap className="w-4 h-4" />
//                 </div>
//               </div>
//             </Card>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes blob {
//           0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
//           33% { transform: translate(30px, -20px) scale(1.1) rotate(5deg); }
//           66% { transform: translate(-20px, 20px) scale(0.9) rotate(-5deg); }
//         }
        
//         @keyframes blob-reverse {
//           0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
//           33% { transform: translate(-25px, 25px) scale(1.05) rotate(-5deg); }
//           66% { transform: translate(25px, -15px) scale(0.95) rotate(5deg); }
//         }

//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }

//         .animate-blob {
//           animation: blob 15s ease-in-out infinite;
//         }

//         .animate-blob-reverse {
//           animation: blob-reverse 18s ease-in-out infinite;
//         }

//         .animate-spin-slow {
//           animation: spin-slow 8s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default About;