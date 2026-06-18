import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import popupSoundSrc from '../assets/popup_sound.mp3';

// Folder SVG icon with cartoon styling matching the Among Us look
const FolderIcon = ({ className }) => (
  <svg
    viewBox="0 0 100 80"
    className={className}
    style={{ filter: 'drop-shadow(4px 4px 0px rgba(0,0,0,0.3))' }}
  >
    {/* Tab Back */}
    <path
      d="M6 14 L32 14 L38 24 L94 24 L94 74 L6 74 Z"
      fill="#E2B13C"
      stroke="#000000"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Paper Sheet sticking out */}
    <path
      d="M20 8 L80 8 L80 45 L20 45 Z"
      fill="#FFFFFF"
      stroke="#000000"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Folder Front */}
    <path
      d="M6 24 L36 24 L42 32 L94 32 L94 74 L6 74 Z"
      fill="#F5D061"
      stroke="#000000"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ResumePopup({ onClose }) {
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);

  // Play popup_sound on enter and manage ambient audio pause/resume
  useEffect(() => {
    let originalMenuAudioPlaying = false;
    let menuAudio = null;

    // 1. Check if the hero menu ambient sound is currently playing
    if (window._appAudioRefs && window._appAudioRefs.menuAudioRef && window._appAudioRefs.menuAudioRef.current) {
      menuAudio = window._appAudioRefs.menuAudioRef.current;
      if (!menuAudio.paused) {
        originalMenuAudioPlaying = true;
      }
    }

    // 2. Pause ALL currently playing sounds
    if (window.__activeAudios) {
      window.__activeAudios.forEach((audio) => {
        try {
          audio.pause();
        } catch (err) {}
      });
    }

    if (window._appAudioRefs) {
      Object.values(window._appAudioRefs).forEach((ref) => {
        if (ref.current) {
          try {
            ref.current.pause();
          } catch (err) {}
        }
      });
    }

    // 3. Play ONLY popup_sound exactly once
    const sound = new Audio(popupSoundSrc);
    sound.volume = 1;
    sound.currentTime = 0;

    if (!window.__audioMuted) {
      sound.play().catch((err) =>
        console.log("Audio blocked:", err)
      );
    }

    return () => {
      // 4. Stop the popup sound on unmount/close
      try {
        sound.pause();
        sound.currentTime = 0;
      } catch (e) {}
      
      // 5. Resume the normal hero ambient sound exactly as it was before
      if (originalMenuAudioPlaying && menuAudio) {
        if (!window.__audioMuted) {
          menuAudio.play().catch((err) => {
            console.log("Audio resume blocked:", err);
          });
        }
      }
    };
  }, []);

  const handleDownload = () => {
    if (downloading) return;
    setDownloading(true);
    setProgress(0);

    // Simulate progress bar like Among Us tasks (approx 1.5 seconds)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          
          // Trigger actual PDF download
          const link = document.createElement("a");
          link.href = "/yogita_upadhyay.pdf";
          link.download = "Yogita_Upadhyay_Resume.pdf";
          link.click();

          setTimeout(() => {
            setDownloading(false);
            setProgress(0);
          }, 800);

          return 100;
        }
        return prev + 10;
      });
    }, 120);
  };

  return (
    <div 
      className="fixed inset-0 bg-black/70 flex items-center justify-center font-vcr p-4 select-none"
      style={{ zIndex: 999992 }}
      onClick={onClose}
    >
      {/* Centered Panel (Clean Charcoal Panel with Black Border) */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="w-full max-w-[700px] aspect-[16/10] bg-[#1d222e] border-4 border-black rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.9)] relative flex flex-col justify-between p-6 sm:p-10 text-white overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button X at Top-Right */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg sm:text-xl w-8 h-8 rounded border-2 border-black flex items-center justify-center cursor-pointer shadow-[2px_2px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#000] transition-all z-20"
          title="Close Task"
        >
          ✕
        </button>

        {/* Title/Header area resembling Tasks layout */}
        <div className="w-full flex items-center justify-between border-b-4 border-black pb-3 pt-6 sm:pt-8">
          <h2 className="text-lg sm:text-2xl text-yellow-400 font-bold uppercase tracking-wider">
            TASK: DOWNLOAD RESUME
          </h2>
          <div className="text-xs sm:text-base text-green-400 font-bold">
            {progress === 100 ? "COMPLETED" : downloading ? `DOWNLOADING... ${progress}%` : ""}
          </div>
        </div>

        {/* 3-Column Content Layout */}
        <div className="flex-1 flex flex-row items-center justify-between gap-2 sm:gap-6 my-4 relative">
          
          {/* Left Folder: Resume */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <motion.div 
              animate={downloading && progress < 100 ? { y: [0, -5, 0] } : {}}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-16 sm:w-28 h-auto"
            >
              <FolderIcon className="w-full h-auto" />
            </motion.div>
            <span className="text-[10px] sm:text-base text-white font-bold tracking-wide mt-2 text-center bg-black/40 px-2 py-0.5 rounded">
              Resume
            </span>
          </div>

          {/* Center Column: Download Button & Progress Bar */}
          <div className="flex-1 flex flex-col items-center justify-center gap-3 z-10">
            {/* Download Progress Bar */}
            <div className="w-full max-w-[100px] sm:max-w-[150px] bg-black/60 border-2 border-black rounded-full h-3 sm:h-5 overflow-hidden relative">
              <div 
                className="bg-green-500 h-full transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Retro Metallic Button */}
            <button
              onClick={handleDownload}
              disabled={downloading}
              className={`
                px-3 py-1.5 sm:px-6 sm:py-2.5
                text-xs sm:text-lg font-bold uppercase tracking-wider
                border-4 border-black rounded
                shadow-[3px_3px_0px_#000]
                transition-all duration-100
                focus:outline-none
                ${downloading 
                  ? "bg-gray-500 text-gray-800 cursor-not-allowed transform translate-x-[2px] translate-y-[2px] shadow-[1px_1px_0px_#000]"
                  : "bg-gradient-to-b from-[#e0e0e0] via-[#c0c0c0] to-[#909090] text-black hover:brightness-110 active:transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#000]"
                }
              `}
              style={{
                fontFamily: '"VCR OSD Mono", monospace',
              }}
            >
              {downloading ? "WAIT..." : "DOWNLOAD"}
            </button>
          </div>

          {/* Right Folder: My Tablet */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <motion.div 
              animate={downloading && progress < 100 ? { scale: [1, 1.04, 1] } : {}}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-16 sm:w-28 h-auto"
            >
              <FolderIcon className="w-full h-auto" />
            </motion.div>
            <span className="text-[10px] sm:text-base text-white font-bold tracking-wide mt-2 text-center bg-black/40 px-2 py-0.5 rounded">
              Your Tablet
            </span>
          </div>

        </div>

        {/* Footer message / info */}
        <div className="text-center text-[8px] sm:text-xs text-gray-400 border-t-4 border-black pb-2">
          DO NOT CLOSE THIS SCREEN UNTIL DOWNLOAD IS COMPLETE
        </div>
      </motion.div>
    </div>
  );
}
