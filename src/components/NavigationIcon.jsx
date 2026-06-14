/**
 * Reusable Navigation Icon component representing the circular buttons in the Figma design.
 */
export default function NavigationIcon({ type, onClick, className = "", active = false }) {
  // Render exact icon shapes using vector paths for precise reproduction
  const renderIcon = () => {
    switch (type) {
      case 'projects':
        // CRT monitor/screen icon from Figma
        return (
          <svg className="w-9 h-9 text-white group-hover:scale-110 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="13" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
        );
      case 'certificates':
        // Podium/Stairs bar chart icon from Figma
        return (
          <svg className="w-9 h-9 text-white group-hover:scale-110 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Step 1 */}
            <rect x="3" y="14" width="5" height="6" rx="1" />
            {/* Step 2 */}
            <rect x="9" y="8" width="5" height="12" rx="1" />
            {/* Step 3 */}
            <rect x="15" y="3" width="5" height="17" rx="1" />
          </svg>
        );
      case 'about':
        // A circle with 'ABOUT' text inside
        return (
          <span className="font-joffrey text-white text-base font-bold tracking-tight select-none uppercase group-hover:scale-110 transition-transform duration-200">
            ABOUT
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <button
      onClick={onClick}
      className={`group relative flex items-center justify-center w-14 h-14 rounded-full border-2 border-white bg-transparent hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-200 ${
        active ? 'bg-white/25 shadow-[0_0_8px_rgba(255,255,255,0.5)]' : ''
      } ${className}`}
    >
      {renderIcon()}
    </button>
  );
}
