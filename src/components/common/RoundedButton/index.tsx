import React, { useEffect, useRef, useState, ReactElement, ReactNode, CSSProperties, Children, cloneElement } from 'react';
import gsap from 'gsap';
import Magnetic from '../Magnetic';

// --- ALL STYLING IS NOW INSIDE THIS FILE ---
const styles: { [key: string]: CSSProperties } = {
  roundedButton: {
    borderRadius: '3em',
    border: '1px solid rgb(136, 136, 136)',
    cursor: 'pointer',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '15px 60px 15px 60px',
    overflow: 'hidden', // Moved from inline
  },
  circle: {
    width: '100%',
    height: '150%',
    position: 'absolute',
    borderRadius: '50%',
    top: '100%',
  },
  // Base style for the child <p> tag
  childText: {
    position: 'relative',
    zIndex: 1,
    transition: 'color 0.4s linear',
    margin: 0,
  }
};
// --- END OF STYLING ---


// Define the props interface
interface RoundedButtonProps {
  // Child must be a single React Element (like a <p>)
  children: ReactElement; 
  backgroundColor?: string;
  [key: string]: any; // To allow other props like onClick, etc.
}

export default function RoundedButton({
  children,
  backgroundColor = "#455CE9",
  ...attributes
}: RoundedButtonProps) {
  
  const circle = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  let timeoutId: NodeJS.Timeout | null = null;

  // --- State for managing hover ---
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(circle.current, { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" }, "enter")
      .to(circle.current, { top: "-150%", width: "125%", duration: 0.25 }, "exit");
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsHovered(true); // <-- Set hover state to true
    timeline.current?.tweenFromTo('enter', 'exit');
  };

  const manageMouseLeave = () => {
    setIsHovered(false); // <-- Set hover state to false
    timeoutId = setTimeout(() => {
      timeline.current?.play();
    }, 300);
  };

  // --- Style the child element dynamically ---
  // 1. Get the single child element
  const childElement = Children.only(children) as ReactElement;
  
  // 2. Create dynamic styles for it
  const newChildStyle: CSSProperties = {
    ...styles.childText, // Apply base styles
    ...childElement.props.style, // Apply any styles passed from the parent (like in Hero.tsx)
    color: isHovered ? 'white' : (childElement.props.style?.color || '#000000'), // <-- Apply hover color
  };

  return (
    <Magnetic>
      <div
        style={styles.roundedButton}
        onMouseEnter={manageMouseEnter}
        onMouseLeave={manageMouseLeave}
        {...attributes}
      >
        {/* 3. Clone the child and apply the new dynamic styles */}
        {cloneElement(childElement, { style: newChildStyle })}
        
        <div
          ref={circle}
          style={{ 
            ...styles.circle, 
            backgroundColor: backgroundColor 
          }}
        ></div>
      </div>
    </Magnetic>
  );
}