import { useEffect } from 'react';
import { motion } from 'framer-motion';
import blueCrewmate from '../assets/blue.png';
import blueGradient from '../assets/blue_gradient.png';
import startSoundSrc from '../assets/start.mp3';

/**
 * About Intro Screen component.
 * Shows the blue crewmate spotlight screen before transitioning to the about screen.
 */
export default function AboutIntro({ onComplete }) {
  useEffect(() => {
    console.log("AboutIntro mounted");

    let active = true;
    let hasNavigated = false;

    const handleTransition = () => {
      if (active && !hasNavigated) {
        hasNavigated = true;
        console.log("Navigating to about");
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
        console.error('Audio play error (About Intro Sound):', err);
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
      {/* Title "ABOUT" in blue, centered horizontally near the top */}
      <h1
        style={{
          fontFamily: '"VCR OSD Mono", monospace',
          letterSpacing: '0.15em',
          color: '#3b82f6',
          fontWeight: 'normal',
          textAlign: 'center'
        }}
        className="select-none uppercase z-20 mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] px-4"
      >
        ABOUT
      </h1>

      {/* Center Character and Glow Container */}
      <div
        className="relative flex flex-col items-center justify-center z-20"
        style={{ transform: "translateY(-15px)" }}
      >
        {/* Glow Under Character (blue_gradient.png) */}
        <img
          src={blueGradient}
          alt="Spotlight"
          className="w-[380px] sm:w-[480px] md:w-[550px] h-auto opacity-80 select-none pointer-events-none absolute"
          style={{
            bottom: '-45px', // Positions directly beneath the crewmate
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        />

        {/* Center Character (blue.png) */}
        <img
          src={blueCrewmate}
          alt="Blue Crewmate"
          className="h-[110px] sm:h-[140px] md:h-[160px] w-auto object-contain select-none pointer-events-none z-30"
        />
      </div>
    </motion.div>
  );
}
