"use client";

import { useRef, useState } from "react";

const screens = [
{
  id: 1,
  label: "Login in our WebApp",
  sublabel: "LOGIN",
  tag: "Step 1",
  color: "#c8ff00",
  image: "/images/step1.jpg"
},
{
  id: 2,
  label: "Describe Your Project",
  sublabel: "WEBSITE DESCRIPTION",
  tag: "Step 2",
  color: "#c8ff00",
  image: "/images/step2.jpg"
},
{
  id: 3,
  label: "Project Details",
  sublabel: "Design Brief",
  tag: "Step 3",
  color: "#c8ff00",
  image: "/images/step3.jpg"
},
{
  id: 4,
  label: "Auto Estimate",
  sublabel: "Instant Pricing",
  tag: "Step 4",
  color: "#c8ff00",
  image: "/images/step4.jpg"
}];


export default function AppShowcaseSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const progress = scrollLeft / (scrollWidth - clientWidth);
    setActiveIndex(Math.round(progress * (screens.length - 1)));
  };

  return (
    <section className="relative py-24 overflow-hidden bg-[#080808]">
      {/* Grid bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
          "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }} />


      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="font-[family-name:var(--font-space-grotesk)] text-[#c8ff00] text-xs uppercase tracking-[0.25em] mb-4">
            ~ How It Works ~
          </p>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold text-white leading-tight">
            From idea to live site
            <br />
            <span className="text-[#c8ff00]">in 4 simple steps.</span>
          </h2>
          <p className="mt-4 text-[#666] text-base font-[family-name:var(--font-inter)] max-w-lg mx-auto">
            Our booking system walks you through everything. No calls required
            to get started.
          </p>
        </div>

        {/* Step indicators */}
        <div className="flex justify-center gap-2 mb-10">
          {screens.map((_, i) =>
          <button
            key={i}
            onClick={() => {
              if (scrollRef.current) {
                const itemWidth =
                scrollRef.current.scrollWidth / screens.length;
                scrollRef.current.scrollTo({
                  left: itemWidth * i,
                  behavior: "smooth"
                });
              }
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
            i === activeIndex ?
            "w-8 bg-[#c8ff00]" :
            "w-1.5 bg-[#333]"}`
            } />

          )}
        </div>

        {/* Horizontal scroll container */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>

          {screens.map((screen, i) =>
          <div
            key={screen.id}
            className="flex-none snap-center"
            style={{ width: "clamp(280px, 80vw, 340px)" }}>

              {/* Card container */}
              <div
              className={`relative bg-[#0f0f0f] border rounded-3xl overflow-hidden transition-all duration-300 ${
              i === activeIndex ?
              "border-[#c8ff00]/30 shadow-[0_0_40px_rgba(200,255,0,0.1)]" :
              "border-[#1a1a1a]"}`
              }>

                {/* Step badge */}
                <div className="absolute top-4 left-4 z-10 bg-[#1a2a0a] border border-[#c8ff00]/30 rounded-full px-3 py-1 flex items-center gap-1">
                  <span className="text-[#c8ff00] text-xs font-semibold font-[family-name:var(--font-space-grotesk)]">
                    {screen.tag}
                  </span>
                </div>

                {/* Phone mockup */}
                <div className="flex justify-center pt-6 pb-2 px-6">
                  <PhoneFrame>
                    <img
                        src={screen.image}
                        alt={screen.label}
                        className="w-full h-full object-cover"
                    />
                  </PhoneFrame>
                </div>

                {/* Label */}
                <div className="px-6 pb-6 pt-2">
                  <p className="text-[#666] text-xs uppercase tracking-widest font-[family-name:var(--font-inter)] mb-1 !whitespace-pre-line !whitespace-pre-line">
                    {screen.sublabel}
                  </p>
                  <h3 className="text-white text-xl font-bold font-[family-name:var(--font-space-grotesk)] !whitespace-pre-line !whitespace-pre-line">
                    {screen.label}
                  </h3>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <a
            href="https://book.sovereignsites.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#c8ff00] text-black font-[family-name:var(--font-space-grotesk)] font-bold text-base px-8 py-4 rounded-full hover:bg-[#d4ff1a] transition-all duration-200 hover:scale-105 shadow-[0_0_30px_rgba(200,255,0,0.2)]">

            Try the Booking App →
          </a>
          <p className="mt-3 text-[#555] text-sm font-[family-name:var(--font-inter)]">
            book.sovereignsites.in · Free to start
          </p>
        </div>
      </div>
    </section>);

}

function PhoneFrame({ children }: {children: React.ReactNode;}) {
  return (
    <div
      className="relative rounded-[30px] border border-[#222] bg-[#0a0a0a] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
      style={{ width: "220px", height: "440px" }}>

      {/* Dynamic island */}
      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-full z-10" />
      {/* Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }} />

      <div className="relative h-full pt-10 overflow-hidden">
        {children}
      </div>
    </div>);

}
