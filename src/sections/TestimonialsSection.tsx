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
    <section className="relative overflow-hidden bg-black px-6 py-25">
      <div className="mx-auto max-w-[1700px]">
        <div className="mb-6 flex justify-center">
          <div className="rounded-full border border-[#00F5A0]/30 bg-[#00F5A0]/10 px-5 py-2 text-xs font-semibold text-[#00F5A0]">
            ● Testimonials
          </div>
        </div>

        <h2 className=" font-clash mb-16 text-center text-[42px] font-semibold leading-[1] tracking-[-2px] text-white md:text-[44px] ">
            What our users say.
        </h2>

        <div className="relative">

          <div className="flex w-max animate-testimonial-scroll gap-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="w-[300px] shrink-0 rounded-2xl border border-white/10 bg-[#0B0B0B] p-3"
              >
                <div className="relative h-[520px] w-full overflow-hidden rounded-xl border border-white/10">
                    <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        unoptimized
                        className="object-cover"
                    />
                </div>

                <div className="px-2 pb-2 pt-5">
                  <p className="text-[15px] leading-relaxed text-white/90">
                    {item.text}
                  </p>

                  <p className="mt-5 text-sm text-white/80">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}