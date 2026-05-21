"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Wayond Intelligence Indicator Algo?",
    answer:
      "Wayond Intelligence Indicator is a trading intelligence tool designed to help traders understand market behavior through structured insights, indicators, and performance analytics.",
  },
  {
    question: "Is Wayond Intelligence Indicator Algo free?",
    answer:
      "You can activate access based on the available plan or promotional offer. Full onboarding details are provided after registration.",
  },
  {
    question: "How much capital do I need to start?",
    answer:
      "The required starting capital depends on your trading setup, broker, and risk preferences. Most users begin with a moderate account size.",
  },
  {
    question: "What brokers are supported?",
    answer:
      "Wayond Intelligence Indicator supports most major MT4 and MT5 compatible brokers worldwide.",
  },
  {
    question: "How do I connect to the algorithm?",
    answer:
      "After registration, you will receive a full onboarding process with setup instructions and support guidance.",
  },
  {
    question: "What return can I expect?",
    answer:
      "Returns vary depending on market conditions and risk settings. Historical performance statistics are shown throughout the platform.",
  },
  {
    question: "Can I stop at any time?",
    answer:
      "Yes. You remain fully in control of your account and can pause or disconnect the strategy whenever you choose.",
  },
  {
    question: "Is my money safe?",
    answer:
      "Your funds remain inside your own broker account at all times. The algorithm does not directly hold client capital.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-black px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="flex flex-col justify-center">
          <div className="mb-5 inline-flex w-fit rounded-full border border-[#00F5A0]/30 bg-[#00F5A0]/10 px-5 py-2 text-xs font-semibold text-[#00F5A0]">
            ● FAQ
          </div>

          <h2 className="font-clash max-w-xl text-[40px] font-semibold leading-[1] tracking-[-1.5px] text-white sm:text-[48px] md:text-[64px] md:tracking-[-2px]">
            Frequently Asked Questions.
          </h2>

          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-white/70 sm:text-lg">
            Got questions? Here are the ones we get most often.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#00F5A0] bg-[#00F5A0]/5"
                    : "border-white/10 bg-[#050505]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-8 sm:py-7"
                >
                  <span className="text-[15px] font-medium leading-snug text-white sm:text-lg">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={22}
                    className={`shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-[14px] leading-relaxed text-white/70 sm:px-8 sm:pb-8 sm:text-[16px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}