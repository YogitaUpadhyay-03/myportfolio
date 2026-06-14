import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import loadingCrewmate from '../assets/loading_page.png';

/**
 * Loading Screen component (Desktop-2 and Desktop-5).
 * Animates a loading bar and shows the loading crewmate.
 */
export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 3000; // 3 seconds loading
    const intervalTime = 30;
    const increment = (100 * intervalTime) / duration;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Small pause at 100% before transition
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="w-full h-full min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Crewmate Outline */}
      <img
        src={loadingCrewmate}
        alt="Loading Crewmate"
        className="w-[170px] h-[179px] object-contain mb-12"
      />

      {/* Loading Bar Container */}
      <div className="w-72 sm:w-96 h-4 bg-[#231b30] border border-white/10 rounded-full overflow-hidden p-[2px]">
        {/* Progress Fill */}
        <motion.div
          className="h-full bg-white rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1, ease: "linear" }}
        />
      </div>
    </div>
  );
}
