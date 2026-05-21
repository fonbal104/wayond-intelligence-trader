"use client";

import { Send, BadgeInfo } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-black px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1600px]">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <h2 className="font-clash text-[40px] font-semibold leading-[1] tracking-[-1.5px] text-white sm:text-[48px] md:text-[64px] md:tracking-[-2px]">
              About Us
            </h2>

            <div className="w-fit rounded-full border border-[#00F5A0]/60 bg-[#00F5A0]/10 px-4 py-2 text-[11px] leading-relaxed text-white/90 sm:text-xs">
              ● €25M+ connected capital · 6.000+ Traders Trust Wayond Intelligence Indicator
            </div>
          </div>

          <div className="max-w-[1350px] space-y-6 sm:space-y-8">
            <p className="text-[16px] leading-[1.75] text-white/85 sm:text-[18px] md:text-[22px]">
              In just two years, Wayond has grown into one of Dubai&apos;s leading Forex
              media platforms. What has supported this growth is a powerful network of
              traders, analysts, and industry professionals active at the front line of
              the industry. And with a strong desire to return this advantage to Wayond
              members, we developed WIT.
            </p>

            <p className="text-[16px] leading-[1.75] text-white/85 sm:text-[18px] md:text-[22px]">
              WIT is not just a tool. It is a weapon for traders, built by combining
              Wayond&apos;s network, knowledge, and practical power.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#" className="btn-primary w-full sm:w-auto">
              <BadgeInfo size={17} className="text-black" />
              Instagram
            </a>

            <a href="#" className="btn-primary w-full sm:w-auto">
              <Send size={17} className="text-black" />
              Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}