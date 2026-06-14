import { useEffect } from 'react';
import { motion } from 'framer-motion';
import greenCrewmate from '../assets/green_amongus.png';
import greenGradient from '../assets/green_gradient.png';
import startSoundSrc from '../assets/start.mp3';

/**
 * Projects Intro Screen component.
 * Shows the green crewmate spotlight screen before transitioning to uiux-projects.
 */
export default function ProjectsIntro({ onComplete }) {
  useEffect(() => {
    console.log("ProjectsIntro mounted");

    let active = true;
    let hasNavigated = false;

    const handleTransition = () => {
      if (active && !hasNavigated) {
        hasNavigated = true;
        console.log("Navigating to uiux-projects");
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
        console.error('Audio play error (Projects Intro Sound):', err);
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

      {/* Title "PROJECTS" in green, centered horizontally near the top */}
      <h1
        style={{
          fontFamily: '"VCR OSD Mono", monospace',
          letterSpacing: '0.15em',
          color: '#20c05d',
          fontWeight: 'normal',
          textAlign: 'center'
        }}
        className="select-none uppercase z-20 mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] px-4"
      >
        PROJECTS
      </h1>

      {/* Center Character and Glow Container */}
      <div
        className="relative flex flex-col items-center justify-center z-20"
        style={{ transform: "translateY(-15px)" }}
      >
        {/* Glow Under Character (green_gradient.png) */}
        <img
          src={greenGradient}
          alt="Spotlight"
          className="w-[240px] sm:w-[320px] md:w-[350px] h-auto opacity-80 select-none pointer-events-none absolute"
          style={{
            bottom: '-45px', // Positions directly beneath the crewmate
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        />

        {/* Center Character (green_amongus.png) */}
        <img
          src={greenCrewmate}
          alt="Green Crewmate"
          className="h-[110px] sm:h-[140px] md:h-[160px] w-auto object-contain select-none pointer-events-none z-30"
        />
      </div>
    </motion.div>
  );
}
