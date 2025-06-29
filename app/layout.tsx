import type React from "react";
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import { NotificationProvider } from "@/components/ui/notification-provider";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Peto Group Ltd - Premium Personal Care & Cleaning Products | Made in Rwanda",
  description:
    "Leading manufacturer of premium personal care and cleaning products in Rwanda. ISO certified quality, sustainable practices, and exceptional service. Get your custom quote today.",
  keywords:
    "Rwanda manufacturing, personal care products, cleaning products, kitchen soap, laundry detergent, industrial cleaning, premium quality, ISO certified, sustainable manufacturing, Peto Group",
  authors: [{ name: "Peto Group Ltd" }],
  openGraph: {
    title: "Peto Group Ltd - Premium Manufacturing Excellence",
    description:
      "Premium personal care and cleaning products manufactured in Rwanda to international standards.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
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
        <NotificationProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </NotificationProvider>
      </body>
    </html>
  );
}
