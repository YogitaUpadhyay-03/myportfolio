/**
 * Reusable Button component with double-outline hand-drawn look from the Figma design.
 */
export default function Button({ children, onClick, className = "", active = false }) {
  return (
    <button
      onClick={onClick}
      className={`group relative select-none p-[2px] border border-white/90 rounded-xl transition-all duration-200 focus:outline-none hover:scale-[1.03] active:scale-[0.98] ${
        active ? 'bg-white/10' : 'bg-transparent hover:bg-white/5'
      } ${className}`}
    >
      <div className="border border-white/95 rounded-lg px-6 py-2.5 flex items-center justify-center">
        <span className="font-joffrey text-white text-2xl tracking-wide select-none">
          {children}
        </span>
      </div>
    </button>
  );
}
