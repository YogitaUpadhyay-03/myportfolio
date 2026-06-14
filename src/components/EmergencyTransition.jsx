import { useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * Emergency Return Transition Screen component (Desktop-13).
 * Triggers an impostor-style alert transition screen when returning to the main menu.
 */
export default function EmergencyTransition({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2200); // Transition displays for 2.2 seconds

    return () => {
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div className="w-full h-full min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden z-50">
      
      {/* 1. Emergency Slash Transition Artwork Placeholder */}
      <div className="absolute inset-0 w-full h-full border-4 border-red-600 bg-red-950/20 flex flex-col items-center justify-center z-0">
        <div className="text-center p-8 opacity-10 select-none space-y-2 pointer-events-none">
          <p className="font-vcr text-4xl text-red-500 font-bold uppercase">Missing Transition Asset</p>
          <p className="font-vcr text-2xl text-red-500">emergency_splash.png</p>
          <p className="font-vcr text-xl text-red-500">1920px x 1080px</p>
        </div>
      </div>

      {/* 2. Text Overlay "RETURNING TO MAIN-MENU" in Joffrey Font */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <motion.h1
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: [0.7, 1.1, 1], opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-joffrey text-5xl sm:text-6xl md:text-7xl text-white tracking-wide leading-tight select-none uppercase drop-shadow-[0_6px_20px_rgba(255,0,0,0.6)]"
        >
          {/* Outer stroke styled text block */}
          <span className="text-[#ff3333] border-red-600">
            RETURNING TO
          </span>
          <br />
          <span className="text-white">
            MAIN-MENU
          </span>
        </motion.h1>
      </div>

    </div>
  );
}
