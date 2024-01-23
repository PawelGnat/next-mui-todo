import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

export const fontRoboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "CRUD with MUI",
  description: "Simple crud app with Material UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased text-primary",
          fontRoboto.variable
        )}>
        {children}
      </body>
    </html>
  );
}
