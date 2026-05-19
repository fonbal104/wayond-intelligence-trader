"use client";

import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Line,
  ComposedChart,
} from "recharts";

const stats = [
  ["Win-Rate", "10%", "100% Month Over Month Winrate"],
  ["Avg. Monthly Return", "1.12%", "Consistent Every Month"],
  ["2024 Return", "1.17%", "Vs S&P 500: 21,08%"],
  ["2025 Return", "10.14%", "Vs S&P 500: 23,31%"],
];

const comparisons = [
  ["Wayond Intelligence Indicator", "307%", 100],
  ["S&P 500", "31%", 12],
  ["Bitcoin", "81%", 28],
];

const performanceData = [
  { month: "Jan", realistic: 12, expected: 8, volume: 25 },
  { month: "Feb", realistic: 28, expected: 18, volume: 34 },
  { month: "Mar", realistic: 45, expected: 27, volume: 44 },
  { month: "Apr", realistic: 36, expected: 35, volume: 54 },
  { month: "May", realistic: 36, expected: 43, volume: 62 },
  { month: "Jun", realistic: 52, expected: 51, volume: 70 },
  { month: "Jul", realistic: 54, expected: 59, volume: 78 },
  { month: "Aug", realistic: 54, expected: 68, volume: 86 },
  { month: "Sep", realistic: 82, expected: 76, volume: 96 },
];

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-lg border border-white/10 bg-white px-3 py-2 text-black shadow-xl">
      <p className="text-[11px] text-black/50">{label}</p>
      <p className="text-sm font-semibold">
        {Number(payload[0].value).toFixed(2)}%
      </p>
    </div>
  );
}

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

              <div className="rounded-[18px] border border-white/10 bg-black p-5">
                <h3 className="text-[16px] font-medium leading-snug text-white">
                  Since Launch — Wayond Intelligence Indicator
                  <br />
                  vs Market
                </h3>

                <div className="mt-7 space-y-6">
                  {comparisons.map(([name, value, width]) => (
                    <div key={name}>
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

          <div className="rounded-[26px] border border-white/10 bg-[#0F0F0F] p-5">
            <div className="mb-7 flex items-center justify-between">
              <h3 className="font-clash text-[24px] font-semibold tracking-[-1px] text-white">
                Live Performance
              </h3>

              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white">
                ● Active
              </span>
            </div>

            <div className="h-[330px] rounded-[18px] border border-white/10 bg-black p-5">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={performanceData}>
                  <defs>
                    <linearGradient id="barFade" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0.04" />
                    </linearGradient>

                    <filter id="greenGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  <CartesianGrid
                    stroke="rgba(255,255,255,0.08)"
                    strokeDasharray="8 8"
                    vertical={false}
                  />

                  <XAxis dataKey="month" hide />
                  <YAxis hide domain={[0, 100]} />

                  <Tooltip
                    content={<CustomTooltip />}
                    cursor={{
                      stroke: "rgba(0,245,160,0.35)",
                      strokeDasharray: "4 4",
                    }}
                  />

                  <Bar
                    dataKey="volume"
                    barSize={3}
                    fill="url(#barFade)"
                    radius={[10, 10, 0, 0]}
                    isAnimationActive={true}
                    animationDuration={1000}
                    animationEasing="ease-out"
                  />

                  <Line
                    type="monotone"
                    dataKey="expected"
                    stroke="rgba(255,255,255,0.28)"
                    strokeWidth={2}
                    strokeDasharray="6 6"
                    dot={false}
                    isAnimationActive={true}
                    animationDuration={1200}
                    animationEasing="ease-out"
                  />

                  <Line
                    type="monotone"
                    dataKey="realistic"
                    stroke="#00F5A0"
                    strokeWidth={5}
                    dot={false}
                    filter="url(#greenGlow)"
                    isAnimationActive={true}
                    animationDuration={1400}
                    animationEasing="ease-out"
                    activeDot={{
                      r: 7,
                      fill: "#00F5A0",
                      stroke: "#00F5A0",
                      strokeWidth: 3,
                    }}
                  />
                </ComposedChart>
              </ResponsiveContainer>
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