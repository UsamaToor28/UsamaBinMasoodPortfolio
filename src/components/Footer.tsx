import { useState } from "react";
import { 
  Heart, 
  Linkedin, 
  Github, 
  Send, 
  ArrowUp, 
  CheckCircle2, 
  X,
  Loader2 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // State Management
  const [email, setEmail] = useState(""); // Store user input
  const [isSending, setIsSending] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { toast } = useToast();

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    setEmail(""); // Clear input after success
  };

  const handleSayHello = async (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !email.includes("@")) {
      toast({
        title: "Email required",
        description: "Please enter a valid email so I can reply.",
        variant: "destructive",
      });
      return;
    }

    if (isSending) return;

    try {
      setIsSending(true);

      const response = await fetch("https://formsubmit.co/ajax/usamatoor28@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "Footer: New Quick Hello!", 
          _captcha: "false",
          // sending the 'email' field allows you to hit 'Reply' in your email client
          email: email, 
          Message: "A visitor said Hello from the footer.",
          Source: "Footer Section"
        }),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setShowSuccessModal(true);

    } catch (err) {
      toast({
        title: "Problem sending",
        description: "Please email me directly at usamatoor28@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <footer
      id="footer"
      className="py-16 px-4 bg-gray-950 text-gray-400 relative border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <a href="#home" onClick={(e) => scrollTo(e, "#home")} className="inline-block">
              <span className="text-4xl font-black bg-gradient-to-r from-teal-500 to-cyan-400 bg-clip-text text-transparent">
                UT
              </span>
            </a>
            <p className="text-sm max-w-xs">
              A creative designer and developer passionate about building
              beautiful and functional digital experiences.
            </p>
          </div>

          {/* Column 2: Nav */}
          <div className="space-y-4 lg:pl-16">
            <h3 className="text-lg font-semibold text-white">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#home" onClick={(e) => scrollTo(e, "#home")} className="hover:text-teal-400 transition-colors">Home</a></li>
              <li><a href="#skills" onClick={(e) => scrollTo(e, "#skills")} className="hover:text-teal-400 transition-colors">Skills</a></li>
              <li><a href="#projects" onClick={(e) => scrollTo(e, "#projects")} className="hover:text-teal-400 transition-colors">Projects</a></li>
              <li><a href="#contact" onClick={(e) => scrollTo(e, "#contact")} className="hover:text-teal-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Find me on</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.linkedin.com/in/usama-toor-01178724b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
                  <Linkedin className="h-4 w-4 text-gray-500 group-hover:text-teal-500 transition-colors" />
                  <span className="group-hover:text-teal-500 transition-colors">LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/UsamaToor28" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
                  <Github className="h-4 w-4 text-gray-500 group-hover:text-teal-500 transition-colors" />
                  <span className="group-hover:text-teal-500 transition-colors">GitHub</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Get in Touch (UPDATED) */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Say Hello</h3>
            <p className="text-sm">Drop your email to connect quickly.</p>
            
            {/* INPUT GROUP */}
            <form onSubmit={handleSayHello} className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all text-sm"
                required
              />
              <button
                type="submit"
                disabled={isSending}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg group transition-all duration-300 hover:bg-gradient-to-r hover:from-teal-600 hover:to-cyan-600 disabled:opacity-70 disabled:cursor-not-allowed text-sm font-medium"
              >
                {isSending ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    <Send className="h-4 w-4 transform transition-transform duration-300 group-hover:-translate-y-px group-hover:translate-x-px" />
                    Send Hi
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 flex items-center gap-1.5">
            © {currentYear} <span className="font-semibold text-gray-300">Usama Toor</span> | — All Rights Reserved 
          </p>
          <a href="#home" onClick={(e) => scrollTo(e, "#home")} className="group flex items-center gap-2 text-sm text-teal-500 font-medium">
            Back to Top <ArrowUp className="h-4 w-4 transform transition-transform group-hover:-translate-y-1" />
          </a>
        </div>
      </div>

      {/* --- MINIMAL SUCCESS MODAL --- */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px] animate-in fade-in duration-200">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full shadow-2xl transform transition-all scale-100 animate-in zoom-in-95 duration-200 relative border border-teal-100">
            
            {/* Minimal Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center shrink-0">
                <CheckCircle2 className="h-5 w-5 text-teal-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                Message Sent
              </h3>
              <button 
                onClick={closeSuccessModal}
                className="ml-auto text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Minimal Text */}
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Thanks! I've received your details and will be in touch soon.
            </p>

            {/* Minimal Button */}
            <button 
              onClick={closeSuccessModal}
              className="w-full py-2.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;