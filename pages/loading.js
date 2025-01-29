import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-gray-900">
      <motion.div
        className="w-16 h-16 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.p
        className="mt-4 text-lg text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Loading your portfolio...
      </motion.p>
    </div>
  );
}
