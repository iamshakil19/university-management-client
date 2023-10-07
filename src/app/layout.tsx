import Providers from "@/lib/Providers";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "University Management",
  description: "This is the University Management application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body>{children}</body>
      </html>
    </Providers>
  );
}
