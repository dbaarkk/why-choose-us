"use client";

import { useRef, useState } from "react";

const screens = [
{
  id: 1,
  label: "Login in our WebApp",
  sublabel: "LOGIN",
  tag: "Step 1",
  color: "#c8ff00",
  content: <LoginScreen />
},
{
  id: 2,
  label: "Describe Your Project",
  sublabel: "WEBSITE DESCRIPTION",
  tag: "Step 2",
  color: "#c8ff00",
  content: <WebsiteTypeScreen />
},
{
  id: 3,
  label: "Project Details",
  sublabel: "Design Brief",
  tag: "Step 3",
  color: "#c8ff00",
  content: <DetailsScreen />
},
{
  id: 4,
  label: "Auto Estimate",
  sublabel: "Instant Pricing",
  tag: "Step 4",
  color: "#c8ff00",
  content: <EstimateScreen />
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
                  <PhoneFrame>{screen.content}</PhoneFrame>
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

      <div className="relative h-full pt-10 overflow-y-auto scrollbar-none">
        {children}
      </div>
    </div>);

}

function LoginScreen() {
  return (
    <div className="flex flex-col px-5 pt-4">
      <p className="font-[family-name:var(--font-space-grotesk)] text-white text-xl font-bold leading-tight mb-1">
        Welcome back
      </p>
      <p className="text-[#666] text-[10px] font-[family-name:var(--font-inter)] mb-5">
        Sign in to your Sovereign launchpad
      </p>

      {/* Inputs */}
      <div className="space-y-2.5">
        <div className="bg-[#141414] border border-[#222] rounded-xl px-3 py-2.5 flex items-center gap-2">
          <span className="text-[#555] text-xs">✉</span>
          <span className="text-[#555] text-[10px] font-[family-name:var(--font-inter)]">
            Email or Phone
          </span>
        </div>
        <div className="bg-[#141414] border border-[#222] rounded-xl px-3 py-2.5 flex items-center gap-2 justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#555] text-xs">🔒</span>
            <span className="text-[#555] text-[10px] font-[family-name:var(--font-inter)]">
              Password
            </span>
          </div>
          <span className="text-[#555] text-xs">👁</span>
        </div>
      </div>

      <button className="mt-4 w-full bg-[#c8ff00] text-black text-[11px] font-bold rounded-xl py-2.5 flex items-center justify-center gap-1 font-[family-name:var(--font-space-grotesk)]">
        Login →
      </button>

      <p className="mt-3 text-center text-[#555] text-[9px] font-[family-name:var(--font-inter)]">
        Don&apos;t have an account?{" "}
        <span className="text-[#c8ff00] font-semibold">Sign up</span>
      </p>
    </div>);

}

function WebsiteTypeScreen() {
  const types = [
  "Business Website",
  "Landing Page",
  "E-commerce Store",
  "Web Application",
  "Custom Dashboard",
  "SaaS Platform",
  "Portfolio",
  "Mobile PWA"];


  return (
    <div className="flex flex-col px-4 pt-2">
      <div className="flex items-center gap-2 mb-1">
        <button className="w-6 h-6 rounded-full bg-[#141414] flex items-center justify-center">
          <span className="text-white text-[9px]">←</span>
        </button>
        <div>
          <p className="text-white text-xs font-bold font-[family-name:var(--font-space-grotesk)]">
            Start Your Project
          </p>
          <p className="text-[#555] text-[8px] font-[family-name:var(--font-inter)]">
            STEP 1 OF 4
          </p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="flex gap-1 mb-3">
        {[1, 0, 0, 0].map((v, i) =>
        <div key={i} className="flex-1 h-0.5 rounded-full overflow-hidden bg-[#222]">
            <div
            className="h-full bg-[#c8ff00] rounded-full"
            style={{ width: v ? "100%" : "0%" }} />

          </div>
        )}
      </div>

      <div className="flex items-center gap-1.5 mb-2">
        <div className="w-5 h-5 rounded-full bg-[#1a2a0a] border border-[#c8ff00]/30 flex items-center justify-center">
          <span className="text-[#c8ff00] text-[8px]">🏢</span>
        </div>
        <p className="text-white text-xs font-bold font-[family-name:var(--font-space-grotesk)]">
          Business Info
        </p>
      </div>

      <p className="text-[#555] text-[8px] mb-1 font-[family-name:var(--font-inter)]">
        Website Type Needed
      </p>
      <div className="flex flex-wrap gap-1">
        {types.map((t, i) =>
        <span
          key={t}
          className={`text-[7px] px-2 py-0.5 rounded-full font-[family-name:var(--font-inter)] border ${
          i === 0 ?
          "border-[#c8ff00]/50 text-[#c8ff00] bg-[#1a2a0a]" :
          "border-[#222] text-[#888] bg-transparent"}`
          }>

            {t}
          </span>
        )}
      </div>

      <button className="mt-3 w-full bg-[#c8ff00] text-black text-[9px] font-bold rounded-xl py-2 font-[family-name:var(--font-space-grotesk)]">
        Continue →
      </button>
    </div>);

}

function DetailsScreen() {
  return (
    <div className="flex flex-col px-4 pt-2">
      <div className="flex items-center gap-2 mb-1">
        <button className="w-6 h-6 rounded-full bg-[#141414] flex items-center justify-center">
          <span className="text-white text-[9px]">←</span>
        </button>
        <div>
          <p className="text-white text-xs font-bold font-[family-name:var(--font-space-grotesk)]">
            Start Your Project
          </p>
          <p className="text-[#555] text-[8px] font-[family-name:var(--font-inter)]">
            STEP 2 OF 4
          </p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="flex gap-1 mb-3">
        {[1, 1, 0, 0].map((v, i) =>
        <div key={i} className="flex-1 h-0.5 rounded-full overflow-hidden bg-[#222]">
            <div
            className="h-full bg-[#c8ff00] rounded-full"
            style={{ width: v ? "100%" : "0%" }} />

          </div>
        )}
      </div>

      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-5 h-5 rounded-full bg-[#1a2a0a] border border-[#c8ff00]/30 flex items-center justify-center">
          <span className="text-[#c8ff00] text-[8px]">📋</span>
        </div>
        <p className="text-white text-xs font-bold font-[family-name:var(--font-space-grotesk)]">
          Project Details
        </p>
      </div>

      <div className="space-y-2">
        <div>
          <p className="text-[#555] text-[8px] mb-1 font-[family-name:var(--font-inter)]">
            Upload Reference Designs
          </p>
          <div className="bg-[#141414] border border-dashed border-[#333] rounded-xl h-12 flex flex-col items-center justify-center gap-1">
            <span className="text-[#555] text-sm">↑</span>
            <span className="text-[#555] text-[7px]">Tap to upload</span>
          </div>
        </div>
        <div>
          <p className="text-[#555] text-[8px] mb-1 font-[family-name:var(--font-inter)]">
            Describe What You Want
          </p>
          <div className="bg-[#141414] border border-[#222] rounded-xl h-14 px-2 py-1.5">
            <p className="text-[#444] text-[7px] font-[family-name:var(--font-inter)]">
              Describe your ideal website, features, style...
            </p>
          </div>
        </div>
        <div>
          <p className="text-[#555] text-[8px] mb-1 font-[family-name:var(--font-inter)]">
            Deadline Urgency
          </p>
          <div className="grid grid-cols-2 gap-1">
            {["Urgent", "Normal", "Relaxed", "Flexible"].map((d, i) =>
            <div
              key={d}
              className={`text-center rounded-xl py-1 text-[7px] font-[family-name:var(--font-inter)] border ${
              i === 1 ?
              "border-[#c8ff00]/50 text-[#c8ff00] bg-[#1a2a0a]" :
              "border-[#222] text-[#666]"}`
              }>

                {d}
              </div>
            )}
          </div>
        </div>
      </div>

      <button className="mt-2 w-full bg-[#c8ff00] text-black text-[9px] font-bold rounded-xl py-2 font-[family-name:var(--font-space-grotesk)]">
        Continue →
      </button>
    </div>);

}

function EstimateScreen() {
  return (
    <div className="flex flex-col px-4 pt-2">
      <div className="flex items-center gap-2 mb-1">
        <button className="w-6 h-6 rounded-full bg-[#141414] flex items-center justify-center">
          <span className="text-white text-[9px]">←</span>
        </button>
        <div>
          <p className="text-white text-xs font-bold font-[family-name:var(--font-space-grotesk)]">
            Start Your Project
          </p>
          <p className="text-[#555] text-[8px] font-[family-name:var(--font-inter)]">
            STEP 3 OF 4
          </p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="flex gap-1 mb-3">
        {[1, 1, 1, 0].map((v, i) =>
        <div key={i} className="flex-1 h-0.5 rounded-full overflow-hidden bg-[#222]">
            <div
            className="h-full bg-[#c8ff00] rounded-full"
            style={{ width: v ? "100%" : "0%" }} />

          </div>
        )}
      </div>

      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-5 h-5 rounded-full bg-[#1a2a0a] border border-[#c8ff00]/30 flex items-center justify-center">
          <span className="text-[#c8ff00] text-[8px]">$</span>
        </div>
        <p className="text-white text-xs font-bold font-[family-name:var(--font-space-grotesk)]">
          Auto Estimate
        </p>
      </div>

      <div className="bg-[#141414] border border-[#222] rounded-2xl p-3 mb-3">
        <p className="text-[#555] text-[7px] uppercase tracking-widest mb-1 font-[family-name:var(--font-inter)]">
          Estimated Cost
        </p>
        <div className="flex items-baseline gap-1">
          <span className="text-[#c8ff00] text-2xl font-black font-[family-name:var(--font-space-grotesk)]">
            ₹15,000
          </span>
          <span className="text-[#555] text-[9px] font-[family-name:var(--font-inter)]">
            — ₹21,000
          </span>
        </div>

        <div className="border-t border-[#1a1a1a] mt-2 pt-2">
          <p className="text-[#555] text-[7px] uppercase tracking-widest mb-1 font-[family-name:var(--font-inter)]">
            Estimated Delivery
          </p>
          <p className="text-white text-xs font-bold font-[family-name:var(--font-space-grotesk)]">
            2 weeks
          </p>
        </div>

        <div className="border-t border-[#1a1a1a] mt-2 pt-2">
          <p className="text-[#555] text-[7px] uppercase tracking-widest font-[family-name:var(--font-inter)]">
            Breakdown
          </p>
        </div>
      </div>

      <p className="text-[#444] text-[7px] text-center mb-2 font-[family-name:var(--font-inter)]">
        * Auto-generated estimate. Final pricing after consultation.
      </p>

      <button className="w-full bg-[#c8ff00] text-black text-[9px] font-bold rounded-xl py-2 font-[family-name:var(--font-space-grotesk)]">
        Continue →
      </button>
    </div>);

}