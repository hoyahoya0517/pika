import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Menu from "./_components/Menu/Menu";

export const metadata: Metadata = {
  title: "PIKA",
  description: "PIKAPIKA",
};

const font = Poppins({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${font.className}`}>
      <link rel="icon" href="/images/favicon.ico" sizes="48x48" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/apple-icon.png"
      />
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}
