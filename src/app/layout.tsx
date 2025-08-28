import type { Metadata } from "next";
import { Figtree } from "next/font/google";

import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "GIP - Landing Page",
  description: "Landing page do GIP – Gestão do Investimento Público do Piauí",
};

export const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-figtree",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
