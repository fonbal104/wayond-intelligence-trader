"use client";

import { Send, BadgeInfo } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-black px-6 py-24">
      <div className="mx-auto max-w-[1600px]">
        <div className="rounded-xl border border-white/10 bg-white/[0.04] px-8 py-8">
          <div className="mb-5 flex items-start justify-between gap-6">
            <h2 className=" font-clash mb-14 text-center text-[42px] font-semibold leading-[1] tracking-[-2px] text-white md:text-[44px] ">
                About Us
            </h2>

            <div className="hidden rounded-full border border-[#00F5A0]/60 bg-[#00F5A0]/10 px-4 py-2 text-xs text-white/90 md:block">
              ● €25M+ connected capital · 6.000+ Traders Trust Wayond Intelligence Indicator
            </div>
          </div>

          <div className="mt-10 space-y-8">
            <p className="text-[18px] leading-[1.7] text-white/85">
            In just two years, Wayond has grown into one of Dubai&apos;s
            leading Forex media platforms. What has supported this growth is a
            powerful network of traders, analysts, and industry professionals
            active at the front line of the industry. And with a strong desire
            to return this advantage to Wayond members, we developed WIT.
            </p>

            <p className="text-[18px] leading-[1.7] text-white/85">
            WIT is not just a tool. It is a weapon for traders, built by
            combining Wayond&apos;s network, knowledge, and practical power.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md bg-[#00F5A0] px-5 py-3 text-sm font-semibold text-black transition hover:scale-105"
            >
              <BadgeInfo size={15} className="text-black" />
              Instagram
            </a>

            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md bg-[#00F5A0] px-5 py-3 text-sm font-semibold text-black transition hover:scale-105"
            >
              <Send size={15} className="text-black" />
              Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}