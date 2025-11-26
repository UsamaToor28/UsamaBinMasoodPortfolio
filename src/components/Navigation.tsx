import { useState, useEffect } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, Variants, Transition } from "framer-motion";

// --- Type definition for our nav items ---
interface NavItem {
  name: string;
  href: string;
  id: string; // ID to track active/hovered state
}

// --- Animated Hamburger/Cross Icon ---
const AnimatedMenuIcon = ({ isOpen }: { isOpen: boolean }) => {
  const lineVariants: Variants = {
    topOpen: { rotate: 45, y: 7 },
    topClosed: { rotate: 0, y: 0 },
    middleOpen: { opacity: 0 },
    middleClosed: { opacity: 1 },
    bottomOpen: { rotate: -45, y: -7 },
    bottomClosed: { rotate: 0, y: 0 },
  };

  const transition: Transition = { type: "spring", stiffness: 400, damping: 20 };

  return (
    <div className="w-6 h-6 relative">
      <motion.div
        className="absolute h-0.5 w-6 bg-white"
        style={{ top: 5 }}
        variants={lineVariants}
        initial="topClosed"
        animate={isOpen ? "topOpen" : "topClosed"}
        transition={transition}
      />
      <motion.div
        className="absolute h-0.5 w-6 bg-white"
        style={{ top: 11 }}
        variants={lineVariants}
        initial="middleClosed"
        animate={isOpen ? "middleOpen" : "middleClosed"}
        transition={transition}
      />
      <motion.div
        className="absolute h-0.5 w-6 bg-white"
        style={{ top: 17 }}
        variants={lineVariants}
        initial="bottomClosed"
        animate={isOpen ? "bottomOpen" : "bottomClosed"}
        transition={transition}
      />
    </div>
  );
};

// --- TS ERROR FIX: Define the transition object with a type ---
const pillTransition: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30
};

// --- Main Navigation Component ---
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [showMainNavBar, setShowMainNavBar] = useState<boolean>(true);
  const [scrollbarWidth, setScrollbarWidth] = useState<number>(0);

  // --- Navigation Items ---
  const navItems: NavItem[] = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Skills", href: "#skills", id: "skills" },
  ];
  
  const allNavItems: NavItem[] = [
    ...navItems,
    { name: "Contact", href: "#contact", id: "contact" }
  ];

  // --- Scroll Handlers ---
  useEffect(() => {
    // 1. Handle Active Section Highlighting & Nav Visibility
    const handleScroll = () => {
      let currentSection = "";
      let homeSectionBottom = 0;
      
      const homeSection = document.querySelector("#home") as HTMLElement;
      if (homeSection) {
        homeSectionBottom = homeSection.offsetTop + homeSection.offsetHeight;
      }

      if (window.scrollY < homeSectionBottom - 100) {
        setShowMainNavBar(true);
      } else {
        setShowMainNavBar(false);
      }
      
      for (let i = allNavItems.length - 1; i >= 0; i--) {
        const item = allNavItems[i];
        const section = document.querySelector(item.href) as HTMLElement;
        if (section) {
          if (section.offsetTop <= window.scrollY + 150) {
            currentSection = item.id;
            break; 
          }
        }
      }

      if (currentSection === "") currentSection = "home";
      setActiveSection(currentSection);
    };

    // 2. Prevent Layout Shift (Scrollbar Glitch)
    if (isMenuOpen) {
      const currentScrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      setScrollbarWidth(currentScrollbarWidth); 
      
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${currentScrollbarWidth}px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, [isMenuOpen]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(href.substring(1));
    setIsMenuOpen(false);
  };

  // --- Animation Variants ---
  // Simple fade/slide for the top elements
  const navContentVariants: Variants = {
    hidden: { y: -20, opacity: 0, transition: { duration: 0.2, ease: "easeOut" } },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3, ease: "easeIn" } },
  };

  const drawerIconVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5, transition: { duration: 0.2, ease: "easeOut" } },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeIn" } },
  };

  const drawerMenuVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: -10, transition: { duration: 0.2, ease: "easeOut" } },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 25, staggerChildren: 0.05 } },
  };

  const drawerLinkVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      {/* --- 1. The Main "Home" Navigation Bar --- */}
      <nav
        className="fixed top-0 w-full z-50 pointer-events-none"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between md:justify-between items-center h-20">
            
            <AnimatePresence>
              {showMainNavBar && (
                <>
                  {/* Logo - Hidden on mobile */}
                  <motion.button
                    variants={navContentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={() => scrollToSection("#home")}
                    className="flex-shrink-0 pointer-events-auto hidden md:block"
                  >
                    <span className="text-3xl font-black bg-gradient-to-r from-teal-500 to-cyan-400 bg-clip-text text-transparent">
                      UT
                    </span>
                  </motion.button>

                  {/* Desktop & Mobile Navigation - Centered on mobile */}
                  <motion.ul
                    variants={navContentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="flex items-center space-x-2 bg-gray-900 p-1.5 rounded-full border border-gray-700 pointer-events-auto md:mx-0 mx-auto"
                    onMouseLeave={() => setHoveredSection(null)}
                  >
                    {navItems.map((item) => {
                      const isActive = activeSection === item.id;
                      const isHovered = hoveredSection === item.id;
                      return (
                        <motion.li
                          key={item.id}
                          className="relative"
                          onHoverStart={() => setHoveredSection(item.id)}
                        >
                          <button
                            onClick={() => scrollToSection(item.href)}
                            className={`relative z-10 px-3 sm:px-5 py-2 sm:py-2.5 font-semibold text-xs sm:text-sm transition-colors duration-300 ${
                              isActive || isHovered
                                ? "text-teal-400"
                                : "text-gray-300 hover:text-white"
                            }`}
                          >
                            {item.name}
                          </button>
                          {/* SIMPLE Active Pill (No layoutId) */}
                          {isActive && (
                            <motion.div
                              className="absolute inset-0 bg-gray-800 rounded-full -z-10"
                            />
                          )}
                          {/* Hover Pill (No layoutId) */}
                          {isHovered && !isActive && (
                            <motion.div
                              className="absolute inset-0 bg-gray-800 rounded-full -z-10"
                            />
                            
                          )}
                        </motion.li>
                      );
                    })}
                  </motion.ul>

                  {/* Desktop CTA */}
                  <motion.div
                    variants={navContentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="hidden md:flex pointer-events-auto"
                  >
                    <Button
                      onClick={() => scrollToSection("#contact")}
                      className="font-bold text-white bg-gradient-to-r from-teal-600 to-cyan-600 hover:opacity-90 transition-all duration-300 transform hover:scale-105 rounded-full px-6 py-3"
                    >
                      Contact Me
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>

      {/* --- 2. The Floating Drawer Icon (Appears on Scroll) --- */}
      <AnimatePresence>
        {!showMainNavBar && (
          <motion.button
            variants={drawerIconVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="fixed top-6 z-50 flex items-center justify-center w-12 h-12 bg-gray-900/80 backdrop-blur-md border border-gray-700 text-white rounded-full shadow-lg"
            style={{
              right: isMenuOpen ? `calc(1.5rem + ${scrollbarWidth}px)` : '1.5rem'
            }}
            aria-label="Toggle navigation"
          >
            <AnimatedMenuIcon isOpen={isMenuOpen} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* --- 3. The Compact Pop-out Drawer Menu --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={drawerMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed top-24 z-40 w-64 bg-gray-900/90 backdrop-blur-md border border-gray-700 rounded-xl shadow-2xl overflow-hidden"
            style={{
              right: isMenuOpen ? `calc(1.5rem + ${scrollbarWidth}px)` : '1.5rem'
            }}
          >
            <motion.ul className="flex flex-col p-3">
              {allNavItems.map((item) => (
                <motion.li key={item.id} variants={drawerLinkVariants}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`w-full text-left p-3 rounded-lg text-base font-medium transition-colors ${
                      activeSection === item.id
                        ? "text-teal-400 bg-gray-800"
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;