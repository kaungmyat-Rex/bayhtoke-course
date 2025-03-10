import type { Metadata } from "next";
import { Nunito, Montserrat } from "next/font/google";
import "./globals.css";
import "../css/Custom.css";
const NunitoPrimary = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const MontserratHeader = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Bayhtoke Courses",
    template: "%s - Bayhtoke Courses",
  },
  description:
    "Learn More, Pay Less – Affordable Online Courses form Udemy, Domestika and so on",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${NunitoPrimary.variable} ${MontserratHeader.variable} antialiased bg-[#141B23] overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
