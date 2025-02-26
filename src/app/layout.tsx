import React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Synctip",
  description:
    "Transparency for employees, efficiency for managers, insights for owners.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
