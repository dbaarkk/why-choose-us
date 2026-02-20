import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Why Choose Sovereign Sites | Premium Web Development Agency",
  description:
    "Sovereign Sites builds high-performance, conversion-focused websites. Launch your business online in 72 hours. Performance-driven, custom engineered.",
  openGraph: {
    title: "Why Choose Sovereign Sites",
    description:
      "We build websites that convert. Launch your business online with India's premium web development agency.",
    url: "https://sovereignsites.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[#080808] text-white`}
      >
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
