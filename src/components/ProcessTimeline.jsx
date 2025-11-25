// src/components/ProcessTimeline.jsx (or wherever you prefer)

const processSteps = [
  {
    step: 1,
    title: "Research & Discovery",
    description: "Deep dive into user needs and business context",
    color: "teal", // Used for the circle background and border start
  },
  {
    step: 2,
    title: "Ideation & Prototyping",
    description: "Rapid iteration to find the right solution",
    color: "teal",
  },
  {
    step: 3,
    title: "Design & Refinement",
    description: "Polishing every detail to perfection",
    color: "cyan", // Changes color for visual variety
  },
  {
    step: 4,
    title: "Testing & Iteration",
    description: "Validating with real users, refining based on feedback",
    color: "cyan",
  },
];

const ProcessTimeline = () => {
  return (
    <div>
      <h3 className="text-3xl font-bold text-gray-900 mb-8">How I work</h3>
      
      {/* Timeline Container with Gradient Line */}
      <div className="space-y-6 relative before:absolute before:left-4 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-teal-500 before:to-cyan-500">
        {processSteps.map((item) => (
          <div key={item.step} className="flex gap-6 items-start relative">
            
            {/* Step Circle */}
            <div className={`w-8 h-8 bg-${item.color}-500 rounded-full flex items-center justify-center flex-shrink-0 relative z-10`}>
              <span className="text-white text-xs font-bold">{item.step}</span>
            </div>
            
            {/* Step Content */}
            <div className="pt-1">
              <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline;