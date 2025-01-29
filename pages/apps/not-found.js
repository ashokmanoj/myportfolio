import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-white bg-gray-900">
      <motion.h1
        className="mb-4 text-6xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.h1>
      <motion.p
        className="mb-6 text-lg text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Oops! The page you're looking for doesn't exist.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Link href="/">
          <Button className="flex items-center gap-2 px-6 py-3 text-white transition bg-blue-600 rounded-lg shadow-lg hover:bg-blue-500">
            <ArrowLeft size={18} /> Go Back Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
