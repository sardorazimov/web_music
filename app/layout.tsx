import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme";
import Header from "@/components/landing/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Test Music WEb",
  description: "A new music service with official albums, singles, videos, remixes, live performances and more for Android, iOS and desktop. It's all here.",
  icons: './svg/logo.svg'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* <Header /> */}
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
