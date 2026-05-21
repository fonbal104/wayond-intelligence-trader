"use client";

import Image from "next/image";
import { Zap } from "lucide-react";

export default function WhyWITSection() {
  return (
    <section
      id="why-wit"
      className="grid-background relative overflow-hidden bg-black px-4 py-20 sm:px-6 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* TOP IMAGE */}
        <div className="relative mb-16 overflow-hidden rounded-[24px] border border-white/10 sm:mb-20 lg:mb-28 lg:rounded-[32px]">
          <Image
            src="/why-wit-bg.jpg"
            alt=""
            width={1800}
            height={1200}
            priority
            className="h-[320px] w-full object-cover object-center sm:h-[460px] lg:h-[720px]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
        </div>

        {/* CONTENT */}
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div>
            <h2 className="font-clash text-[40px] font-semibold leading-[1] tracking-[-1.5px] text-white sm:text-[48px] md:text-[64px] md:tracking-[-2px]">
              Why{" "}
              <span className="bg-gradient-to-r from-[#00F0FF] to-[#00F5A0] bg-clip-text text-transparent">
                WIT?
              </span>
            </h2>

            <p className="mt-8 max-w-3xl text-[17px] leading-[1.7] text-white/85 sm:text-[20px] lg:text-[22px]">
              WIT is a one-of-a-kind trading tool born from the unique traders’
              network that Wayond has built. Insights that cannot be reached
              through ordinary information, real, fresh, and practically
              valuable insights.
            </p>

            <div className="mt-8 flex flex-col gap-4 text-[15px] font-medium text-[#00F5A0] sm:flex-row sm:flex-wrap sm:gap-8 sm:text-[18px]">
              <span>● A network like no other.</span>
              <span>● Information like no other.</span>
              <span>● An advantage like no other.</span>
            </div>

            <p className="mt-8 max-w-3xl text-[17px] leading-[1.7] text-white/85 sm:mt-10 sm:text-[20px] lg:text-[22px]">
              WIT gathers these insights from Wayond’s unique perspective and
              turns them into something truly meaningful for traders.
            </p>

            <div className="mt-10 sm:mt-12">
              <button className="btn-primary w-full sm:w-auto">
                <Zap size={17} className="text-black" />
                Activate for free
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <Image
              src="/whyWIT-logo.png"
              alt="WAYOND Intelligence Trader"
              width={760}
              height={340}
              className="h-auto w-full max-w-[420px] sm:max-w-[520px] lg:max-w-[640px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}