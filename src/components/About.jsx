import { motion } from 'framer-motion';
import Button from './Button';
import exitButton from '../assets/exit_button.png';

/**
 * About Page screen component.
 * Displays crewmate dossier, skills, links, current mission, and fun fact in an Among Us styled layout.
 */
export default function About({ onBack }) {
  const skills = [
    "Figma", "React", "Flutter",
    "Swift Basics", "AI Tools",
    "Stitch", "Antigravity",
    "Video Editing", "Prototyping"
  ];

  const contacts = [
    { name: "LINKEDIN ↗", url: "https://www.linkedin.com/in/yogita-upadhyay-b003a3286/" },
    { name: "GITHUB ↗", url: "https://github.com/YogitaUpadhyay-03" },
    { name: "EMAIL ↗", url: "mailto:yogitaupadhyay0309@gmail.com" }
  ];

  const missions = [
    "Seeking UI/UX internships",
    "Exploring AI-assisted workflows",
    "Building interactive experiences"
  ];

  return (
    <div className="w-full h-full min-h-screen bg-black text-white relative flex flex-col items-center justify-start overflow-y-auto px-4 py-8 sm:px-8 sm:py-12 no-scrollbar">
      {/* Space Background Layer */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:40px_40px] opacity-25 pointer-events-none" />

      {/* Header Container */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-zinc-800 pb-6 mb-10 mt-4">
        <div className="text-center sm:text-left">
          <motion.h1
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="font-joffrey text-blue-400 text-5xl md:text-6xl lg:text-7xl tracking-wider uppercase drop-shadow-[0_2px_8px_rgba(59,130,246,0.3)]"
          >
            ABOUT YOGITA
          </motion.h1>
          <p className="font-vcr text-base md:text-lg text-zinc-400 mt-1 uppercase tracking-widest">
            Crewmate dossier & telemetry
          </p>
        </div>

        {/* Back Button */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <Button onClick={onBack}>
            BACK
          </Button>
        </motion.div>
      </div>

      {/* Main Grid Content */}
      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-6 mb-20">
        
        {/* Left Section (Bio, Mission & Fun Fact) - spans 7 cols on md */}
        <div className="md:col-span-7 flex flex-col gap-6">
          
          {/* WHO AM I */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="border-2 border-zinc-800 bg-zinc-950/80 rounded-2xl p-6 shadow-2xl relative overflow-hidden hover:border-blue-500/30 transition-all duration-300"
          >
            <h2 className="font-joffrey text-3xl text-white tracking-wide uppercase mb-3 text-blue-400/90">
              WHO AM I
            </h2>
            <p className="font-vcr text-lg md:text-xl text-zinc-300 leading-relaxed">
              Passionate UI/UX designer and frontend developer dedicated to creating intuitive, visual, and immersive digital experiences. I combine creative design thinking with clean frontend code to build applications that are both beautiful and functional.
            </p>
          </motion.div>

          {/* CURRENT MISSION */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="border-2 border-zinc-800 bg-zinc-950/80 rounded-2xl p-6 shadow-2xl relative overflow-hidden hover:border-blue-500/30 transition-all duration-300"
          >
            <h2 className="font-joffrey text-3xl text-white tracking-wide uppercase mb-3 text-blue-400/90">
              CURRENT MISSION
            </h2>
            <ul className="space-y-3.5 pt-1">
              {missions.map((mission, index) => (
                <li key={index} className="font-vcr text-lg md:text-xl text-zinc-300 flex items-start gap-3">
                  <span className="text-blue-500 font-bold select-none">•</span>
                  <span>{mission}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* FUN FACT */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="border-2 border-zinc-800 bg-zinc-950/80 rounded-2xl p-6 shadow-2xl relative overflow-hidden hover:border-blue-500/30 transition-all duration-300"
          >
            <h2 className="font-joffrey text-3xl text-white tracking-wide uppercase mb-2 text-blue-400/90">
              FUN FACT
            </h2>
            <p className="font-vcr text-lg md:text-xl text-zinc-300 italic">
              "I built this entire portfolio inspired by Among Us."
            </p>
          </motion.div>

        </div>

        {/* Right Section (Skills & Contacts) - spans 5 cols on md */}
        <div className="md:col-span-5 flex flex-col gap-6">
          
          {/* SKILLS */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="border-2 border-zinc-800 bg-zinc-950/80 rounded-2xl p-6 shadow-2xl relative overflow-hidden hover:border-blue-500/30 transition-all duration-300"
          >
            <h2 className="font-joffrey text-3xl text-white tracking-wide uppercase mb-4 text-blue-400/90">
              SKILLS
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="font-vcr text-base text-blue-400 bg-blue-500/15 border border-blue-500/25 px-3.5 py-1.5 rounded-full uppercase tracking-wider select-none hover:bg-blue-500/25 transition-all"
                >
                  [{skill}]
                </span>
              ))}
            </div>
          </motion.div>

          {/* CONTACTS */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="border-2 border-zinc-800 bg-zinc-950/80 rounded-2xl p-6 shadow-2xl relative overflow-hidden hover:border-blue-500/30 transition-all duration-300"
          >
            <h2 className="font-joffrey text-3xl text-white tracking-wide uppercase mb-4 text-blue-400/90">
              CONTACTS
            </h2>
            <div className="flex flex-col gap-3.5">
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-vcr text-lg md:text-xl text-zinc-300 bg-zinc-900/50 border-2 border-white rounded-xl px-5 py-3.5 hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-200 flex items-center justify-between cursor-pointer"
                >
                  <span className="font-bold tracking-wider">{contact.name}</span>
                </a>
              ))}
            </div>
          </motion.div>

        </div>

      </div>

      {/* Fixed Exit Megaphone Button */}
      <button
        onClick={onBack}
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
