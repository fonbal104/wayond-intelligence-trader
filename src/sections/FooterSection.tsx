"use client";

import { Zap } from "lucide-react";

export default function FooterSection() {
  return (
    <footer
      id="get-started"
      className="relative bg-black px-4 pb-8 pt-20 sm:px-6 sm:pt-24 lg:pt-28"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
            <h2 className="font-clash max-w-2xl text-[40px] font-semibold leading-[1] tracking-[-1.5px] text-white sm:text-[48px] md:text-[64px] md:tracking-[-2px]">
              Let our algorithm
              <br />
              trade for you
            </h2>

            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/55 sm:text-base">
              Join hundreds of traders already using WAYOND Intelligence Trader.
            </p>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <button className="btn-primary w-full sm:w-auto">
                <Zap size={17} className="text-black" />
                Activate for free
              </button>

              <button className="btn-orange w-full sm:w-auto">
                Join Wayond Plus
              </button>
            </div>

            <p className="mt-12 text-[18px] leading-snug text-white/80 sm:mt-16 sm:text-xl">
              AI-driven gold market trading.
              <br />
              <span className="font-semibold text-white">
                Fully automated, proven results.
              </span>
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            <FooterLinks
              title="Page"
              items={["Performance", "Features", "About", "Calculator"]}
            />

            <FooterLinks
              title="Legal"
              items={["Disclaimer", "License", "Risk warning"]}
              bordered
            />

            <FooterLinks
              title="Follow Wayond"
              items={["Telegram", "Instagram", "YouTube"]}
              bordered
            />
          </div>
        </div>

        <p className="mt-16 text-[14px] leading-relaxed text-white/45 sm:mt-20 sm:text-base lg:mt-24">
          No Telegram? Download the App:{" "}
          <a
            href="https://apps.apple.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition hover:text-white"
          >
            IOS
          </a>{" "}
          /{" "}
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

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs leading-relaxed text-white/35 sm:mt-16 sm:pt-8 sm:text-sm">
          © {new Date().getFullYear()} Wayond. All rights reserved. | Wayond Plus
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({
  title,
  items,
  bordered,
}: {
  title: string;
  items: string[];
  bordered?: boolean;
}) {
  return (
    <div
      className={`${
        bordered ? "sm:border-l sm:border-white/10 sm:pl-8" : ""
      }`}
    >
      <h3 className="mb-5 font-semibold text-white sm:mb-6">{title}</h3>

      <ul className="space-y-4 text-sm text-white/45 sm:space-y-5">
        {items.map((item) => (
          <li key={item} className="transition hover:text-white">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function LegalBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="mt-8 sm:mt-10">
      <h4 className="mb-3 text-sm font-medium text-white/70 sm:text-base">
        {title}
      </h4>

      <p className="text-[11px] leading-[1.8] text-white/35 sm:text-xs md:text-[13px]">
        {text}
      </p>
    </div>
  );
}