import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Sri Saamba Parmeshwara Industries - Natural Beverages & Food Products",
  description:
    "Leading manufacturer of natural fruit drinks and prebiotic sodas. Discover Frippy fruit drinks and Dr Fiber prebiotic sodas - all natural, no artificial ingredients.",
  keywords:
    "natural beverages, fruit drinks, prebiotic soda, healthy drinks, no artificial ingredients, Frippy, Dr Fiber, Indian beverage company",
  openGraph: {
    title:
      "Sri Saamba Parmeshwara Industries - Natural Beverages & Food Products",
    description:
      "Leading manufacturer of natural fruit drinks and prebiotic sodas. Discover Frippy fruit drinks and Dr Fiber prebiotic sodas.",
    type: "website",
    url: "https://srisaamba.com",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico", // or '/favicon.png'
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
