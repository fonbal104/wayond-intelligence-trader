"use client";

import Image from "next/image";
import Link from "next/link";
import { Zap } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/wayondIT-logo.png"
            alt="WAYOND Intelligence Trader"
            width={240}
            height={70}
            priority
            className="h-auto w-[190px]"
          />
        </Link>

        <div className="hidden items-center gap-12 lg:flex">
          {[
            ["Performance", "#performance"],
            ["Why WIT?", "#why-wit"],
            ["About Us", "#about"],
            ["FAQ", "#faq"],
            ["Get Started", "#get-started"],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="text-[15px] font-semibold text-white/85 transition hover:text-[#00F5A0]"
            >
              {label}
            </Link>
          ))}
        </div>

        <button className="btn-primary px-8 py-4 text-[15px]">
          <Zap size={17} className="text-black" />
          Start now
        </button>
      </div>
    </nav>
  );
}