import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Unfinished Self",
  description:
    "She wears pink, follows her heart… and sometimes her boyfriend.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}