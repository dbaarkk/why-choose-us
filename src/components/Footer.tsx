export default function Footer() {
  return (
    <footer className="bg-[#060606] border-t border-[#111] py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a
              href="https://sovereignsites.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 mb-4">

              <span className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white tracking-tight">
                Sovereign
              </span>
              <span className="text-[#c8ff00] text-3xl font-bold leading-none">
                .
              </span>
            </a>
            <p className="text-[#555] text-sm font-[family-name:var(--font-inter)] leading-relaxed max-w-xs">
              India&apos;s premium web development agency. Building
              high-performance, conversion-focused websites since day one.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-white text-sm font-semibold font-[family-name:var(--font-space-grotesk)] mb-4 uppercase tracking-widest">
              Quick Links
            </p>
            <div className="space-y-3">
              {[
              { label: "Main Website", href: "https://sovereignsites.in" },
              {
                label: "Book a Project",
                href: "https://book.sovereignsites.in"
              },
              {
                label: "Get Estimate",
                href: "https://book.sovereignsites.in"
              }].
              map((link) =>
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#666] hover:text-[#c8ff00] text-sm font-[family-name:var(--font-inter)] transition-colors duration-200">

                  <span className="w-1 h-1 rounded-full bg-[#333]" />
                  {link.label}
                </a>
              )}
            </div>
          </div>

          {/* CTA */}
          <div>
            <p className="text-white text-sm font-semibold font-[family-name:var(--font-space-grotesk)] mb-4 uppercase tracking-widest">
              Start Today
            </p>
            <p className="text-[#555] text-sm font-[family-name:var(--font-inter)] mb-4 leading-relaxed">
              Ready to launch? Get your instant estimate and start building your
              dream website today.
            </p>
            <a
              href="https://book.sovereignsites.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#c8ff00] text-black font-[family-name:var(--font-space-grotesk)] font-bold text-sm px-6 py-3 rounded-full hover:bg-[#d4ff1a] transition-all duration-200 hover:scale-105 !whitespace-pre-line">
               Launch Your Site →

            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#111] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#444] text-xs font-[family-name:var(--font-inter)]">
            © 2026 Sovereign Sites. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://sovereignsites.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#444] text-xs hover:text-[#c8ff00] font-[family-name:var(--font-inter)] transition-colors">

              sovereignsites.in
            </a>
            <a
              href="https://book.sovereignsites.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#444] text-xs hover:text-[#c8ff00] font-[family-name:var(--font-inter)] transition-colors">

              book.sovereignsites.in
            </a>
          </div>
        </div>
      </div>
    </footer>);

}