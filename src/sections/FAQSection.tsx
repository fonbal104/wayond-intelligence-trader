"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Wayond Intelligence Indicator Algo?",
    answer:
      "HRC Algo is a fully automated trading algorithm that trades the gold market (XAU/USD) for you 24/5. It uses advanced quantitative strategies and strict risk management to deliver consistent results.",
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
    <section
      id="faq"
      className="relative overflow-hidden bg-black px-6 py-32"
    >
      <div className="mx-auto grid max-w-[1600px] gap-20 lg:grid-cols-[0.8fr_1.2fr]">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center">

          <div className="mb-6 inline-flex w-fit rounded-full border border-[#00F5A0]/30 bg-[#00F5A0]/10 px-5 py-2 text-xs text-[#00F5A0]">
            ● Calculator
          </div>

          <h2 className=" font-clash mb-14 text-center text-[42px] font-semibold leading-[1] tracking-[-2px] text-white md:text-[44px] ">
            Frequently
            <br />
            Asked Questions.
        </h2>

          <p className="mt-8 max-w-md text-lg leading-relaxed text-white/70">
            Got questions? Here are the ones we get most often.
          </p>

        </div>

        {/* FAQ LIST */}
        <div className="space-y-5">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#00F5A0] bg-[#00F5A0]/5"
                    : "border-white/10 bg-transparent"
                }`}
              >

                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? -1 : index)
                  }
                  className="flex w-full items-center justify-between px-8 py-7 text-left"
                >

                  <span className="text-lg font-medium text-white">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={22}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />

                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >

                  <div className="overflow-hidden">

                    <p className="px-8 pb-8 text-[16px] leading-relaxed text-white/70">
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