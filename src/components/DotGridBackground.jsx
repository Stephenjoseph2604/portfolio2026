// DotGridBackground.jsx
import React from 'react';
import { motion } from 'framer-motion';

function DotGridBackground() {
  return (
    <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden bg-bg-primary">
      {/* Main dot grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            radial-gradient(var(--color-fg-muted-3) 1px, transparent 1px),
            radial-gradient(var(--color-fg-muted-3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px'
        }}
      />
      
      {/* Animated floating dots */}
      {[
        { top: '10%', left: '10%', size: '4px', delay: 0 },
        { top: '20%', right: '15%', size: '3px', delay: 2.5 },
        { top: '60%', left: '20%', size: '5px', delay: 5 },
        { top: '80%', right: '25%', size: '2px', delay: 7.5 },
        { top: '40%', left: '70%', size: '4px', delay: 10 },
        { top: '70%', right: '60%', size: '3px', delay: 12.5 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-fg-muted-2"
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.9, 0.4],
            y: [0, -10, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: dot.delay,
            ease: 'easeInOut'
          }}
        />
      ))}
      
      {/* Corner accent dots */}
      <motion.div 
        className="absolute top-6 left-6 w-2.5 h-2.5 bg-primary/30 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute bottom-8 right-8 w-2 h-2 bg-success/40 rounded-full animate-pulse [animation-delay:1s]" />
      <motion.div 
        className="absolute top-24 right-12 w-1.5 h-1.5 bg-secondary/40 rounded-full"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
      />
    </div>
  );
}

export { DotGridBackground };
