"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const progress = Math.max(
        0,
        Math.min(1, -rect.top / (sectionHeight * 0.55))
      );
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Translate from 0% (fully visible) to -120% / +120% (fully offscreen)
  const handOffset = scrollProgress * 120;
  const handOpacity = Math.max(0, 1 - scrollProgress * 1.4);

    return (
      <section
        ref={sectionRef}
        className="relative flex flex-col items-center justify-start overflow-hidden bg-[#080808] pb-16 pt-4"
      >

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }} />


      {/* Nav */}
      <nav className="relative z-20 w-full flex items-center justify-between px-6 md:px-12 py-5">
        <a
          href="https://sovereignsites.in"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-0.5">

          <span className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white tracking-tight">
            Sovereign
          </span>
          <span className="text-[#c8ff00] text-2xl font-black leading-none pb-1">
            .
          </span>
        </a>
        <a
          href="https://book.sovereignsites.in"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#c8ff00] text-black font-[family-name:var(--font-space-grotesk)] font-bold text-xs px-4 py-2 rounded-full hover:bg-[#d4ff1a] transition-all duration-200 hover:scale-105">

          Start Your Project →
        </a>
      </nav>

      {/* ===== HERO VISUAL: Phone + Hands ===== */}
      <div
        className="relative w-full flex items-center justify-center"
        style={{ height: "480px", marginTop: "12px" }}>

          {/* LEFT HAND — slides left on scroll */}
          <div
          className="absolute inset-y-0 left-0 w-[46%] pointer-events-none select-none flex items-center justify-end pr-10 md:pr-16"
          style={{
            transform: `translateX(-${handOffset}%)`,
            opacity: handOpacity,
            transition: "transform 0.04s linear, opacity 0.04s linear",
            zIndex: 10
          }}>

            <div
            className="w-full h-full max-w-[400px]"
            style={{
              backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/ea4c5bf3-e4d3-4927-b10a-3399b21a079d/Screenshot_2026-02-20-12-58-23-64_99c04817c0de5652397fc8b56c3b3817-1771574357893.png?width=8000&height=8000&resize=contain')`,
              backgroundSize: "contain",
              backgroundPosition: "right center",
              backgroundRepeat: "no-repeat",
              filter: "invert(1) opacity(0.8)"
            }} />

          </div>

          {/* RIGHT HAND — slides right on scroll */}
          <div
          className="absolute inset-y-0 right-0 w-[46%] pointer-events-none select-none flex items-center justify-start pl-10 md:pl-16"
          style={{
            transform: `translateX(${handOffset}%)`,
            opacity: handOpacity,
            transition: "transform 0.04s linear, opacity 0.04s linear",
            zIndex: 10
          }}>

            <div
            className="w-full h-full max-w-[400px]"
            style={{
              backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/ea4c5bf3-e4d3-4927-b10a-3399b21a079d/Screenshot_2026-02-20-12-58-54-03_99c04817c0de5652397fc8b56c3b3817-1771574347598.png?width=8000&height=8000&resize=contain')`,
              backgroundSize: "contain",
              backgroundPosition: "left center",
              backgroundRepeat: "no-repeat",
              filter: "invert(1) opacity(0.8)"
            }} />

          </div>

        {/* Center phone mockup — always stays */}
        <div className="relative z-20 flex flex-col items-center drop-shadow-2xl">
          <PhoneMockup />
        </div>
      </div>

      {/* Hero text */}
      <div className="relative z-10 text-center px-6 mt-10 max-w-3xl mx-auto">
        <p className="font-[family-name:var(--font-space-grotesk)] text-[#c8ff00] text-xs uppercase tracking-[0.25em] mb-5 opacity-80">
          ~ Premium Web Development Agency ~
        </p>
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
          We build websites
          <br />
          <em className="not-italic text-[#c8ff00]">that convert.</em>
        </h1>
        <p className="mt-6 text-[#777] text-base md:text-lg leading-relaxed font-[family-name:var(--font-inter)] max-w-xl mx-auto">
          Sovereign Sites is India&apos;s premium web development agency. Launch
          your business online in 72 hours — performance-driven, custom
          engineered, built to dominate.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 pb-4">
          <a
            href="https://book.sovereignsites.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#c8ff00] text-black font-[family-name:var(--font-space-grotesk)] font-bold text-base px-8 py-4 rounded-full hover:bg-[#d4ff1a] transition-all duration-200 hover:scale-105 shadow-[0_0_40px_rgba(200,255,0,0.3)] !whitespace-pre-line !whitespace-pre-line">Start Your Project →


          </a>
          <a
            href="https://sovereignsites.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-[#2a2a2a] text-white font-[family-name:var(--font-space-grotesk)] font-medium text-base px-8 py-4 rounded-full hover:border-[#c8ff00] hover:text-[#c8ff00] transition-all duration-200">

            Visit Agency ↗
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="relative z-10 mt-12 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#c8ff00]/60" />
        <span className="text-[#444] text-xs font-[family-name:var(--font-inter)] tracking-widest uppercase">
          Scroll to explore
        </span>
      </div>
    </section>);

}

function PhoneMockup() {
  return (
    <div
      className="relative transform scale-[0.65] md:scale-[0.70] lg:scale-[0.80] origin-center transition-transform"
      style={{ width: "210px", height: "440px" }}>

      {/* Glow behind phone */}
      <div
        className="absolute inset-0 rounded-[38px] pointer-events-none"
        style={{
          background:
          "radial-gradient(ellipse at 50% 50%, rgba(200,255,0,0.12) 0%, transparent 70%)",
          transform: "scale(1.3)"
        }} />


      {/* Side buttons */}
      <div className="absolute -left-[3px] top-[90px] w-[3px] h-[20px] bg-[#222] rounded-l-md shadow-[-1px_0_2px_rgba(255,255,255,0.1)]" /> {/* Action */}
      <div className="absolute -left-[3px] top-[130px] w-[3px] h-[40px] bg-[#222] rounded-l-md shadow-[-1px_0_2px_rgba(255,255,255,0.1)]" /> {/* Vol Up */}
      <div className="absolute -left-[3px] top-[180px] w-[3px] h-[40px] bg-[#222] rounded-l-md shadow-[-1px_0_2px_rgba(255,255,255,0.1)]" /> {/* Vol Down */}
      <div className="absolute -right-[3px] top-[140px] w-[3px] h-[55px] bg-[#222] rounded-r-md shadow-[1px_0_2px_rgba(255,255,255,0.1)]" /> {/* Power */}

      {/* Outer frame / Bezel */}
      <div className="absolute inset-0 rounded-[40px] bg-black border-[4px] border-[#2a2a2a] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.05)] p-[3px]">
        
          {/* Inner Screen */}
          <div className="relative w-full h-full rounded-[32px] bg-[#0a0a0a] border border-[#1e1e1e] overflow-hidden">
            
            {/* Dynamic island / Camera Pill */}
            <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[85px] h-[24px] bg-[#2a2a2a] border border-[#3a3a3a] rounded-full z-30 flex items-center justify-end px-2 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]">
              <div className="w-[12px] h-[12px] rounded-full bg-black shadow-[inset_0_0_4px_rgba(255,255,255,0.2)] flex items-center justify-center mr-0.5">
                 <div className="w-[4px] h-[4px] rounded-full bg-[#111]" />
              </div>
            </div>

          {/* Screen bg grid */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
              "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
              backgroundSize: "22px 22px"
            }} />


          {/* Screen content */}
          <div className="absolute inset-0 flex flex-col pt-10 pb-0">
            {/* Header */}
          <div className="flex items-start justify-between px-5 py-3">
            <div>
              <p className="font-[family-name:var(--font-inter)] text-[#888] text-[9px] uppercase tracking-[0.2em]">
                WELCOME BACK
              </p>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-white text-[26px] font-bold leading-tight">
                Aarya
              </h2>
            </div>
            <div className="w-9 h-9 rounded-full bg-[#c8ff00] flex items-center justify-center mt-1">
              <span className="text-black font-black text-sm font-[family-name:var(--font-space-grotesk)]">
                A
              </span>
            </div>
          </div>

          {/* Hero card */}
          <div className="mx-4 bg-[#111] border border-[#1e1e1e] rounded-2xl p-4 mb-3">
            <div className="flex items-center gap-1 mb-2.5">
              <div className="bg-[#182410] border border-[#c8ff00]/25 rounded-full px-2 py-0.5 flex items-center gap-1">
                <span className="text-[#c8ff00] text-[7px]">✦</span>
                <span className="text-[#c8ff00] text-[7px] font-bold uppercase tracking-wider">
                  Premium Web Agency
                </span>
              </div>
            </div>
            <p className="text-white text-[13px] font-bold leading-snug font-[family-name:var(--font-space-grotesk)]">
              We build websites{" "}
              <span className="text-[#c8ff00] italic">that convert</span>
            </p>
            <p className="text-[#666] text-[9px] mt-1 leading-relaxed font-[family-name:var(--font-inter)]">
              Launch your business online in 72 hours. Performance-driven,
              custom engineered.
            </p>
            <button className="mt-3 w-full bg-[#c8ff00] text-black text-[10px] font-black rounded-full py-2 flex items-center justify-center gap-1 font-[family-name:var(--font-space-grotesk)]">
              🚀 Start Your Project →
            </button>
          </div>

          {/* Services label */}
          <div className="flex items-center justify-between px-5 mb-2">
            <p className="text-white text-[11px] font-bold font-[family-name:var(--font-space-grotesk)]">
              Our Services
            </p>
            <p className="text-[#555] text-[9px] font-[family-name:var(--font-inter)]">
              12 types
            </p>
          </div>

          {/* Mini service grid */}
          <div className="grid grid-cols-3 gap-1.5 px-4 flex-1">
            {[
              { icon: "🌐", label: "Business Sites" },
              { icon: "🚀", label: "Landing Pages" },
              { icon: "🛒", label: "E-commerce" },
              { icon: "</>", label: "Web Apps" },
              { icon: "📱", label: "Mobile PWA" },
              { icon: "📊", label: "Dashboards" }].
              map((s) =>
              <div
                key={s.label}
                className="bg-[#111] border border-[#1a1a1a] rounded-xl p-2 flex flex-col items-center gap-1">

                <div className="w-5 h-5 rounded-lg bg-[#182410] flex items-center justify-center">
                  <span className="text-[#c8ff00] text-[9px]">
                    {s.icon}
                  </span>
                </div>
                <span className="text-[#666] text-[7px] text-center leading-tight font-[family-name:var(--font-inter)]">
                  {s.label}
                </span>
              </div>
              )}
          </div>

          {/* Bottom nav */}
          <div className="border-t border-[#1a1a1a] flex items-center justify-around py-2.5 px-3 mt-2">
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-[#c8ff00] text-[10px]">🚀</span>
              <span className="text-[#c8ff00] text-[6px] font-bold tracking-wide">
                LAUNCH
              </span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-[#555] text-[10px]">📁</span>
              <span className="text-[#555] text-[6px] tracking-wide">
                PROJECTS
              </span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-[#555] text-[10px]">👤</span>
              <span className="text-[#555] text-[6px] tracking-wide">
                PROFILE
              </span>
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>);

}
