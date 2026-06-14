import { motion } from 'framer-motion';

/**
 * Reusable Screen Transition wrapper using Framer Motion for clean, smooth screen entries and exits.
 */
export default function ScreenTransition({ children, className = "", scrollable = false }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`w-full min-h-screen flex flex-col items-center justify-center relative ${
        scrollable ? 'overflow-y-auto' : 'h-full overflow-hidden'
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
