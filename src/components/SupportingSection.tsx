"use client";

const items = [
{
  title: "72-Hour Launch Guarantee",
  description: "We don't just promise speed — we deliver. Most agencies take weeks for discovery calls alone. We launch production-ready websites in 72 hours from project kickoff.",
  tag: "Average delivery: 2-3 weeks for full projects",
  number: "01"
},
{
  title: "Built to Convert, Not Just Look Good",
  description: "Every element is engineered with one purpose: turn visitors into customers. CTA placement, load speed, mobile-first UX — all precision-crafted for conversion.",
  tag: "Performance-first architecture",
  number: "02"
},
{
  title: "Premium Engineering, Indian Pricing",
  description: "You get Silicon Valley-level quality at a fraction of the cost. No templates, no shortcuts — custom code, clean architecture, scalable systems.",
  tag: "Starting from ₹15,000",
  number: "03"
}];


export default function SupportingSection() {
  return (
    <section className="relative py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) =>
          <div
            key={i}
            className="group relative bg-[#0f0f0f] border border-[#1a1a1a] rounded-3xl p-8 hover:border-[#c8ff00]/30 transition-all duration-300">

            <div className="flex flex-col h-full">
              <div className="mb-6">
                 <span className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-[#1a1a1a] select-none">
                    {item.number}
                 </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 font-[family-name:var(--font-space-grotesk)]">
                {item.title}
              </h3>
              <p className="text-[#666] text-sm leading-relaxed mb-8 font-[family-name:var(--font-inter)]">
                {item.description}
              </p>

              <div className="mt-auto">
                <div className="inline-flex items-center gap-2 bg-[#1a2a0a] border border-[#c8ff00]/20 rounded-full px-4 py-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c8ff00]" />
                  <span className="text-[#c8ff00] text-[10px] font-bold uppercase tracking-wider font-[family-name:var(--font-space-grotesk)]">
                    {item.tag}
                  </span>
                </div>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    </section>);

}
