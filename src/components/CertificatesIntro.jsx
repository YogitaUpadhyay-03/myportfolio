import { useEffect } from 'react';
import { motion } from 'framer-motion';
import yellowCrewmate from '../assets/yellow.png';
import yellowGradient from '../assets/yellow_gradient.png';
import startSoundSrc from '../assets/start.mp3';

/**
 * Certificates Screen component (Desktop-11).
 * Shows the yellow crewmate spotlight screen before transitioning to the cafeteria.
 */
export default function CertificatesIntro({ onComplete }) {
  useEffect(() => {
    console.log("CertificatesIntro mounted");

    let active = true;
    let hasNavigated = false;

    const handleTransition = () => {
      if (active && !hasNavigated) {
        hasNavigated = true;
        console.log("Navigating to cafeteria-certs");
        onComplete();
      }
    };

    // Always transition after 2500ms
    const transitionTimeout = setTimeout(handleTransition, 2500);

    let sound = null;
    if (!window.__audioMuted) {
      sound = new Audio(startSoundSrc);
      sound.loop = false;
      sound.volume = 1.0;
      console.log("SHHH started if allowed");
      sound.play().catch((err) => {
        console.log("Audio blocked:", err);
      });
    }

    return () => {
      active = false;
      clearTimeout(transitionTimeout);
      if (sound) {
        try {
          sound.pause();
        } catch (e) {}
      }
    };

  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full h-full min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden"
    >

      {/* 3. Title "CERTIFICATES" in light yellow, centered horizontally near the top */}
      <h1
        style={{
          fontFamily: '"VCR OSD Mono", monospace',
          letterSpacing: '0.15em',
          color: '#F5EDB0',
          fontWeight: 'normal',
          textAlign: 'center'
        }}
        className="select-none uppercase z-20 mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] px-4"
      >
        CERTIFICATES
      </h1>

      {/* 4. Center Character and Glow Container */}
      <div
        className="relative flex flex-col items-center justify-center z-20"
        style={{ transform: "translateY(-15px)" }}
      >
        {/* Glow Under Character (yellow_gradient.png) */}
        <img
          src={yellowGradient}
          alt="Spotlight"
          className="w-[240px] sm:w-[320px] md:w-[350px] h-auto opacity-80 select-none pointer-events-none absolute"
          style={{
            bottom: '-45px', // Positions directly beneath the crewmate
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        />

        {/* Center Character (yellow.png) */}
        <img
          src={yellowCrewmate}
          alt="Yellow Crewmate"
          className="h-[110px] sm:h-[140px] md:h-[160px] w-auto object-contain select-none pointer-events-none z-30"
        />
      </div>
    </motion.div>
  );
}

