"use client";

import { Zap } from "lucide-react";

const stats = [
  ["Win-Rate", "10%", "100% Month Over Month Winrate"],
  ["Avg. Monthly Return", "1.12%", "Consistent Every Month"],
  ["2024 Return", "1.17%", "Vs S&P 500: 21,08%"],
  ["2025 Return", "10.14%", "Vs S&P 500: 23,31%"],
  ["Total Return", "10.14%", "Since Launch"],
  ["Max Drawdown", "0.12%", "Risk Management"],
];

const comparisons = [
  ["Wayond Intelligence Indicator", "307%", 2],
  ["S&P 500", "31%", 2],
  ["Bitcoin", "81%", 2],
];

export default function PerformanceSection() {
  return (
    <section id="performance" className="relative bg-black px-6 pb-28 pt-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-8 flex justify-center">
          <div className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm text-white">
            ● Performance Statistics
          </div>
        </div>

        <h2
            className=" font-clash mb-14 text-center text-[42px] font-semibold leading-[1] tracking-[-2px] text-white md:text-[44px] ">
            Proven Returns at Scale.
        </h2>

        <div className="grid gap-8 xl:grid-cols-[2fr_1fr]">
          <div className="rounded-2xl border border-white/15 bg-[#101010] p-8">
            <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr]">
              <div className="grid gap-8 xl:grid-cols-2">
                {stats.map(([label, value, note]) => (
                  <div key={label} className="min-w-0 rounded-xl bg-black p-8">
                    <p className="text-[17px] text-white">{label}</p>

                    <h3 className="mt-4 text-[32px] font-black leading-none text-[#00F5A0]">
                      {value}
                    </h3>

                    <div className="mt-5 inline-flex max-w-full items-center whitespace-nowrap rounded-full border border-[#00F5A0] px-4 py-2 text-xs text-white">
                      <span className="truncate">● {note}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-white/15 bg-black p-8">
                <h3 className="text-[18px] leading-snug text-white">
                  Since Launch — Wayond Intelligence Indicator
                  <br />
                  vs Market
                </h3>

                <div className="mt-8 space-y-7">
                  {comparisons.map(([name, value, width]) => (
                    <div key={name as string}>
                      <div className="mb-3 flex justify-between text-[16px] text-white">
                        <span>{name}</span>
                        <span>{value}</span>
                      </div>

                      <div className="h-2 rounded-full bg-white/10">
                        <div
                          className="h-2 rounded-full bg-[#00F5A0]"
                          style={{ width: `${width}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-7 border-t border-white/10 pt-5">
                  <p className="text-[16px] text-white">
                    Users & Connected Capital
                  </p>

                  <div className="mt-4 space-y-3 text-[16px] text-white">
                    <div className="flex justify-between">
                      <span>Active users</span>
                      <span>6.000+</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Connected capital</span>
                      <span>€ 25M+</span>
                    </div>
                  </div>
                </div>

                <div className="mt-7 rounded-xl border border-[#00F5A0] bg-white/[0.03] p-5">
                  <div className="mb-5 flex justify-between text-xs text-white">
                    <span>Return In 2026</span>
                    <span className="rounded-full border border-[#00F5A0] px-4 py-1 text-[#00F5A0]">
                      ● Year To Date
                    </span>
                  </div>

                  <p className="text-[28px] font-light text-white">26,12%</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-2xl border border-white/15 bg-[#101010] p-8">
              <div className="mb-8 flex items-center justify-between">
                <h3 className="text-[22px] font-bold text-white">
                  Live Performance
                </h3>

                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white">
                  ● Active
                </span>
              </div>

              <div className="rounded-xl border border-white/15 bg-black p-6">
                <svg viewBox="0 0 500 320" className="h-[300px] w-full">
                  <defs>
                    <linearGradient id="barFade" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0.04" />
                    </linearGradient>
                  </defs>

                  {[60, 120, 180, 240].map((y) => (
                    <line
                      key={y}
                      x1="40"
                      x2="470"
                      y1={y}
                      y2={y}
                      stroke="white"
                      strokeOpacity="0.1"
                      strokeDasharray="10 10"
                    />
                  ))}

                  {Array.from({ length: 70 }).map((_, i) => (
                    <line
                      key={i}
                      x1={40 + i * 6}
                      x2={40 + i * 6}
                      y1={300}
                      y2={280 - Math.min(i * 3.5, 220)}
                      stroke="url(#barFade)"
                      strokeWidth="1"
                    />
                  ))}

                  <path
                    d="M40 250 L105 170 Q130 138 160 175 L190 205 L245 205 Q275 205 295 160 L330 150 L390 150 L470 35"
                    fill="none"
                    stroke="#00F5A0"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <circle cx="470" cy="35" r="7" fill="#00F5A0" />
                </svg>
              </div>

              <div className="mt-4 flex gap-8 text-xs text-white">
                <span className="text-white">━ Realistic</span>
                <span className="text-white/60">- - - Expected</span>
              </div>
            </div>

            <div className="mt-12">
              <p className="max-w-md text-[18px] leading-snug text-white">
                Don&apos;t just take our word for it, Fully Transparent.
                Independently Verified.
              </p>

              <div className="mt-8 flex flex-wrap gap-6">
                <button className="btn-primary">
                  <Zap size={17} className="text-black" />
                  Activate for free
                </button>

                <button className="btn-orange">
                  Join Wayond Plus
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}