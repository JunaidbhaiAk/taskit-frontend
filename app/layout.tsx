import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "../components/theme-provider";
import "./globals.css";
import { cn } from "../lib/utils";
import { TokenProvider } from "@/context/TokenContext";
import { Toaster } from "@/components/ui/toaster";
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Task Manager",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* <TaskProvider> */}
          <TokenProvider>{children}</TokenProvider>
          {/* </TaskProvider> */}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
