import React, { useRef, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface FadeInOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in milliseconds
  threshold?: number; // 0.0 to 1.0, fraction of the element that must be visible
}

const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({ children, className = '', delay = 0, threshold = 0.1 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when it comes into view
    threshold: threshold,
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      const timer = setTimeout(() => {
        setHasAnimated(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [inView, hasAnimated, delay]);

  return (
    <div
      ref={ref}
      className={`
        transition-opacity duration-1000 ease-out
        ${hasAnimated ? 'opacity-100' : 'opacity-0'}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll;