"use client";

import { motion } from "framer-motion";
import Particles from "./Particles";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1A1A1A 0%, #2D1B00 50%, #D4920B 100%)",
      }}
    >
      <Particles />

      <div className="relative z-10 text-center px-6">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          모래재꿀벌
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-honey-light mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          자연 그대로의 순수한 꿀
        </motion.p>

        <motion.a
          href="#products"
          className="inline-block px-8 py-4 bg-honey text-brown font-bold rounded-full hover:bg-honey-light transition-colors text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          우리 꿀 보러가기
        </motion.a>
      </div>
    </section>
  );
}
