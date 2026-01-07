import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manik Sehrawat - AI Engineer • 3D Game & Web Developer",
  description: "I build AI tools, 3D experiences, and modern web apps.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body>
        <SmoothScroll>
          <div className="grainy-overlay"></div>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

