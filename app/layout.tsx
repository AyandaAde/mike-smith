import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mike Smith Portfolio",
  description: "I'm Mike Smith, a passionate web developer with a knack for crafting clean, user-friendly, and visually stunning websites. This portfolio is your one-stop show to explore my skills and experience in bringing digital ideas to life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script src="https://kit.fontawesome.com/1dce5cdcc1.js" />
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <body className={inter.className}>
          {children}
        </body>
      </ThemeProvider>
    </html >
  );
}
