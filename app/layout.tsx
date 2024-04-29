import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const font = Josefin_Sans({ subsets: ["latin"], weight: "variable" });

export const metadata: Metadata = {
  title: "Cat Panorama",
  description: "A carousel of cute cat pics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
