import type { Metadata } from "next";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { CursorEffects } from "@/components/CursorEffects";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { PageLoader } from "@/components/PageLoader";

export const metadata: Metadata = {
  title: "Aiswarya C P | 3D Portfolio",
  description: "Cinematic 3D developer portfolio of Aiswarya C P."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans bg-bg">
        <SmoothScrollProvider>
          <ScrollProgressBar />
          <CursorEffects />
          <PageLoader />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

