"use client";

const stats = [
  ["Win-Rate", "10%", "100% Month Over Month Winrate"],
  ["Avg. Monthly Return", "1.12%", "Consistent Every Month"],
  ["2024 Return", "1.17%", "Vs S&P 500: 21,08%"],
  ["2025 Return", "10.14%", "Vs S&P 500: 23,31%"],
];

const comparisons = [
  ["Wayond Intelligence Indicator", "307%", 2],
  ["S&P 500", "31%", 2],
  ["Bitcoin", "81%", 2],
];

export default function PerformanceSection() {
  return (
    <section id="performance" className="relative bg-black px-6 pb-28 pt-36">
      <div className="mx-auto max-w-[1380px]">
        <div className="mb-12 flex justify-center">
          <div className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm text-white">
            ● Performance Statistics
          </div>
        </div>

        <h2 className="font-clash mb-20 text-center text-[42px] font-semibold leading-[1] tracking-[-2px] text-white md:text-[56px]">
          Proven Returns at Scale.
        </h2>

        <div className="grid gap-5 xl:grid-cols-[1.45fr_0.68fr]">
          {/* LEFT CARD */}
          <div className="rounded-[26px] border border-white/10 bg-[#0F0F0F] p-5">
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.95fr]">
              <div className="grid gap-6 sm:grid-cols-2">
                {stats.map(([label, value, note]) => (
                  <div key={label} className="min-w-0 rounded-[18px] bg-black p-5">
                    <p className="text-[15px] text-white/90">{label}</p>

                    <h3 className="mt-3 text-[24px] font-semibold leading-none text-[#00F5A0]">
                      {value}
                    </h3>

                    <div className="mt-4 inline-flex max-w-full items-center whitespace-nowrap rounded-full border border-[#00F5A0] px-3 py-[7px] text-[10px] font-medium text-white">
                      <span className="truncate">● {note}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* COMPARISON CARD */}
              <div className="rounded-[18px] border border-white/10 bg-black p-5">
                <h3 className="text-[16px] font-medium leading-snug text-white">
                  Since Launch — Wayond Intelligence Indicator
                  <br />
                  vs Market
                </h3>

                <div className="mt-7 space-y-6">
                  {comparisons.map(([name, value, width]) => (
                    <div key={name as string}>
                      <div className="mb-3 flex justify-between gap-4 text-[15px] text-white">
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

                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="text-[15px] text-white">
                    Users & Connected Capital
                  </p>

                  <div className="mt-4 space-y-3 text-[15px] text-white">
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
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="rounded-[26px] border border-white/10 bg-[#0F0F0F] p-5">
            <div className="mb-7 flex items-center justify-between">
              <h3 className="font-clash text-[24px] font-semibold tracking-[-1px] text-white">
                Live Performance
              </h3>

              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white">
                ● Active
              </span>
            </div>

            <div className="rounded-[18px] border border-white/10 bg-black p-5">
              <svg viewBox="0 0 500 320" className="h-[250px] w-full">
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
              <span>━ Realistic</span>
              <span className="text-white/60">- - - Expected</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}