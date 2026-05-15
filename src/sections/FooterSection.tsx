"use client";

import { Zap } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="relative bg-black px-6 pb-10 pt-28">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2
                className="
                    font-clash
                    text-[42px]
                    font-semibold
                    leading-[1]
                    tracking-[-2px]
                    text-white
                    md:text-[44px]
                "
                >
                Let our algorithm
                <br />
                trade for you
            </h2>

            <p className="mt-5 text-base text-white/50">
              Join hundreds of traders already using WAYOND Intelligence Trader.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button className="flex items-center gap-3 rounded-md bg-[#00F5A0] px-8 py-4 text-sm font-semibold text-black shadow-[0_18px_45px_rgba(0,245,160,0.25)]">
                <Zap size={16} className="text-black" />
                Activate for free
              </button>

              <button className="rounded-md bg-gradient-to-r from-[#FFD400] to-[#FF3838] px-8 py-4 text-sm font-semibold text-black">
                Join Wayond Plus
              </button>
            </div>

            <p className="mt-16 text-lg leading-snug text-white/80">
              AI-driven gold market trading.
              <br />
              <span className="font-bold text-white">
                Fully automated, proven results.
              </span>
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <h3 className="mb-6 font-bold text-white">Page</h3>
              <ul className="space-y-5 text-white/45">
                <li>Performance</li>
                <li>Features</li>
                <li>About</li>
                <li>Calculator</li>
              </ul>
            </div>

            <div className="border-l border-white/10 pl-8">
              <h3 className="mb-6 font-bold text-white">Legal</h3>
              <ul className="space-y-5 text-white/45">
                <li>Disclaimer</li>
                <li>License</li>
                <li>Risk warning</li>
              </ul>
            </div>

            <div className="border-l border-white/10 pl-8">
              <h3 className="mb-6 font-bold text-white">Follow Wayond</h3>
              <ul className="space-y-5 text-white/45">
                <li>Telegram</li>
                <li>Instagram</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-24 text-base text-white/45">
            No Telegram? Download the App:{" "}

            <a
                href="https://apps.apple.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition hover:text-white"
            >
                IOS
            </a>

            {" / "}

            <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition hover:text-white"
            >
                ANDROID
            </a>
        </p>

        <LegalBlock
          title="Disclaimer"
          text="Wayond Intelligence Indicator (WII) is an independent market intelligence and trading analysis tool and is not a brokerage, investment firm, or proprietary trading company. WII is not affiliated with, endorsed by, or sponsored by any brokerage or proprietary trading firm mentioned on this platform. All indicators, signals, analytics, and AI-driven insights provided by WII are intended strictly for informational and educational purposes only and should not be considered financial, investment, or trading advice. We are not licensed financial advisors, brokers, or portfolio managers. Trading forex, cryptocurrencies, commodities, and other financial markets carries a high level of risk and may not be suitable for all investors. There is always the possibility of losing part or all of your investment. You should only trade with capital you can afford to lose."
        />

        <LegalBlock
          title="Licence"
          text="Wayond Intelligence Indicator (WII) operates as a market strategy and intelligence provider focused on AI-driven trading analytics and market research. WII is committed to transparency, compliance, and maintaining professional operational standards across its services and platforms. For legal, compliance, or partnership-related inquiries, users can contact the official support and compliance team through the designated communication channels provided on the platform."
        />

        <LegalBlock
          title="Risk Warning"
          text="Trading Contracts for Difference (CFDs), forex, cryptocurrencies, and other leveraged financial instruments involves substantial risk and may not be suitable for all investors. Market volatility can result in rapid losses, and traders should carefully assess their financial situation and risk tolerance before participating in any trading activity. Wayond Intelligence Indicator does not guarantee profits, winning trades, or future performance. Past performance, projected growth, or historical results do not guarantee future outcomes."
        />

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-white/35">
        © {new Date().getFullYear()} Wayond. All rights reserved. | Wayond Plus
        </div>
      </div>
    </footer>
  );
}

function LegalBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="mt-8">
      <h4 className="mb-3 text-base text-white/70">{title}</h4>
      <p className="text-xs leading-relaxed text-white/35">{text}</p>
    </div>
  );
}