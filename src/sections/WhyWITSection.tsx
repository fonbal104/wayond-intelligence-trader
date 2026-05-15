"use client";

import Image from "next/image";
import { Zap } from "lucide-react";

export default function WhyWITSection() {
  return (
    <section className="grid-background relative overflow-hidden bg-black px-6 py-28">
      <div className="mx-auto max-w-[1600px]">
        <div className="relative mb-28 overflow-hidden rounded-[32px] border border-white/10">
        <Image
            src="/why-wit-bg.jpg"
            alt=""
            width={1800}
            height={1200}
            priority
            className="h-[720px] w-full object-cover object-center"
        />

        {/* Dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
        </div>

        <div id="why-wit" className="grid items-center gap-20 lg:grid-cols-[1fr_0.9fr] px-6 py-28">

        {/* LEFT CONTENT */}
        <div>
            <h2 className=" font-clash mb-14 text-[42px] font-semibold leading-[1] tracking-[-2px] text-white md:text-[60px] ">
                Why{" "}
                <span className="bg-gradient-to-r from-[#00F0FF] to-[#00F5A0] bg-clip-text text-transparent">
                    WIT?
                </span>
            </h2>

            <p className="mt-10 max-w-3xl text-[18px] leading-[1.8] text-white/80">
            WIT is a one-of-a-kind trading tool born from the unique traders’
            network that Wayond has built. Insights that cannot be reached
            through ordinary information, real, fresh, and practically valuable
            insights.
            </p>

            <div className="mt-10 flex flex-wrap gap-10 text-[18px] text-[#00F5A0]">
            <span>● A network like no other.</span>
            <span>● Information like no other.</span>
            <span>● An advantage like no other.</span>
            </div>

            <p className="mt-10 max-w-3xl text-[18px] leading-[1.8] text-white/80">
            WIT gathers these insights from Wayond’s unique perspective and
            turns them into something truly meaningful for traders.
            </p>

            <div className="mt-12">
                <button className="btn-primary">
                    <Zap size={17} className="text-black" />
                    Activate for free
                </button>
            </div>
        </div>

        {/* RIGHT LOGO */}
        <div className="flex items-center justify-center lg:justify-end">
            <Image
            src="/whyWIT-logo.png"
            alt="WAYOND Intelligence Trader"
            width={900}
            height={400}
            className="h-auto w-[760px] max-w-full"
            />
        </div>

        </div>
      </div>
    </section>
  );
}