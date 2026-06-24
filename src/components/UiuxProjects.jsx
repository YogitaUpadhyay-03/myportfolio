import { motion } from 'framer-motion';
import Button from './Button';
import exitButton from '../assets/exit_button.png';

/**
 * UI/UX Projects screen component.
 * Displays a premium grid of UI/UX design case studies matching the Among Us sci-fi cockpit aesthetic.
 */
export default function UiuxProjects({ onBack }) {
  const projects = [
    {
      title: "AMONG US PORTFOLIO",
      category: "Interactive Web",
      description: "Designed and developed an interactive Among Us–inspired portfolio featuring animated transitions, retro UI styling, and immersive navigation using React, Tailwind CSS, and Framer Motion.",
      tags: ["React", "Tailwind CSS", "Framer Motion", "Figma"],
      status: "COMPLETED",
      links: {
        github: "https://github.com/YogitaUpadhyay-03/myportfolio"
      }
    },
    {
      title: "PARALLAX PROTOTYPING",
      category: "Interactive Prototype",
      description: "Created a visually engaging parallax experience with layered animations and interactive transitions to demonstrate motion design and storytelling principles.",
      tags: ["Figma", "Parallax", "Motion Design"],
      status: "COMPLETED",
      links: {
        figma: "https://www.figma.com/design/ooHbB13SQPCYgWPpPiG3r4/parallax-prototyping?node-id=11-339&t=SitoamIoVWCFJvhV-1",
        prototype: "https://www.figma.com/proto/ooHbB13SQPCYgWPpPiG3r4/parallax-prototyping?node-id=11-339&t=SitoamIoVWCFJvhV-1"
      }
    },
    {
      title: "TO DO LIST",
      category: "Web Application",
      description: "Built a responsive task management application with features for adding, organizing, and tracking daily tasks through a simple and intuitive interface.",
      tags: ["React", "Figma", "Productivity"],
      status: "COMPLETED",
      links: {
        figma: "https://www.figma.com/design/TlfdTzv4o45Z18JsNwmJNF/to-do-list?node-id=0-1&t=zbNGoEYGr2trEHDX-1",
        github: "https://github.com/YogitaUpadhyay-03/todolist"
      }
    },
    {
      title: "PHOTOBOOTH",
      category: "Digital Experience",
      description: "Currently designing a digital photobooth experience focused on customizable frames, filters, and intuitive user interactions.",
      tags: ["Figma", "Photo Filters", "UX Design"],
      status: "IN PROGRESS",
      links: {
        figma: "https://www.figma.com/design/5gOQonKosltLwMoOLsQtE0/photobooth?node-id=0-1&t=yKtxE71bv5bpT3hP-1"
      }
    }
  ];

  return (
    <div className="w-full h-full min-h-screen bg-black text-white relative flex flex-col items-center justify-start overflow-y-auto px-4 py-8 sm:px-8 sm:py-12 no-scrollbar">
      {/* Space Background Layer */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(15,48,24,0.15),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:40px_40px] opacity-25 pointer-events-none" />

      {/* Header Container */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-zinc-800 pb-6 mb-10 mt-4">
        <div className="text-center sm:text-left">
          <motion.h1
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="font-joffrey text-yellow-400 text-6xl md:text-7xl lg:text-8xl tracking-wider uppercase drop-shadow-[0_2px_8px_rgba(250,204,21,0.3)]"
          >
            UI/UX PROJECTS
          </motion.h1>
          <p className="font-vcr text-lg md:text-xl text-zinc-400 mt-1 uppercase tracking-widest">
            Logged tasks & design case studies
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

      {/* Projects Grid */}
      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="border border-zinc-700 bg-[#090909] rounded-xl p-8 md:p-10 shadow-2xl relative overflow-hidden group hover:border-yellow-400/50 hover:bg-zinc-900/60 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Status indicator pill */}
            <div className="flex items-center justify-between mb-4">
              <span className="font-vcr text-base md:text-lg text-yellow-400/90 tracking-widest bg-yellow-400/10 px-2.5 py-1 rounded-full border border-yellow-400/20">
                {project.category}
              </span>
              <span className={`font-vcr text-base md:text-lg tracking-wider px-2 py-0.5 rounded border ${
                project.status === 'COMPLETED' 
                  ? 'text-emerald-400 border-emerald-400/20 bg-emerald-400/10' 
                  : 'text-amber-400 border-amber-400/20 bg-amber-400/10'
              }`}>
                {project.status}
              </span>
            </div>

            {/* Title & Description */}
            <div className="mb-6">
              <h2 className="font-joffrey text-4xl md:text-5xl text-white tracking-wide group-hover:text-yellow-400 transition-colors duration-200 uppercase mb-2 leading-tight">
                {project.title}
              </h2>
              <p className="font-vcr text-lg md:text-xl text-zinc-400 leading-relaxed max-w-5xl">
                {project.description}
              </p>
              {project.links && (
                <div className="flex flex-wrap gap-4 mt-4 font-vcr text-base md:text-lg">
                  {Object.entries(project.links).map(([key, url]) => (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-vcr text-sm md:text-base text-[#F5EDB0] bg-transparent border border-[#F5EDB0] px-3.5 py-1.5 rounded-full hover:bg-[#F5EDB0]/10 hover:border-[#F5EDB0] transition-all uppercase tracking-wider select-none flex items-center gap-0.5"
                    >
                      [ {project.title === "AMONG US PORTFOLIO" && key === "github" ? "VIEW SOURCE" : key.toUpperCase()} ↗ ]
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Tag List */}
            <div className="flex flex-wrap gap-2 pt-4">
              {project.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex} 
                  className="font-vcr text-sm bg-zinc-800 text-white rounded-full px-3 py-1"
                >
                  [{tag}]
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Exit Megaphone Button */}
      <button 
        onClick={onBack}
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          zIndex: 60
        }}
        className="bg-transparent border-0 p-0 cursor-pointer focus:outline-none w-[65px] sm:w-[75px] md:w-[90px] h-auto hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <img
          src={exitButton}
          alt="Exit Button"
          className="w-full h-auto object-contain select-none pointer-events-none"
        />
      </button>
    </div>
  );
}
