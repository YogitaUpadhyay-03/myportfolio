import { motion } from 'framer-motion';
import shhhCrewmate from '../assets/shhh_crewmate.png';

/**
 * Shhh Screen component (Desktop-6).
 * Shows the classic match-start "SHHHHHHH!" screen.
 */
export default function ShhhScreen() {

  return (
    <div className="w-full h-full min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden p-4">
      {/* Centered Crewmate with Red Sunburst */}
      <div className="relative flex items-center justify-center mb-6">
        {/* Sunburst background circle */}
        <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-red-950 to-red-600 flex items-center justify-center shadow-[0_0_60px_rgba(239,68,68,0.35)]">
          <img
            src={shhhCrewmate}
            alt="Shhh Crewmate"
            className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] object-contain select-none pointer-events-none drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]"
          />
        </div>
      </div>

      {/* SHHHHHH! Title in Joffrey Font */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="font-joffrey text-6xl md:text-7xl text-[#ff3333] tracking-wider text-center select-none drop-shadow-[0_4px_12px_rgba(255,0,0,0.6)] uppercase"
      >
        SHHHHHH!
      </motion.h1>
    </div>
  );
}
