"use client";

import Image from "next/image";

const testimonials = Array.from({ length: 8 }, () => ({
  image: "/testimonial-1.png",
  text: "A nice €2K profit on my account! A real gamechanger.",
  name: "Sasha K.",
}));

export default function TestimonialsSection() {
  const items = [...testimonials, ...testimonials];

  return (
    <section className="relative overflow-hidden bg-black px-4 pb-20 pt-10 sm:px-6 sm:pb-24 sm:pt-14 lg:py-28">
      <div className="mx-auto max-w-[1700px]">
        <div className="mb-5 flex justify-center">
          <div className="rounded-full border border-[#00F5A0]/30 bg-[#00F5A0]/10 px-5 py-2 text-xs font-semibold text-[#00F5A0]">
            ● Testimonials
          </div>
        </div>

        <h2 className="font-clash mb-10 text-center text-[40px] font-semibold leading-[1] tracking-[-1.5px] text-white sm:text-[48px] md:mb-14 md:text-[64px] md:tracking-[-2px]">
          What our users say.
        </h2>

        <div className="relative overflow-hidden">
          <div className="flex w-max animate-testimonial-scroll gap-4 sm:gap-6 lg:gap-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="w-[245px] shrink-0 rounded-2xl border border-white/10 bg-[#0B0B0B] p-2.5 sm:w-[280px] sm:p-3 lg:w-[300px]"
              >
                <div className="relative h-[390px] overflow-hidden rounded-xl border border-white/10 sm:h-[460px] lg:h-[520px]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>

                <div className="px-2 pb-2 pt-4 sm:pt-5">
                  <p className="text-[13px] leading-relaxed text-white/90 sm:text-[15px]">
                    {item.text}
                  </p>

                  <p className="mt-4 text-sm text-white/80 sm:mt-5">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}