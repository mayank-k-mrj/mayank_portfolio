import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const isTouchDevice = useMediaQuery('(pointer: coarse)');
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  useEffect(() => {
    if (isTouchDevice || prefersReducedMotion) return;

    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const isClickable = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.onclick != null ||
        target.closest('a') != null ||
        target.closest('button') != null ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('interactive');

      setIsHoveringClickable(Boolean(isClickable));
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isTouchDevice, prefersReducedMotion, isVisible]);

  if (isTouchDevice || prefersReducedMotion || !isVisible) {
    return null;
  }

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full bg-cyan-400 mix-blend-screen"
        animate={{
          x: mousePosition.x - (isHoveringClickable ? 6 : 4),
          y: mousePosition.y - (isHoveringClickable ? 6 : 4),
          width: isHoveringClickable ? 12 : 8,
          height: isHoveringClickable ? 12 : 8,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full border border-cyan-400/50 shadow-[0_0_15px_rgba(0,240,255,0.5)]"
        animate={{
          x: mousePosition.x - (isHoveringClickable ? 24 : 16),
          y: mousePosition.y - (isHoveringClickable ? 24 : 16),
          width: isHoveringClickable ? 48 : 32,
          height: isHoveringClickable ? 48 : 32,
          borderColor: isHoveringClickable ? '#00f0ff' : 'rgba(0, 240, 255, 0.4)',
          backgroundColor: isHoveringClickable ? 'rgba(0, 240, 255, 0.1)' : 'transparent',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200, mass: 0.2 }}
      />
    </>
  );
}
