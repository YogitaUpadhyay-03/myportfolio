import { motion } from 'framer-motion';
import exitButton from '../assets/exit_button.png';

/**
 * Certificates Cafeteria Screen component (Desktop-12).
 * Recreated to match the layout and design of the mockup screenshot exactly.
 */
export default function CafeteriaCerts({ onExit }) {
  const certificates = [
    {
      title: "PRINCIPLES OF UI/UX DESIGN",
      issuer: "Meta",
      year: "2025",
      url: "https://coursera.org/share/3e7448d339fcc40e2b254d98c9c937d2"
    },
    {
      title: "VERSION CONTROL",
      issuer: "Meta",
      year: "2025",
      url: "https://coursera.org/share/f9f5d3fafe7f09d4a5f155ca77648eec"
    },
    {
      title: "INTRODUCTION TO IOS MOBILE DEVELOPMENT",
      issuer: "Meta",
      year: "2025",
      url: "https://coursera.org/share/1e8dc639c856045ceea1c0949cd56949"
    },
    {
      title: "PARTICIPANT IN SMART INDIA HACKATHON",
      issuer: "GLA University",
      year: "2024",
      url: "https://drive.google.com/file/d/1eT6IEkC1u2A8ssL6dxxLSFLhAZJ-92KE/view?usp=sharing"
    }
  ];

  return (
    <div 
      className="w-full min-h-screen bg-[#d9d9d9] relative overflow-y-auto no-scrollbar font-vcr"
    >
      
      {/* 1. Stack of full-width horizontal certificate panels */}
      <div className="w-full flex flex-col border-t-2 border-[#333333] z-10 pb-40">
        {certificates.map((cert, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="w-full border-b-2 border-[#333333] py-10 px-8 sm:px-12 md:px-16 lg:px-20 flex flex-col gap-3 sm:gap-2 select-text"
          >
            {/* Title */}
            <h2 className="text-lg sm:text-2xl md:text-3xl text-[#1f3a52] font-bold tracking-wider uppercase">
              {cert.title}
            </h2>
            
            {/* Metadata */}
            <p className="text-sm sm:text-base text-[#475569] uppercase tracking-wide mt-1">
              ISSUED BY : {cert.issuer.toUpperCase()} {cert.year}
            </p>
            
            {/* Link */}
            <p className="text-sm sm:text-base text-[#475569] tracking-wide break-all mt-1">
              LINK :{' '}
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer transition-colors break-all"
              >
                {cert.url}
              </a>
            </p>
          </motion.div>
        ))}
      </div>

      {/* Fixed Exit Button */}
      <button
        onClick={onExit}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 999
        }}
        className="
          bg-transparent
          border-0
          p-0
          cursor-pointer
          focus:outline-none
          w-[70px]
          sm:w-[80px]
          md:w-[90px]
          h-auto
          hover:scale-105
          active:scale-95
          transition-all
          duration-200
        "
      >
        <img
          src={exitButton}
          alt="Exit"
          className="w-full h-auto object-contain select-none pointer-events-none"
        />
      </button>

    </div>
  );
}
