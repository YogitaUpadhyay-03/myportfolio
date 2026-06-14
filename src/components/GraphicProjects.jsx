import { motion } from 'framer-motion';
import Button from './Button';
import exitButton from '../assets/exit_button.png';

/**
 * Graphic Projects screen component.
 * Displays a premium text-only showcase of graphic design creative campaigns.
 */
export default function GraphicProjects({ onBack }) {
  const projects = [
    {
      title: "GARNIER VITAMIN C CAMPAIGN",
      category: "SOCIAL MEDIA DESIGN",
      description: "Designed a refreshing social media advertisement for Garnier Vitamin C Face Wash using vibrant citrus tones, water splash elements, and natural leaf motifs. The composition was created to highlight freshness and suitability for everyday skincare while maintaining a visually engaging layout.",
      tags: ["FIGMA", "SOCIAL MEDIA", "ADVERTISEMENT", "BRANDING"],
      status: "COMPLETED",
      links: {
        drive: "https://drive.google.com/file/d/16G4fzEAAWQI17550CPwJ8LA4wAwmxAjD/view"
      }
    },
    {
      title: "STRAWBERRY DRINK PROMOTION",
      category: "PROMOTIONAL POSTER",
      description: "Created an energetic beverage advertisement featuring dynamic liquid splash effects, floating fruits, and bold call-to-action elements. The design focuses on creating a vibrant and refreshing visual identity suitable for digital promotions.",
      tags: ["FIGMA", "POSTER DESIGN", "PRODUCT PROMOTION", "MARKETING"],
      status: "COMPLETED",
      links: {
        drive: "https://drive.google.com/file/d/11lMgUIJRg92-co40kSTYJe4OTGIetjVQ/view"
      }
    },
    {
      title: "ADIDAS PRODUCT ADVERTISEMENT",
      category: "BRAND ADVERTISEMENT",
      description: "Designed a stylish promotional advertisement for Adidas footwear using earthy tones, textured backgrounds, and strong typography. The layout emphasizes product visibility and discount highlights while maintaining a premium brand appearance.",
      tags: ["FIGMA", "ADVERTISEMENT", "BRANDING", "PRODUCT DESIGN"],
      status: "COMPLETED",
      links: {
        drive: "https://drive.google.com/file/d/1jkKskkgPqC3AB5JbqxxO7jketfPKew52/view"
      }
    }
  ];

  return (
    <div className="w-full h-full min-h-screen bg-black text-white relative flex flex-col items-center justify-start overflow-y-auto px-4 py-8 sm:px-8 sm:py-12 no-scrollbar">
      {/* Space Background Layer */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(245,169,208,0.08),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:40px_40px] opacity-25 pointer-events-none" />

      {/* Header Container */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-zinc-800 pb-6 mb-10 mt-4">
        <div className="text-center sm:text-left flex flex-col gap-4">
          <motion.h1
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="font-vcr text-yellow-400 text-6xl md:text-7xl lg:text-8xl tracking-wider uppercase drop-shadow-[0_2px_8px_rgba(250,204,21,0.3)]"
          >
            GRAPHIC DESIGN
          </motion.h1>
          <p className="font-vcr text-lg md:text-xl text-zinc-400 uppercase tracking-widest">
            Creative Campaigns & Figma Artworks
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

      {/* Projects List */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col gap-12 mb-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="border border-zinc-700 bg-[#090909] rounded-xl py-16 px-8 md:px-12 shadow-2xl relative"
          >
            {/* Category Pill & Status Row */}
            <div className="flex items-center justify-between mb-6">
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

            {/* Project Title */}
            <h2 className="font-vcr text-4xl md:text-5xl text-white tracking-wide group-hover:text-yellow-400 transition-colors duration-200 uppercase mb-8 leading-tight">
              {project.title}
            </h2>

            {/* Description */}
            <div className="max-w-5xl">
              <p className="font-vcr text-xl leading-loose text-white/90 mb-8">
                {project.description}
              </p>
            </div>

            {/* View Project Button */}
            {project.links && (
              <div className="flex gap-4 mt-8 mb-5">
                {Object.entries(project.links).map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 border-2 border-[#FFD84D] bg-[#FFD84D] text-black rounded-md font-vcr text-base tracking-wide transition-all duration-300 hover:bg-[#2563EB] hover:border-[#2563EB] hover:text-white hover:shadow-[0_0_12px_rgba(37,99,235,0.6)] select-none"
                  >
                    VIEW PROJECT ↗
                  </a>
                ))}
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-5">
              {project.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex} 
                  className="font-vcr border border-white rounded-full px-4 py-1 text-sm text-white tracking-wide"
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
