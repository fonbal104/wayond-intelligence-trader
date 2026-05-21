"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Zap } from "lucide-react";

const navItems = [
  { label: "Performance", href: "#performance" },
  { label: "Why WIT?", href: "#why-wit" },
  { label: "About Us", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Get Started", href: "#get-started" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
          <Image
            src="/wayondIT-logo.png"
            alt="WAYOND Intelligence Trader"
            width={240}
            height={70}
            priority
            className="h-auto w-[150px] md:w-[190px]"
          />
        </Link>

        <div className="hidden items-center gap-12 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[15px] font-semibold text-white/85 transition hover:text-[#00F5A0]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button className="btn-primary !hidden xl:!inline-flex">
          <Zap size={17} className="text-black" />
          Start now
        </button>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-black/95 px-4 py-5 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-[1600px] flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-[15px] font-semibold text-white/85 transition hover:border-[#00F5A0]/40 hover:text-[#00F5A0]"
              >
                {item.label}
              </Link>
            ))}

            <button className="btn-primary mt-2 w-full">
              <Zap size={17} className="text-black" />
              Start now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}