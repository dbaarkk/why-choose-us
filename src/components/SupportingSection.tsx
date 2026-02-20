"use client";

import { useRef, useEffect, useState } from "react";

const services = [
  { icon: "🌐", label: "Business Sites" },
  { icon: "🚀", label: "Landing Pages" },
  { icon: "🛒", label: "E-commerce" },
  { icon: "</>", label: "Web Apps" },
  { icon: "📱", label: "Mobile PWA" },
  { icon: "📊", label: "Dashboards" },
  { icon: "🎨", label: "Portfolio" },
  { icon: "🛡", label: "SaaS" },
  { icon: "⚡", label: "Automation" },
  { icon: "🖊", label: "CMS Sites" },
  { icon: "📦", label: "Custom Apps" },
  { icon: "🔗", label: "API Integration" },
];

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Founder, TechStart India",
    text: "Sovereign Sites delivered our MVP in 4 days. The quality was absolutely top-notch. Competitors were quoting 2 months.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "CEO, StyleCo",
    text: "Our e-commerce conversions doubled after the rebuild. The attention to UX detail is unmatched. Best investment we've made.",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    role: "Director, FinanceHub",
    text: "The booking app alone saved us hours every week. Their auto-estimate feature is genius — knew exactly what we'd spend.",
    rating: 5,
  },
];

const process = [
  {
    step: "01",
    title: "Book via App",
    description: "Fill out our smart booking form at book.sovereignsites.in. Get an instant auto-estimate — no calls needed.",
    link: "book.sovereignsites.in",
    href: "https://book.sovereignsites.in",
  },
  {
    step: "02",
    title: "Discovery Call",
    description: "We schedule a 30-minute call to align on vision, features, and timeline. Fast, focused, no fluff.",
  },
  {
    step: "03",
    title: "Design & Build",
    description: "Our team starts building immediately. You get progress updates. Transparent, collaborative, efficient.",
  },
  {
    step: "04",
    title: "Launch & Grow",
    description: "We launch your site and hand over the keys. Plus ongoing support to help you grow beyond launch.",
  },
];

export default function SupportingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const key = (entry.target as HTMLElement).dataset.key || "";
          if (entry.isIntersecting) {
            setVisible((prev) => new Set([...prev, key]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const els =
      containerRef.current?.querySelectorAll("[data-key]") || [];
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const isVisible = (key: string) => visible.has(key);

  return (
    <div ref={containerRef} className="bg-[#080808]">
      {/* Services section */}
      <section className="py-24 border-t border-[#111]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div
            data-key="services-header"
            className={`text-center mb-14 transition-all duration-700 ${
              isVisible("services-header")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="font-[family-name:var(--font-space-grotesk)] text-[#c8ff00] text-xs uppercase tracking-[0.25em] mb-4">
              ~ What We Build ~
            </p>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold text-white leading-tight">
              12 types of websites.
              <br />
              <span className="text-[#c8ff00]">One agency.</span>
            </h2>
          </div>

          <div
            data-key="services-grid"
            className={`grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 transition-all duration-700 delay-200 ${
              isVisible("services-grid")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {services.map((service) => (
              <div
                key={service.label}
                className="group bg-[#0d0d0d] border border-[#1a1a1a] rounded-2xl p-4 flex flex-col items-center gap-2 hover:border-[#c8ff00]/30 hover:bg-[#111] transition-all duration-300 cursor-default"
              >
                <div className="w-10 h-10 bg-[#1a2a0a] border border-[#c8ff00]/20 rounded-xl flex items-center justify-center text-lg group-hover:border-[#c8ff00]/50 transition-colors">
                  {service.icon}
                </div>
                <span className="text-[#888] text-xs text-center font-[family-name:var(--font-inter)] group-hover:text-white transition-colors leading-tight">
                  {service.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="py-24 border-t border-[#111]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div
            data-key="process-header"
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible("process-header")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="font-[family-name:var(--font-space-grotesk)] text-[#c8ff00] text-xs uppercase tracking-[0.25em] mb-4">
              ~ How We Work ~
            </p>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold text-white leading-tight">
              Simple process.
              <br />
              <span className="text-[#c8ff00]">Extraordinary results.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <div
                key={i}
                data-key={`process-${i}`}
                className={`relative bg-[#0d0d0d] border border-[#1a1a1a] rounded-3xl p-8 transition-all duration-700 ${
                  isVisible(`process-${i}`)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Connector line */}
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-[#c8ff00]/30" />
                )}

                <span className="font-[family-name:var(--font-space-grotesk)] text-5xl font-black text-[#1a1a1a] block mb-4">
                  {step.step}
                </span>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-[#666] text-sm leading-relaxed font-[family-name:var(--font-inter)]">
                  {step.description}
                </p>
                {step.link && (
                  <a
                    href={step.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-4 text-[#c8ff00] text-xs font-[family-name:var(--font-inter)] hover:underline"
                  >
                    {step.link} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 border-t border-[#111]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div
            data-key="testimonials-header"
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible("testimonials-header")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="font-[family-name:var(--font-space-grotesk)] text-[#c8ff00] text-xs uppercase tracking-[0.25em] mb-4">
              ~ Client Results ~
            </p>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold text-white leading-tight">
              Don&apos;t take our word.
              <br />
              <span className="text-[#c8ff00]">Take theirs.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                data-key={`testimonial-${i}`}
                className={`bg-[#0d0d0d] border border-[#1a1a1a] rounded-3xl p-8 transition-all duration-700 hover:border-[#c8ff00]/20 ${
                  isVisible(`testimonial-${i}`)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="flex gap-0.5 mb-5">
                  {[...Array(t.rating)].map((_, j) => (
                    <span key={j} className="text-[#c8ff00] text-sm">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-white text-base font-[family-name:var(--font-inter)] leading-relaxed mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1a2a0a] border border-[#c8ff00]/30 flex items-center justify-center">
                    <span className="text-[#c8ff00] font-bold text-sm">
                      {t.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold font-[family-name:var(--font-space-grotesk)]">
                      {t.name}
                    </p>
                    <p className="text-[#555] text-xs font-[family-name:var(--font-inter)]">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
