"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="grid-background relative flex min-h-[560px] items-center justify-center overflow-hidden bg-black px-5 pb-16 pt-14 sm:min-h-[620px] md:px-6 md:pt-20 lg:min-h-[700px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,245,160,0.08),transparent_45%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.h1
          className="font-clash text-[46px] font-semibold leading-[1.05] tracking-[-1.5px] text-white sm:text-[56px] md:text-[64px] lg:text-[72px]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Wayond
          <br />
          <span className="bg-gradient-to-r from-[#00F0FF] to-[#00F5A0] bg-clip-text text-transparent">
            Intelligence Trader
          </span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-[720px] text-[15px] leading-relaxed text-white/70 sm:text-base md:mt-7 md:text-lg"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          A next-generation trading tool created for traders who pursue results.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row md:mt-10"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <button className="btn-primary h-[48px] px-6 text-[14px] w-full sm:w-auto">
            <Zap size={17} className="text-black" />
            Activate for free
          </button>

          <button className="btn-secondary h-[48px] px-6 text-[14px] w-full sm:w-auto">
            View results
          </button>
        </motion.div>
      </div>
    </section>
  );
}