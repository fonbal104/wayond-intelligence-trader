"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="grid-background relative flex min-h-[760px] items-center justify-center overflow-hidden bg-black px-6 pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,245,160,0.08),transparent_45%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-clash text-[60px] font-semibold leading-[1.2] tracking-[-2px] text-white md:text-[60px]">
            Wayond
            <br />
            <span className="bg-gradient-to-r from-[#00F0FF] to-[#00F5A0] bg-clip-text text-transparent">
              Intelligence Trader
            </span>
          </motion.h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/70">
          A next-generation trading tool created for traders who pursue results.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
          <button className="btn-primary">
            <Zap size={17} className="text-black" />
            Activate for free
          </button>

          <button className="btn-secondary">View results</button>
        </div>
      </div>
    </section>
  );
}