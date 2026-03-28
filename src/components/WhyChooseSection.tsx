"use client";

import { useRef, useEffect, useState } from "react";

const reasons = [
{
  icon: "",
  number: "01",
  title: "72-Hour Launch Guarantee",
  description:
  "We don't just promise speed — we deliver. Most agencies take weeks for discovery calls alone. We launch production-ready websites in 72 hours from project kickoff.",
  proof: "Average delivery: 2-3 weeks for full projects"
},
{
  icon: "",
  number: "02",
  title: "Built to Convert, Not Just Look Good",
  description:
  "Every element is engineered with one purpose: turn visitors into customers. CTA placement, load speed, mobile-first UX — all precision-crafted for conversion.",
  proof: "Performance-first architecture"
},
{
  icon: "",
  number: "03",
  title: "Premium Engineering, Indian Pricing",
  description:
  "You get Silicon Valley-level quality at a fraction of the cost. No templates, no shortcuts — custom code, clean architecture, scalable systems.",
  proof: "Starting from ₹15,000"
},
{
  icon: "",
  number: "04",
  title: "Transparent Pricing via Auto-Estimate",
  description:
  "Our booking app generates instant estimates before you even speak to us. No surprise invoices. No \"we'll get back to you\" pricing games.",
  proof: "Get your estimate in 2 minutes"
},
{
  icon: "",
  number: "05",
  title: "Mobile-First, Always",
  description:
  "Over 80% of your visitors are on mobile. Every site we build is designed mobile-first, then scaled up — never the reverse.",
  proof: "100% mobile-optimized"
},
{
  icon: "",
  number: "06",
  title: "Full-Stack Capability",
  description:
  "From landing pages to SaaS platforms, booking systems to custom dashboards — we build the full stack. One agency, every solution.",
  proof: "12+ website types available"
}];


const stats = [
{ value: "72hrs", label: "Launch Speed" },
{ value: "12+", label: "Website Types" },
{ value: "100%", label: "Custom Built" },
{ value: "₹15K+", label: "Starting Price" }];


export default function WhyChooseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = parseInt(
            (entry.target as HTMLElement).dataset.index || "0"
          );
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, idx]));
          }
        });
      },
      { threshold: 0.15 }
    );

    const cards = containerRef.current?.querySelectorAll("[data-index]") || [];
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

    return (
      <section ref={containerRef} className="relative pt-12 pb-24 bg-[#060606] overflow-hidden">
        {/* Subtle radial glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "800px",
          height: "800px",
          background:
          "radial-gradient(circle, rgba(200,255,0,0.04) 0%, transparent 70%)"
        }} />


      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
          "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }} />


      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="font-[family-name:var(--font-space-grotesk)] text-[#c8ff00] text-xs uppercase tracking-[0.25em] mb-4">
            ~ Why Choose Us ~
          </p>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
            Not another agency.
            <br />
            <span className="text-[#c8ff00]">A growth partner.</span>
          </h2>
          <p className="mt-6 text-[#666] text-base md:text-lg font-[family-name:var(--font-inter)] max-w-2xl mx-auto leading-relaxed">
            Most web agencies give you a template, charge you a fortune, and
            disappear. We&apos;re different — we obsess over your success from
            day one to launch and beyond.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, i) =>
          <div
            key={i}
            data-index={i}
            className={`bg-[#0f0f0f] border border-[#1a1a1a] rounded-2xl p-6 text-center transition-all duration-700 ${
            visibleCards.has(i) ?
            "opacity-100 translate-y-0" :
            "opacity-0 translate-y-8"}`
            }
            style={{ transitionDelay: `${i * 100}ms` }}>

              <p className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-black text-[#c8ff00]">
                {stat.value}
              </p>
              <p className="text-[#555] text-sm mt-1 font-[family-name:var(--font-inter)]">
                {stat.label}
              </p>
            </div>
          )}
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) =>
          <div
            key={i}
            data-index={i + stats.length}
            className={`group relative bg-[#0d0d0d] border border-[#1a1a1a] rounded-3xl p-8 hover:border-[#c8ff00]/30 hover:shadow-[0_0_40px_rgba(200,255,0,0.06)] transition-all duration-500 cursor-default ${
            visibleCards.has(i + stats.length) ?
            "opacity-100 translate-y-0" :
            "opacity-0 translate-y-12"}`
            }
            style={{ transitionDelay: `${i * 80}ms` }}>

              <span className="font-[family-name:var(--font-space-grotesk)] text-5xl font-black text-[#1a1a1a] block mb-4">
                {reason.number}
              </span>

              {/* Content */}
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white mb-3 leading-snug">
                {reason.title}
              </h3>
              <p className="text-[#666] text-sm leading-relaxed font-[family-name:var(--font-inter)] mb-4">
                {reason.description}
              </p>

              {/* Proof tag */}
              <div className="inline-flex items-center gap-1.5 bg-[#1a2a0a] border border-[#c8ff00]/20 rounded-full px-3 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c8ff00]" />
                <span className="text-[#c8ff00] text-xs font-[family-name:var(--font-inter)] font-medium">
                  {reason.proof}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-[#0d0d0d] border border-[#1a1a1a] rounded-3xl p-10 max-w-2xl w-full">
            <p className="text-[#c8ff00] text-xs uppercase tracking-widest mb-4 font-[family-name:var(--font-space-grotesk)]">
              Ready to Build?
            </p>
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-white mb-4">
              Your next website starts
              <br />
              <span className="text-[#c8ff00]">right here.</span>
            </h3>
            <p className="text-[#666] font-[family-name:var(--font-inter)] mb-8 text-base leading-relaxed">
              Join hundreds of businesses that chose Sovereign Sites to launch
              faster, convert better, and grow smarter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://book.sovereignsites.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#c8ff00] text-black font-[family-name:var(--font-space-grotesk)] font-bold text-base px-8 py-4 rounded-full hover:bg-[#d4ff1a] transition-all duration-200 hover:scale-105 shadow-[0_0_30px_rgba(200,255,0,0.25)] !whitespace-pre-line">
                 Start Your Project

              </a>
              <a
                href="https://sovereignsites.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-[#333] text-white font-[family-name:var(--font-space-grotesk)] font-medium text-base px-8 py-4 rounded-full hover:border-[#c8ff00] hover:text-[#c8ff00] transition-all duration-200">

                Visit Agency ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>);

}