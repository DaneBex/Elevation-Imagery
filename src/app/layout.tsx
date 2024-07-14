import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Elevation Imagery",
  description: "Professional drone photography services, capturing stunning aerial views for real estate, events, and landscape projects.",
  icons: [{ rel: "icon", url: "/drone.jpeg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        {children}
        <SpeedInsights />
        </body>
    </html>
  );
}
