import { motion } from 'framer-motion';
import Button from './Button';
import exitButton from '../assets/exit_button.png';

/**
 * UI/UX Experience screen component.
 * Displays professional design work history and achievements in an interactive timeline with Sci-Fi Among Us aesthetics.
 */
export default function UiuxExperience({ onBack }) {
  const experiences = [
    {
      role: "UI/UX DESIGNER INTERN",
      company: "AQUILA EVENTS AND MARKETING",
      period: "OCT 2025 – JAN 2026",
      description:
        "Designed web pages and mobile application screens while collaborating on interactive user experiences. Created prototypes to improve user flows and developed engaging video content for Instagram campaigns.",
      achievements: [
        "Designed responsive website pages in Figma",
        "Created mobile app UI screens and user flows",
        "Built interactive prototypes for usability testing",
        "Produced promotional Instagram videos and reels"
      ]
    }
  ];

  return (
    <div className="w-full h-full min-h-screen bg-black text-white relative flex flex-col items-center justify-start overflow-y-auto px-4 py-8 sm:px-8 sm:py-12 no-scrollbar">
      {/* Ambient Space Background Layer */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(88,28,135,0.15),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:40px_40px] opacity-25 pointer-events-none" />

      {/* Header Container */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-zinc-800 pb-6 mb-10 mt-4">
        <div className="text-center sm:text-left">
          <motion.h1
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="font-joffrey text-purple-400 text-5xl md:text-6xl tracking-wider uppercase drop-shadow-[0_2px_8px_rgba(192,132,252,0.3)]"
          >
            WORK EXPERIENCE
          </motion.h1>
          <p className="font-vcr text-sm text-zinc-400 mt-1 uppercase tracking-widest">
            Professional trajectory & logs
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

      {/* Experience Timeline */}
      <div className="relative z-10 w-full max-w-3xl flex flex-col gap-8 mb-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="relative pl-6 sm:pl-8 border-l-2 border-zinc-800 hover:border-purple-400/50 transition-colors duration-300 group"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-zinc-800 border border-black group-hover:bg-purple-400 group-hover:scale-125 transition-all duration-200" />

            <div className="bg-zinc-950/80 border-2 border-zinc-800 group-hover:border-purple-400/30 group-hover:bg-zinc-900/50 p-4 sm:p-6 rounded-2xl shadow-xl transition-all duration-300">
              {/* Role Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <div>
                  <h2 className="font-joffrey text-4xl text-white tracking-wide uppercase group-hover:text-purple-400 transition-colors duration-200">
                    {exp.role}
                  </h2>
                  <span className="font-vcr text-2xl text-zinc-400 font-bold uppercase tracking-wider">
                    {exp.company}
                  </span>
                </div>
                <span className="font-vcr text-xl text-purple-400/90 bg-purple-400/10 px-3 py-1 rounded-full border border-purple-400/20 self-start sm:self-center">
                  {exp.period}
                </span>
              </div>

              {/* Description */}
              <p className="font-vcr text-xl text-zinc-400 leading-relaxed mb-4">
                {exp.description}
              </p>

              {/* Achievements Bullet List */}
              <ul className="space-y-1.5 border-t border-zinc-900 pt-4">
                {exp.achievements.map((ach, achIndex) => (
                  <li key={achIndex} className="font-vcr text-lg text-zinc-400 flex items-start gap-2">
                    <span className="text-purple-400/80 select-none">•</span>
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fixed Exit Button */}
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
