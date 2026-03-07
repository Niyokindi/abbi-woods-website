import type { Metadata } from "next";
import { Permanent_Marker } from "next/font/google";
import "./globals.css";

const permanentMarker = Permanent_Marker({
  variable: "--font-permanent-marker",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abbi Woods | Official Website",
  description:
    "Official website of Abbi Woods. Explore the latest music, upcoming shows, and behind-the-scenes content.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${permanentMarker.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
