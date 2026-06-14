import { useEffect } from 'react';
import { motion } from 'framer-motion';
import pinkCrewmate from '../assets/pink.png';
import pinkGradient from '../assets/pink_gradient.png';
import startSoundSrc from '../assets/start.mp3';

/**
 * Graphic Intro Screen component.
 * Shows the pink crewmate spotlight screen before transitioning to graphic-design.
 */
export default function GraphicIntro({ onComplete }) {
  useEffect(() => {
    console.log("GraphicIntro mounted");

    // Stop all other currently playing sounds managed globally
    if (window._appAudioRefs) {
      Object.values(window._appAudioRefs).forEach((ref) => {
        if (ref.current) {
          ref.current.pause();
          ref.current.currentTime = 0;
        }
      });
    }

    let active = true;
    let hasNavigated = false;

    const handleTransition = () => {
      if (active && !hasNavigated) {
        hasNavigated = true;
        console.log("Navigating to graphic-design");
        onComplete();
      }
    };

    if (window.__audioMuted) {
      console.log("Muted, fallback timer starting");
      const fallbackTimeout = setTimeout(handleTransition, 2000);
      return () => {
        active = false;
        clearTimeout(fallbackTimeout);
      };
    }

    const sound = new Audio(startSoundSrc);
    sound.loop = false;
    sound.volume = 1.0;

    const handleEnded = () => {
      console.log("SHHH ended");
      handleTransition();
    };

    sound.addEventListener('ended', handleEnded);

    console.log("SHHH started");
    sound.play()
      .catch((err) => {
        if (err.name === 'AbortError') {
          return;
        }
        console.error('Audio play error (Graphic Intro Sound):', err);
        handleTransition();
      });

    return () => {
      active = false;
      sound.removeEventListener('ended', handleEnded);
      sound.pause();
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full h-full min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Title "GRAPHIC DESIGNER" in soft sakura pink, centered horizontally near the top */}
      <h1
        style={{
          fontFamily: '"VCR OSD Mono", monospace',
          letterSpacing: '0.15em',
          color: '#F5A9D0',
          fontWeight: 'normal',
          textAlign: 'center'
        }}
        className="select-none uppercase z-20 mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] px-4"
      >
        GRAPHIC DESIGNER
      </h1>

      {/* Center Character and Glow Container */}
      <div
        className="relative flex flex-col items-center justify-center z-20"
        style={{ transform: "translateY(-15px)" }}
      >
        {/* Glow Under Character (pink_gradient.png) */}
        <img
          src={pinkGradient}
          alt="Spotlight"
          className="w-[380px] sm:w-[450px] h-auto opacity-80 select-none pointer-events-none absolute"
          style={{
            bottom: '-45px', // Positions directly beneath the crewmate
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        />

        {/* Center Character (pink.png) */}
        <img
          src={pinkCrewmate}
          alt="Pink Crewmate"
          className="h-[110px] sm:h-[140px] md:h-[160px] w-auto object-contain select-none pointer-events-none z-30"
        />
      </div>
    </motion.div>
  );
}
